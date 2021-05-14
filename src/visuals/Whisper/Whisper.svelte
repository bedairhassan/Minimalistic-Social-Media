<script>
    export let whisper;

    import Dismiss from './actions/Dismiss.svelte'
import Respond from './actions/Respond.svelte'
</script>

<div>
    {#if whisper.context === "👋"}
        {whisper.sender} waved 👋 at you.
    {:else}
        {whisper.context}
    {/if}

    {whisper.message}

    <!-- ISSUE? introduce id attribute to object -->
    <Dismiss id={whisper.id}/>
    <Respond {whisper}/>
    <!-- <button>Respond</button> -->
</div>
