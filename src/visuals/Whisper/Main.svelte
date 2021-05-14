<script>
    import { db } from "../../JS/firebase";
    import signedIn from "../../store/signedIn";
    import Whisper from "./Whisper.svelte";

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let array;
    let fetch = false;

    db.collection("whisper").onSnapshot((snap) => {
        if (currentSignedIn) {
            array = snap.docs;
            // console.log(array);
            fetch = true;
        }
    });

    $: {
        if (fetch) {
            array = array
                .map((item) => item.data())
                .filter((item) => item.receiver === currentSignedIn)
                .sort((a, b) => a.sender > b.sender);
            console.log(array);
        }
    }
</script>

<div>
    {#if currentSignedIn}
        <h1>WHISPER PAGE</h1>

        {#if array}
            {#each array as whisper}
                <Whisper {whisper} />
            {/each}
        {:else}
            No Data
        {/if}
    {:else}
        Not Signed In
    {/if}
</div>
