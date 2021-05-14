<script>
    import { Router, Link, Route } from "svelte-routing";

    import signedIn from "../../store/signedIn";

    const signout = () => signedIn.update(() => null);

    let currentSignedIn;

    const updateSignedIn = (lastSignedIn) => (currentSignedIn = lastSignedIn);

    $: signedIn.subscribe((lastSignedIn) => updateSignedIn(lastSignedIn));
</script>

{#if currentSignedIn}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <h6>Signed in as {currentSignedIn}</h6>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item">
                <button on:click={() => signout()} class="btn btn-danger"
                    >Sign Out</button
                >
            </li>
        </ul>
    </nav>
{:else}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link to="login">| SignIn |</Link>
            </li>
        </ul>
    </nav>
{/if}
