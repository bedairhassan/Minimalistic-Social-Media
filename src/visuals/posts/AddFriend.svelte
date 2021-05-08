<script>

    import {db} from '../../JS/firebase'

    // props
    export let whoToAdd;

    // variables for current page
    let signedInUser = "hassan"; // read cookie!

    // reusable
    const CREATEFirebase = (source, object) =>
        db.collection(source).add(object);

    const addFriend = () => {
        
        const object = {
            who: `${signedInUser},${whoToAdd}`, // issuedFriendRequest,ToDecideWhetherToAcceptOrReject
            state: "pending",
        };

        console.log(object)

        CREATEFirebase("friends", object);
    };
</script>

<button class="btn btn-warning" on:click={addFriend}>Add a Friend</button>