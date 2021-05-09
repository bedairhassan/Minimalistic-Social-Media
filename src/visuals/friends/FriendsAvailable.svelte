<script>
    export let friendsAvailable, friends;
    import { modifyFriends, fetchOther, isAvailable } from "../../JS/friends";

    import FriendPending from "./FriendPending.svelte";
    import FriendAccepted from './FriendAccepted.svelte'

    let signedInUser = "hassan";

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

<h1>Friends</h1>
{#each friendsAvailable as friend}
    <FriendAccepted {friend} />
{/each}
