<script>
	import { db } from "../../JS/firebase";
	import Post from "./Post.svelte";
	import CreatePost from "./CreatePost.svelte";
	import signedIn from "../../store/signedIn";
	import { fetchOther, InList } from "../../JS/friends";

	let posts = [];
	let people = [];
	let fetched = undefined;

	// TODO: place at tools

	db.collection("posts")
		.orderBy("dateCreated", "asc")
		.onSnapshot((snap) => {
			posts = snap.docs.map((post) => post.data());
		});

	// is the owner of post friends with the currentSignedIn
	db.collection("friends").onSnapshot((snap) => {
		// fetch ONLY currentSignedIn's friends
		people = snap.docs
			.map((person) => person.data())
			.filter((person) => InList(person.who.split(","), currentSignedIn));
	});

	// while passing down data {post}, I need to render {pending,friends,YOU,ADD FRIEND}
	// for ex. a user sees a good post, he adds person.
	const fetchIsFriends = (postOwner) => {
		if (postOwner === currentSignedIn) {
			// YOU
			return "you";
		}

		for (const person of people) {
			const fetchother = fetchOther(person.who, currentSignedIn);

			if (fetchother === postOwner) {
				return person.state; // friends,pending
			}
		}

		return "error";
	};

	// main-component; keep people at posts
	// sub-component; ask server for posts.

	$: {
		if (people.length > 0) { // main component ! !! ! !  !!!!!
			posts = posts.map((post) => {
				let isFriends = fetchIsFriends(post.user); // displays YOU,FRIENDS

				return {
					...post,
					isFriends,
				};
			});
			// console.table(posts)
			fetched = true;
		}
	}

	let currentSignedIn;
	$: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));
</script>

<main>
	{#if !currentSignedIn}
		Not Signed In
	{:else}
		<!-- {currentSignedIn} -->
		<h1>Posts</h1>
		<CreatePost />
		<ul>
			{#if fetched}
				{#each posts as post}
					<Post
						post={post.post}
						user={post.user}
						id={post.id}
						dateCreated={post.dateCreated}
						isFriends={post.isFriends}
					/>
				{/each}
			{/if}
		</ul>
	{/if}
</main>
