<script>
    import { Router, Link, Route } from "svelte-routing";

    import Posts from "./visuals/posts/Posts.svelte";
    import Friends from "./visuals/friends/Friends.svelte";
    import CookiePage from "./visuals/DEV/Cookie.svelte";

    export let url = "";

    console.log(new Date()+' ')
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
                    <Link to="/">Home |   </Link>
                <!-- </a> -->
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" href="/"> -->
                    <Link to="friends">|   Friends |</Link>
                <!-- </a> -->
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" href="/"> -->
                    <Link to="posts">|   Posts</Link>
                <!-- </a> -->
            </li>
        </ul>
    </nav>

    <div>
        <Route path="friends" component={Friends} />
        <Route path="posts" component={Posts} />
        <Route path="/"><CookiePage /></Route>
    </div>
</Router>

<!-- <CookiePage /> 
<Friends/>
<Posts/> -->
