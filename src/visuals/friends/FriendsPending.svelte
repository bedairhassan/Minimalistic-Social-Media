<script>

    export let friendsPending,friends
    import { modifyFriends } from "../../JS/friends";

    import FriendPending from './FriendPending.svelte'
    let signedInUser = "hassan";

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


<h1>Pending</h1>
{#each friendsPending as friend}
    <FriendPending futureFriend={friend} />
{/each}
