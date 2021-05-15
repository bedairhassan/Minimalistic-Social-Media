<script>
    import { Router, Route, Link } from "svelte-routing";

    import Routes_ from "../../../store/routeStore";

    let route;
    $: Routes_.subscribe((OBJ) => (route = OBJ.routes));

    // imports
    import Login from "../../extras/SignIn.svelte";
    import Friends from "../../friends/Friends.svelte";
    import Posts from "../../posts/Posts.svelte";
    import Whisper from "../../Whisper/Main.svelte";
</script>

<div>
    <Route path={route.WHISPER}><Whisper /></Route>
    <Route path={route.FRIEND}><Friends /></Route>
    <Route path={route.POST}><Posts /></Route>
    <Route path={route.LOGIN}><Login /></Route>
</div>
