<script>
    import { sign } from "crypto";

    import { db } from "../../JS/firebase";
    import FriendPending from "./FriendPending.svelte";
    import FriendAccepted from "./FriendAccepted.svelte";
    import { modifyFriends, fetchOther, isAvailable } from "../../JS/friends";

    import FriendsPending from "./FriendsPending.svelte";

    let signedInUser = "hassan";

    let friends = [],
        friendsPending = [],
        friendsAvailable = [];

    db.collection("friends").onSnapshot((snap) => {
        // console.log(snap);
        friends = snap.docs;
    });

    $: {
        if (friends.length > 0) {
            friends = friends.map((post) => post.data());
            console.log(friends);
        }
    }

    $: {
        // NEEDED FOR FIREBASE
        if (friends.length > 0) {
            // available
            friendsAvailable = modifyFriends(friends, signedInUser, "friends");
            console.log(friendsAvailable);
            friendsAvailable = friendsAvailable.filter((item) =>
                isAvailable(item, signedInUser)
            );
            console.log(friendsAvailable);
            friendsAvailable = friendsAvailable.map((item) =>
                fetchOther(item, signedInUser)
            );
            console.log(friendsAvailable);
        }
    }
</script>

<table class="table">
    <FriendsPending {friendsPending} {friends} />

    <h1>Friends</h1>
    {#each friendsAvailable as friend}
        <FriendAccepted {friend} />
    {/each}
</table>
<body />
