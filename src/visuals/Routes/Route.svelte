<script>
    import { Link } from "svelte-routing";

    export let route;
    console.log(route)
</script>

<li class="nav-item">
    <Link to={route}>| {route} |</Link>
</li>
