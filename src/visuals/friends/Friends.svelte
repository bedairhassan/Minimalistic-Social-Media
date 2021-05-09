<script>
    import { sign } from "crypto";

    import { db } from "../../JS/firebase";
    import FriendPending from "./FriendPending.svelte";
    import FriendAccepted from "./FriendAccepted.svelte";
    import FriendsAvailable from "./FriendsAvailable.svelte";
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
</script>

<table class="table">
    <FriendsPending {friendsPending} {friends} />

    <FriendsAvailable {friends} {friendsAvailable} />
</table>
<body />
