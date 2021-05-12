<script>
    export let friendsPending, friends;
    import { modifyFriends } from "../../../JS/friends";

    import FriendPending from "./FriendPending.svelte";
    let currentSignedIn;

    import signedIn from "../../../store/signedIn";
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    const receivedFriendRequest = (item) => item.who.split(",")[1];

    $: {
        if (friends.length > 0) {
            friendsPending = friends.filter(
                (friend) => friend.state === "pending"
            ); 

            console.table(friendsPending);

            friendsPending = friendsPending.filter(
                (friend) => receivedFriendRequest(friend) === currentSignedIn
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
