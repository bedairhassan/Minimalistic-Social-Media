<script>
    import { db } from "../../JS/firebase";

    import FriendsAvailable from "./Accepted/FriendsAvailable.svelte";
    import FriendsPending from "./Pending/FriendsPending.svelte";

    import signedIn from "../../store/signedIn";
    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let friends = [],
        friendsPending = [],
        friendsAvailable = [];

    db.collection("friends").onSnapshot((snap) => friends = snap.docs);

    $: {
        if (friends.length > 0) {
            // firebase tingz => basically, I didn't want all the other attributes that I won't use!
            friends = friends.map((post) => post.data());

            console.table(friends)
        }
    }
</script>

<table class="table">
    {#if !currentSignedIn}
        Not Signed In
    {:else}
        <FriendsPending {friendsPending} {friends} />

        <FriendsAvailable {friends} {friendsAvailable} />
    {/if}
</table>
<body />
