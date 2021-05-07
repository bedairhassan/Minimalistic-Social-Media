<script>
	import { db } from './JS/firebase';

	let posts=[]
	db.collection("posts")
		.orderBy("dateCreated", "asc")
		.onSnapshot(snap => posts = snap.docs);
</script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


<main>
	<h1>Posts</h1>

	<ul>
		{#each posts as post}

		<div class="card" style="width: 18rem;">
			<div class="card-body">
			  <h5 class="card-title">{post.data().post}</h5>
			  <p class="card-text">
				  
				{post.data().dateCreated}
				<br/>Created by {post.data().user}

			  </p>
			</div>
		  </div>

		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>