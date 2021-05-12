<script>
import { db } from "../../../JS/firebase";

    import { fetchOther } from "../../../JS/friends";
    import signedIn from "../../../store/signedIn";
    // import AddFriend from "../../posts/AddFriend.svelte";
// db

    export let friend;

    const addFriend = () => {
        let docId = friend.who;
        db.collection("friends")
            .doc(docId)
            .set({
                ...friend, // same object but only change
                state: "friends", // only change state
            });
    };

    // signedIn;
    // import signedIn from "../../store/signedIn";
    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let futureFriend;
    $: futureFriend = fetchOther(friend.who, currentSignedIn); // BACKAGAIN
</script>

<tr>
    <td>{futureFriend}</td>
    <td>
        <button class="btn btn-success" on:click={addFriend}>Add Friend</button>
    </td>
</tr>
