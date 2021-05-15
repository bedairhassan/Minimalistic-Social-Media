<script>
    import { db } from "../../JS/firebase";

    import signedIn from "../../store/signedIn";
    import CookiePage from "../DEV/CookiePage.svelte";

    // db

    let username, password;

    // let status;
    let show = false;

    const updatedWhoIsSignedIn = (username) =>
        signedIn.update((lastSignedIn) => username);

    const then = () => {
        console.log("trying to redirect to localhost:5000");

        // window.location.href = 'localhost:5000';
        // window.location.href = "posts";
    };

    const signup_signin = () => {
        // sign up immediately creates account by pushing data to server
        db.collection("sign").doc(username).set({
            username,
            password,
        });

        show = "1";

        // sign in
        updatedWhoIsSignedIn(username);
        then();
    };

    const fetch = () => {
        db.collection("sign").onSnapshot((snap) => {
            if (!username) {
                // if user didn't even interact with username field
                alert("username is undefined");
                return;
            }

            snap = snap.docs
                .map((item) => item.data()) // firestore introduces 4237 unwanted attributes
                .filter((item) => item.username === username);

            if (!password) {
                // if user didn't even interact with passwords field
                alert("password is undefined");
                return;
            }

            const userExistsAtDatabase = (snap) => snap.length > 0;

            if (!userExistsAtDatabase(snap)) {
                show = "0";
                return;
            }

            // console.log({
            //     length: snap.length,
            //     array: snap,
            // });

            let isPasswordCorrect = snap.filter(
                (item) => item.password === password
            );
            isPasswordCorrect = isPasswordCorrect.length > 0;

            // let isPasswordCorrect = snap[0].password === password;
            // isPasswordCorrect = isPasswordCorrect.length > 0;

            if (!isPasswordCorrect) {
                alert("username or password is incorrect");
                return;
            }

            if (userExistsAtDatabase(snap)) {
                updatedWhoIsSignedIn(username);
                then();
            }
        });
    };

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));
</script>

<link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
/>

{#if !currentSignedIn}
    <div align="center">
        <h1>SignIn</h1>
        <tr>
            <td>Username</td>
            <td
                ><input
                    type="text"
                    placeholder="enter your username"
                    bind:value={username}
                /></td
            >
        </tr>

        <tr>
            <td>Password</td>
            <td
                ><input
                    type="password"
                    placeholder="enter your password"
                    bind:value={password}
                /></td
            >
        </tr>

        <tr>
            <td colspan="2"
                ><button class="btn btn-primary" on:click={fetch}>SignIn</button
                ></td
            >
        </tr>
    </div>

    <div>
        {#if show === "0"}
            <br />Do you want to sign up and sign in ?
            <button on:click={signup_signin}>Sign Up & Sign In</button>
        {:else if show === "1"}
            Signing up.. Signing in.. Please standby
        {/if}
    </div>
{:else}
    <div align="center"><h1>You are already signed in</h1></div>
{/if}

<!-- <div>
    <h1>Developer View</h1>
    <CookiePage />
</div> -->

<!-- TODO: if clicks button, show user created?!?!?!?  -->
