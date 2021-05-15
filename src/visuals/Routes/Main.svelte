<script>
    import Routes from "./routes_/Routes.svelte";
    import RoutePath from "./routes_/Path.svelte";
    import signedIn from "../../store/signedIn";

    import Admin from "../Admin/Main.svelte";

    let currentSignedIn;
    const updatedSignedIn = (lastSignedIn) => (currentSignedIn = lastSignedIn);
    $: signedIn.subscribe((lastSignedIn) => updatedSignedIn(lastSignedIn));
</script>

<div>
    {#if currentSignedIn !== "admin"}
        <Routes />
        <RoutePath />
    {:else}
        <Admin />
    {/if}
</div>
