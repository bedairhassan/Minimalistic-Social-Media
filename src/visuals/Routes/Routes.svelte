<script>
    import Route from "./Route.svelte";
    import Routes_ from "../../store/routeStore";

    let routes;
    $: Routes_.subscribe((OBJ) => (routes = OBJ.array));
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
        {#each routes as route}
            <Route {route} />
        {/each}
    </ul>
</nav>
