<script>
    import { Router, Link, Route } from "svelte-routing";
    import Whisper from "./visuals/Whisper/Main.svelte";

    import Routes from "./visuals/Routes/Routes.svelte";
    import Posts from "./visuals/posts/Posts.svelte";
    import Friends from "./visuals/friends/Friends.svelte";
    // import CookiePage from "./visuals/DEV/Cookie.svelte";

    // import Login from './visuals/loginpage/Login.svelte'

    import Login from "./visuals/extras/SignIn.svelte";

    import NavBarLoggedIn from "./visuals/extras/NavBarLoggedIn.svelte";
    // import Routes from "./store/routeStore";

    export let url = "";

    console.log(new Date() + " ");

    import Routes_ from "./store/routeStore";
    let route;
    $: Routes_.subscribe((OBJ) => (route = OBJ.ref));
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

    <div>
        <Route path={route.WHISPER}><Whisper /></Route>
        <Route path={route.FRIEND}><Friends /></Route>
        <Route path={route.POST}><Posts /></Route>
        <Route path={route.LOGIN}><Login /></Route>
    </div>
</Router>
