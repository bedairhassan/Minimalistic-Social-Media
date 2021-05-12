<script>
    // import signedIn from '../../store/signedIn'
    // $:signedIn.subscribe(lastSignedIn=>currentSignedIn=lastSignedIn)
    import { Router, Link, Route } from "svelte-routing";

    import signedIn from "../../store/signedIn";

    const set_cookie = (currentSignedIn) => {
        if (!currentSignedIn) {
            signedIn.update((lastSignedIn) => {
                return null;
            });
        }

        signedIn.update((lastSignedIn) => currentSignedIn);
    };

    let currentSignedIn = "";

    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));
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
                <button on:click={() => set_cookie()} class="btn btn-danger"
                    >Sign Out</button
                >
            </li>
        </ul>
    </nav>
{:else}

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link to="SignIn">| SignIn |</Link>
            </li>
        </ul>
    </nav>

{/if}
