<script>
    import { db } from "../../../JS/firebase";
    import signedIn from "../../../store/signedIn";

    // db

    let username, password;

    let status,
        show = false;

    const signup_signin = () => {
        // sign up immediately creates account by pushing data to server
        db.collection("sign").doc(username).set({
            username,
            password,
        })

        show='1'

        // sign in
        signedIn.update((lastSignedIn) => username);
    };

    const fetch = () => {
        db.collection("sign").onSnapshot((snap) => {
            snap = snap.docs;
            console.log(snap);

            snap = snap.map((item) => item.data());
            console.log(snap);

            snap = snap.filter(
                (item) =>
                    item.username === username && item.password === password
            );
            console.log(snap);

            if (snap.length > 0) {
                alert("SIGNEDIN");
                // enter your code...

                // update currentSignedIn

                // import signedIn from "../../store/signedIn";
                signedIn.update((lastSignedIn) => username);
            } else {
                // signed up ! !! ! ! !
                // alert("SIGNEDUP");
                status = "Do you want to create new account? ";
                show = '0';
                // enter your code...
                // update currentSignedIn
            }

            // done with if and else?
            // make routing look better
        });
    };
</script>

<h1>SignIn</h1>

<input type="text" placeholder="enter your username" bind:value={username} />
<input
    type="password"
    placeholder="enter your password"
    bind:value={password}
/>
<button on:click={fetch}>SignIn</button>

<!-- {username}
{password} -->

{#if show==='0'}
    {status}
    <button on:click={signup_signin}>Sign Up & Sign In</button>
{:else if show==='1'}
    Signing up.. Signing in.. Please standby
{/if}

<!-- TODO: if clicks button, show user created?!?!?!?  -->
