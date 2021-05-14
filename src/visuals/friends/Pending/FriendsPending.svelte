<script>
    // PRINT FROM HERE

    export let friendsPending, friends;
    import { modifyFriends } from "../../../JS/friends";

    import FriendPending from "./FriendPending.svelte";
    let currentSignedIn;

    import signedIn from "../../../store/signedIn";
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    const receivedFriendRequest = (item) => item.who.split(",")[1];
    const iReceivedFriendRequest = (friend) =>
        receivedFriendRequest(friend) === currentSignedIn;

    $: {
        if (friends.length > 0) {
            friendsPending = friendsPending.filter((friend) =>
                iReceivedFriendRequest(friend)
            );

            console.table(friendsPending);

            friendsPending = friends.filter(
                (friend) => friend.state === "pending"
            );

            console.table(friendsPending);
        }
    }
</script>

<h1>Pending</h1>

{#if friendsPending.length > 0}
    {#each friendsPending as friend}
        <!-- friend.who.split(',')[0] ; futureFriend -->
        <FriendPending {friend} />
    {/each}
{:else}
    No Pending Friends Available.
{/if}
