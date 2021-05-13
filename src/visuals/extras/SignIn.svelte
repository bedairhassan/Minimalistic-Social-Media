<script>
    import { set_input_value } from "svelte/internal";

    import { db } from "../../JS/firebase";

    import signedIn from "../../store/signedIn";

    // db

    let username, password;

    let status,
        show = false;

    const updatedWhoIsSignedIn = (username) =>
        signedIn.update((lastSignedIn) => username);

    const signup_signin = () => {
        // sign up immediately creates account by pushing data to server
        db.collection("sign").doc(username).set({
            username,
            password,
        });

        show = "1";

        // sign in
        updatedWhoIsSignedIn(username);
    };

    const fetch = () => {
        db.collection("sign").onSnapshot((snap) => {
            if (!username) {
                // if user didn't even interact with username field
                alert("username or password is incorrect");
                return;
            }

            snap = snap.docs
                .map((item) => item.data()) // firestore introduces 4237 unwanted attributes
                .filter((item) => item.username === username);

            if (!password) {
                // if user didn't even interact with passwords field
                alert("username or password is incorrect");
                return;
            }

            let isPasswordCorrect = snap[0].password === password;
            isPasswordCorrect = isPasswordCorrect.length > 0;

            if (!isPasswordCorrect) {
                alert("username or password is incorrect");
                return;
            }

            const userExistsAtDatabase = (snap) => snap.length > 0;

            if (userExistsAtDatabase(snap)) {
                updatedWhoIsSignedIn(username);
            } else {
                status = "Do you want to create new account? ";
                show = "0";
            }
        });
    };
</script>

<h1>SignIn</h1>

<div>
    <input
        type="text"
        placeholder="enter your username"
        bind:value={username}
    />
    <input
        type="password"
        placeholder="enter your password"
        bind:value={password}
    />
    <button on:click={fetch}>SignIn</button>
</div>

<div>
    {#if show === "0"}
        <br />{status}
        <button on:click={signup_signin}>Sign Up & Sign In</button>
    {:else if show === "1"}
        Signing up.. Signing in.. Please standby
    {/if}
</div>

<!-- TODO: if clicks button, show user created?!?!?!?  -->
