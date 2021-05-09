<script>

    export let friendsPending

    import FriendPending from './FriendPending.svelte'
</script>


<h1>Pending</h1>
{#each friendsPending as friend}
    <FriendPending futureFriend={friend} />
{/each}
