<script>
    import { db } from "../../JS/firebase";

    // props
    export let whoToAdd;

    // variables for current page
    // let currentSignedIn = "hassan"; // read cookie!

    import signedIn from "../../store/signedIn";
    let currentSignedIn = "";
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    // reusable
    // const CREATEFirebase = (source, object) =>
        // db.collection(object.who).add(object); // returnBACK

    const addFriend = () => {

        if(currentSignedIn===whoToAdd){ // you can't add yourself
            return; 
        }

        const object = {
            who: `${currentSignedIn},${whoToAdd}`, 
            state: "pending",
        };
        console.table(object)

        // db.collection("posts")
        // db.collection("friends").doc(friend.who).delete();
        db.collection("friends").doc(object.who).set(object); 

        // CREATEFirebase("friends", object);
    };
</script>

<!-- {currentSignedIn} -->
<button class="btn btn-warning" on:click={addFriend}>Add a Friend</button>
