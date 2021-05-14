<script>
    export let whisper;
</script>

<div>
    {#if whisper.context === "👋"}
        {whisper.sender} waved 👋 at you.
    {:else}
        {whisper.context}
    {/if}

    {whisper.message}
</div>
