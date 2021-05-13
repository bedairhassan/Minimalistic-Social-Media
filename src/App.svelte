<script>
    import { Router, Link, Route } from "svelte-routing";

    import Posts from "./visuals/posts/Posts.svelte";
    import Friends from "./visuals/friends/Friends.svelte";
    // import CookiePage from "./visuals/DEV/Cookie.svelte";

    // import Login from './visuals/loginpage/Login.svelte'

    import Login from "./visuals/extras/SignIn.svelte";

    import NavBarLoggedIn from "./visuals/extras/NavBarLoggedIn.svelte";

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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <!-- <a class="nav-link" href="/"> -->
                <Link to="/">Home |</Link>
                <!-- </a> -->
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" href="/"> -->
                <Link to="friends">| Friends |</Link>
                <!-- </a> -->
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" href="/"> -->
                <Link to="posts">| Posts</Link>
                <!-- </a> -->
            </li>
        </ul>
    </nav>

    <NavBarLoggedIn />

    <div>
        <Route path="friends"><Friends /></Route>
        <Route path="posts"><Posts /></Route>
        <Route path="/login"><Login /></Route>
    </div>
</Router>
