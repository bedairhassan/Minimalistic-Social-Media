<script>

  export let post;
  export let user;
  export let dateCreated;
</script>


<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{post}</h5>
      <p class="card-text">
          
        {dateCreated}
        <br/>Created by {user}

      </p>
    </div>
  </div>