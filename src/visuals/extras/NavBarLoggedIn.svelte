<script>
    import { Router, Link, Route } from "svelte-routing";

    import signedIn from "../../store/signedIn";

    const signout = () => {
        signedIn.update(() => null);
        setTimeout(() => {
            location.reload();
            alert("Page restarting...");
        }, 500);
    };

    let currentSignedIn;

    const updateSignedIn = (lastSignedIn) => (currentSignedIn = lastSignedIn);

    $: signedIn.subscribe((lastSignedIn) => updateSignedIn(lastSignedIn));
</script>

{#if currentSignedIn}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Signed in as {currentSignedIn}</a>
        <a class="navbar-brand" href="/login"
            ><button on:click={signout} class="btn btn-danger">Sign Out</button
            ></a
        >

       
    </nav>
<!-- {:else}
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">
            <Link to="login">| SignIn |</Link>
        </span>
    </nav> -->
{/if}
