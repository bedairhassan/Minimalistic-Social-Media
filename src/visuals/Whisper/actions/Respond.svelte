<script>
    import { db } from "../../../JS/firebase";

    import { shortDate } from "../../../JS/tools";

    export let whisper;

    import signedIn from "../../../store/signedIn";
    let currentSignedIn;
    const whoIsSignedIn = (lastSignedIn) => (currentSignedIn = lastSignedIn);
    signedIn.subscribe((lastSignedIn) => whoIsSignedIn(lastSignedIn));

    let message;
    let show = false;
    let respond = () => {
        show = !show;

        // hides input while sending data to firebase
        if (!show && message) {
            if (message !== "") {
                // previously
                const context = whisper.message;
                const receiver = whisper.sender;

                const sender = currentSignedIn;
                const id = shortDate() + sender;

                db.collection("whisper").doc(id).set({
                    context,
                    receiver,
                    sender,
                    id,
                    message,
                });

                // reset
                message = "";
            }
        }
    };
</script>

<div>
    <button on:click={respond}>Respond</button>

    {#if show}
        <input bind:value={message} />
    {/if}
</div>
