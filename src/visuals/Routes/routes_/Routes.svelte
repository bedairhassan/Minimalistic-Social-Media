<script>
    // import Route from "./RouteSingle.svelte";
    import Routes_ from "../../../store/routeStore";
    import Single from "./Single.svelte";

    let routes;
    $: Routes_.subscribe((OBJ) => (routes = OBJ.render));
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
        {#each routes as route}
            <Single {route} />
        {/each}
    </ul>
</nav>
