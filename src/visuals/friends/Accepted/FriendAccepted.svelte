<script>
    import { db } from "../../../JS/firebase";

    // fetches the person who isn't signed in
    import { fetchOther } from "../../../JS/friends";

    import signedIn from "../../../store/signedIn";

    export let friend;

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let friendToRemove;
    $: friendToRemove = fetchOther(friend.who, currentSignedIn);

    // $: console.table(friend.who);

    const removeFriend = () =>
        db.collection("friends").doc(friend.who).delete();

    let show = false;
    let message;
    const whisperFUN = () => {
        show = !show;
        console.log(show);

        // if show is true, user is typing
        // if show is false, user is done with typing
        if (!show) {
            // RET1
            db.collection("whisper").add({
                sender: currentSignedIn,
                receiver: fetchOther(friend.who, currentSignedIn),
                message,
                context: "👋",
            });
        }
    };
</script>

<tr>
    <td>{friendToRemove}</td>
    <td
        ><button class="btn btn-danger" on:click={removeFriend}
            >Remove Friend</button
        ></td
    >
    <td>
        <button on:click={whisperFUN}>Whisper</button>
    </td>
    {#if show}
        <td
            ><input
                bind:value={message}
                placeholder="whisper to your friend"
            /></td
        >
    {/if}
</tr>
