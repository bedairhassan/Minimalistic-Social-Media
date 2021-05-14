<script>
    import { db } from "../../../JS/firebase";

    import signedIn from "../../../store/signedIn";

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

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let futureFriend;
</script>

<tr>
    <td>{futureFriend}</td>
    <td>
        <button class="btn btn-success" on:click={addFriend}>Add Friend</button>
    </td>
</tr>
