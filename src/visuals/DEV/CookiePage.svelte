<script>
    import signedIn from "../../store/signedIn";

    const setUser = (user) => signedIn.update((lastSignedIn) => user);
</script>

<button on:click={() => setUser("hassan")}>hassan🍪</button>
<button on:click={() => setUser("mohammed")}>mohammed🍪</button>
