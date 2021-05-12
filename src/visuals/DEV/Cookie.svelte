<script>
    import signedIn from "../../store/signedIn";

    let currentSignedIn;
    const set_cookie = (currentSignedIn) => {
        if (!currentSignedIn) {
            signedIn.update((lastSignedIn) => null)
            return;
        }

        signedIn.update((lastSignedIn) => (currentSignedIn = lastSignedIn));
    };
</script>

<tr>
    <td><button on:click={() => set_cookie("hassan")}>🍪Hassan</button> </td>
    <td><button on:click={() => set_cookie("ali")}>🍪Ali</button> </td>
    <td><button on:click={() => set_cookie("hossam")}>🍪Hossam</button> </td>
    <td><button on:click={() => set_cookie("mostafa")}>🍪Mostafa</button> </td>
</tr>
