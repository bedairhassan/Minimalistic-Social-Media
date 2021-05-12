<script>

    import {db} from '../../JS/firebase'

    // props
    export let whoToAdd;

    // variables for current page
    // let currentSignedIn = "hassan"; // read cookie!


    import signedIn from '../../store/signedIn'
    let currentSignedIn=''
$:signedIn.subscribe(lastSignedIn=>currentSignedIn=lastSignedIn)




    // reusable
    const CREATEFirebase = (source, object) =>
        db.collection(source).add(object);

    const addFriend = () => {
        
        const object = {
            who: `${currentSignedIn},${whoToAdd}`, // issuedFriendRequest,ToDecideWhetherToAcceptOrReject
            state: "pending",
        };

        CREATEFirebase("friends", object);
    };
</script>

<!-- {currentSignedIn} -->
<button class="btn btn-warning" on:click={addFriend}>Add a Friend</button>