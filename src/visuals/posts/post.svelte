<script>
  import AddFriend from "./AddFriend.svelte";
  import RemovePost from "./RemovePost.svelte";

  export let post;
  export let id;
  export let user;
  export let dateCreated;
  export let isFriends;

  console.log(isFriends);
</script>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{post}</h5>
    <p class="card-text">
      {dateCreated}
      <br />Created by {user}
      <!-- <br />{isFriends} -->
      <br />
      {#if isFriends === "you"}
        <!-- YOU     -->
        <RemovePost {id} />
      {:else if isFriends === "friends"}
        FRIENDS
      {:else if isFriends === "pending"}
        PENDING
      {:else}
        <AddFriend whoToAdd={user} />
      {/if}
    </p>
    <!-- {#if isFriends==='you'}
    <RemovePost id={post.id}/>
    {/if} -->
  </div>
</div>
