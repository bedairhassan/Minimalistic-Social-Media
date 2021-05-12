<script>
    import { db } from "../../../JS/firebase";
    import { fetchOther } from "../../../JS/friends";
    import signedIn from "../../../store/signedIn";

    export let friend;

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let friendToRemove;
    $: friendToRemove = fetchOther(friend.who, currentSignedIn);


$:console.table(friend.who)



// db.collection("friends")
//             .doc(docId)
//             .set({
//                 ...friend, // same object but only change
//                 state: "friends", // only change state
//             });
    const removeFriend = () => db.collection('friends').doc(friend.who).delete();
</script>

<tr>
    <td>{friendToRemove}</td>
    <td
        ><button class="btn btn-danger" on:click={removeFriend}
            >Remove Friend</button
        ></td
    >
</tr>
