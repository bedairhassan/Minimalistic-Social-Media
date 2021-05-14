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
		.onSnapshot((snap) => (posts = snap.docs));

	// is the owner of post friends with the currentSignedIn
	db.collection("friends").onSnapshot((snap) => (people = snap.docs));

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

	const refurbishPeople = () => {
		people = people
			.map((person) => person.data())
			.filter((person) => InList(person.who.split(","), currentSignedIn)); // fetch ONLY currentSignedIn's friends
	};

	$: {
		if (posts.length > 0) {
			posts = posts.map((post) => post.data());
		}
	}

	$: {
		if (people.length > 0) {
			refurbishPeople();
			fetched = true;
		}
	}

	$: {
		if (fetched) {
			posts = posts.map((post) => {
				// fetchIsFriends = (postOwner, currentSignedIn,people)
				let isFriends = fetchIsFriends(post.user); // displays YOU,FRIENDS
				// console.log({isFriends});

				return {
					...post,
					isFriends,
				};
			});
		}
	}

	let currentSignedIn;
	$: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));
</script>

<link
	rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous"
/>

<main>
	{#if !currentSignedIn}
		Not Signed In
	{:else}
		{currentSignedIn}
		<h1>Posts</h1>
		<CreatePost />
		<ul>
			{#each posts as post}
				<Post
					post={post.post}
					user={post.user}
					dateCreated={post.dateCreated}
					isFriends={post.isFriends}
				/>
			{/each}
		</ul>
	{/if}
</main>

