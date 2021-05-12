<script>
    export let friendsAvailable, friends;
    import {
        modifyFriends,
        fetchOther,
        isAvailable,
    } from "../../../JS/friends";

    // import FriendPending from "./Pending/FriendPending.svelte";
    import FriendAccepted from "./FriendAccepted.svelte";

    let currentSignedIn;
    import signedIn from "../../../store/signedIn";
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    $: {
        // NEEDED FOR FIREBASE
        if (friends.length > 0) {
            // available
            friendsAvailable = friends.filter(friend=>friend.state==='friends')
            // console.log(friendsAvailable);
            friendsAvailable = friendsAvailable.filter((item) =>
                isAvailable(item.who, currentSignedIn)
            );
            // console.log(friendsAvailable);
            // friendsAvailable = friendsAvailable.map((item) =>
            //     fetchOther(item, currentSignedIn)
            // );
        }
    }

    $: console.log(friendsAvailable)
</script>

<h1>Friends</h1>

{#if friendsAvailable.length > 0}
    {#each friendsAvailable as friend}
        <FriendAccepted {friend} />
    {/each}
{:else}
    No Friends Available.
{/if}
