<script>
	import { db } from "./JS/firebase";
	import Post from "./visuals/posts/Post.svelte";
	import CreatePost from "./visuals/posts/CreatePost.svelte";

	let posts = [];
	let signedInUser = "hassan";
	let people = [];

	// TODO: place at tools
	const InList = (list, guest) => {
		for (let i = 0; i < list.length; i++) {
			if (list[i] === guest) return true;
		}
	};

	db.collection("posts")
		.orderBy("dateCreated", "asc")
		.onSnapshot((snap) => (posts = snap.docs));

	// is the owner of post friends with the signedInUser
	db.collection("friends").onSnapshot((snap) => (people = snap.docs));

	$: {
		// update isFriends for every post

		people = people
			.map((person) => person.data())
			.filter((person) => person.state === "friends")
			.map((person) => person.who)
			.filter((person) => InList(person.split(","), signedInUser));

		console.log(people);

		

		// for every post, is the owner of post available in people array
		// if yes, display friends
		// if owner of post is signedIn, display YOU
		// if no, display notFriends
	}
</script>

<link
	rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous"
/>

<main>
	<h1>Posts</h1>
	<CreatePost />
	<ul>
		{#each posts as post}
			<Post
				post={post.data().post}
				user={post.data().user}
				dateCreated={post.data().dateCreated}
			/>
		{/each}
	</ul>

	<ul>
		{#each people as person}
			<li>{person.data().who}</li>
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
