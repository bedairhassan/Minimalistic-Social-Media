<script>
    import Routes_ from "../../../store/routeStore";
    import { Link } from "svelte-routing";
    import signedIn from "../../../store/signedIn";

    let routes;
    $: Routes_.subscribe((OBJ) => (routes = OBJ.render));

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));
</script>

{#if currentSignedIn}
    <nav class="navbar navbar-light bg-light">
        {#each routes as route}
            <span class="navbar-brand mb-0 h1">
                <Link to={route}>| {route} |</Link>
            </span>
        {/each}
    </nav>
{/if}
