<script>
    import SignIn from "./signin_page/SignIn.svelte";
    import SignUp from "./signup_page/SignUp.svelte";

    let condition;;
    const SignInClick = () => (condition = "SignIn");
    const SignUpClick = () => (condition = "SignUp");
</script>

<sub on:click={SignInClick}>SignIn</sub> |
<sub on:click={SignUpClick}>Sign Up</sub>

{#if condition === "SignUp"}
    <SignUp />
{:else if condition === "SignIn"}
    <SignIn />
{/if}
