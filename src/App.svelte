<script>
    import { Router, Link, Route } from "svelte-routing";

    import Routes from "./visuals/Routes/Routes.svelte";
    import NavBarLoggedIn from "./visuals/extras/NavBarLoggedIn.svelte";
    import RoutePath from "./visuals/Routes/RoutePath.svelte";

    export let url = "";

    console.log(new Date() + " ");
</script>

<link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
/>

<Router {url}>
    <Routes />

    <NavBarLoggedIn />

    <RoutePath />
</Router>
