<script>
    import { sign } from "crypto";

    import { db } from "../../JS/firebase";
    import FriendPending from "./FriendPending.svelte";
    import FriendAccepted from "./FriendAccepted.svelte";

    let signedInUser = "hassan";

    let modifyFriends = (array, signedInUser, state) => {
        array = array
            .filter((item) => item.state === state) // filter by pending
            .map((item) => item.who); // array will only contain strings no objects.

        return array;
    };

    let friends = [],
        friendsPending = [],
        friendsAvailable = [];


    db.collection("friends").onSnapshot((snap) => {
        // console.log(snap);
        friends = snap.docs;
    });

    let fetchOther = (string, guest) => {
        string = string.split(",");

        if (string[0] === guest) return string[1];

        if (string[1] === guest) return string[0];

        // return guest===string[0] ? string[1] : (guest===string[1]?string[0]:'')
    };

    let isAvailable = (string, guest) => {
        string = string.split(",");

        return guest === string[0] || guest === string[1];
    };

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

    $: {
        // NEEDED FOR FIREBASE
        if (friends.length > 0) {

            // pending
            friendsPending = modifyFriends(friends, signedInUser, "pending");
            // console.log(friendsPending);
            friendsPending = friendsPending.filter(
                (item) => item.split(",")[1] === signedInUser
            ); // 'mohammed,hassan' , since hasasn is signed in, retrieve item!

            friendsPending = friendsPending.map(
                (friend) => friend.split(",")[0]
            );
            // console.log(friendsPending);
        }
    }
</script>

<table class="table">
    <h1>Pending</h1>
    {#each friendsPending as friend}
        <FriendPending futureFriend={friend} />
    {/each}

    <h1>Friends</h1>
    {#each friendsAvailable as friend}
        <FriendAccepted {friend} />
    {/each}
</table>
<body />
