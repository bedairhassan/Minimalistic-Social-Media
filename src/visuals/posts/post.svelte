<script>
  import signedIn from "../../store/signedIn";
  import AddFriend from "./AddFriend.svelte";
  import RemovePost from "./RemovePost.svelte";

  export let post;
  export let id;
  export let user;
  export let dateCreated;
  export let isFriends;

  console.log(isFriends);

  let currentSignedIn;
  $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));
</script>

<div class="column">
  <div class="card">
    <h3>{post}</h3>
    <p>{dateCreated}</p>

    {#if user !== currentSignedIn}
      <p>Created by {user}</p>
    {/if}

    <p>
      {#if isFriends === "you"}
        <!-- YOU     -->
        <RemovePost {id} />
      {:else if isFriends === "friends"}
        <button disabled={true} class="btn btn-success">FRIENDS</button>
      {:else if isFriends === "pending"}
        <button disabled={true} class="btn btn-warning">FRIENDS</button>
      {:else}
        <AddFriend whoToAdd={user} />
      {/if}
    </p>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Float four columns side by side */
  .column {
    float: left;
    width: 25%;
    padding: 0 10px;
  }

  /* Remove extra left and right margins, due to padding in columns */
  .row {
    margin: 0 -5px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Style the counter cards */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
  }

  /* Responsive columns - one column layout (vertical) on small screens */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
</style>
