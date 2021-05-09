<script>
    import { db } from "../../JS/firebase";
    import FriendPending from "./FriendPending.svelte";

    let signedInUser = "hassan";

    let Pending = (array, signedInUser) => {
        array = array
            .filter((item) => item.state === "pending") // filter by pending
            .map((item) => item.who) // array will only contain strings no objects.
            .filter((item) => item.split(",")[1] === signedInUser); // 'mohammed,hassan' , since hasasn is signed in, retrieve item!

        return array;
    };

    let friends = [];

    db.collection("friends").onSnapshot((snap) => {
        console.log(snap);
        friends = snap.docs;
    });

    $: {
        // NEEDED FOR FIREBASE
        if (friends.length > 0) {
            
            friends = friends.map((post) => post.data());
            console.log(friends);


            // available 

            // pending
            friends = Pending(friends, signedInUser);
            console.log(friends);

            friends = friends.map((friend) => friend.split(",")[0]);
            console.log(friends);
        }
    }
</script>

<table class="table">
    {#each friends as friend}
        <FriendPending futureFriend={friend} />
    {/each}
</table>
<body />
