<script>

import { Router, Link, Route } from "svelte-routing";

import Posts from './visuals/posts/Posts.svelte'
import Friends from './visuals/friends/Friends.svelte'
import CookiePage from './visuals/DEV/Cookie.svelte'

export let url=""

</script>


<Router url="{url}">


    <nav>
        <Link to="/">Home</Link>
        <Link to="friends">Friends</Link>
        <Link to="posts">Posts</Link>
      </nav>

      <div>
        <Route path="friends" component="{Friends}" />
        <Route path="posts" component="{Posts}" />
        <Route path="/"><CookiePage /></Route>
      </div>

</Router>

<!-- <CookiePage /> 
<Friends/>
<Posts/> -->
