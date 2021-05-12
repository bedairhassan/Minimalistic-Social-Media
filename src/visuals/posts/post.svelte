<script>
  import AddFriend from "./AddFriend.svelte";

  export let post;
  export let user;
  export let dateCreated;
  export let isFriends;
</script>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{post}</h5>
    <p class="card-text">
      {dateCreated}
      <br />Created by {user}
      <!-- <br />{isFriends} -->
      <br />
        {#if isFriends==='friends'}
        FRIENDS
        {:else if isFriends==='pending'}
        PENDING
        {:else if isFriends==='you'}
        YOU
        {:else}
        <AddFriend whoToAdd={user} />
      {/if}
    </p>
  </div>
</div>
