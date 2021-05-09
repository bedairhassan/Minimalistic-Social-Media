<script>
    import { sign } from "crypto";

    import { db } from "../../JS/firebase";

    import FriendsAvailable from "./Accepted/FriendsAvailable.svelte";
    import FriendsPending from "./Pending/FriendsPending.svelte";

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
            // firebase tingz => basically, I didn't want all the other attributes that I won't use!
            friends = friends.map((post) => post.data());
        }
    }
</script>

<table class="table">
    <FriendsPending {friendsPending} {friends} />

    <FriendsAvailable {friends} {friendsAvailable} />
</table>
<body />
