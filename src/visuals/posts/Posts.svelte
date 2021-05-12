<script>
	import { db } from "../../JS/firebase";
	import Post from "./Post.svelte";
	import CreatePost from "./CreatePost.svelte";


	let posts = [];
	let people = [];
	let fetched = undefined;
	let byMe = false;

	// TODO: place at tools
	const InList = (list, guest) => {
		for (let i = 0; i < list.length; i++) {
			if (list[i] === guest) return true;
		}
		return false;
	};

	db.collection("posts")
		.orderBy("dateCreated", "asc")
		.onSnapshot((snap) => (posts = snap.docs));

	// is the owner of post friends with the currentSignedIn
	db.collection("friends").onSnapshot((snap) => (people = snap.docs));

	const fetchIsFriends = (postOwner) => {
		// console.log({
		// 	postOwner,
		// 	currentSignedIn,
		// 	people,
		// 	inList: InList(postOwner, people),
		// });
		if (postOwner === currentSignedIn) {
			// YOU
			return "YOU";
		}

		for (let person of people) {
			person = person.split(",");
			const c1 = InList(person, postOwner);
			const c2 = InList(person, currentSignedIn);

			if (c1 && c2) {
				return "FRIENDS";
			}
		}

		return "Not Friends";
	};

	const refurbishPeople = () => {
		people = people
			.map((person) => person.data())
			.filter((person) => person.state === "friends")
			.map((person) => person.who)
			.filter((person) => InList(person.split(","), currentSignedIn));
	};

	$: {
		// NEEDED FOR FIREBASE
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
				//console.log(isFriends);

				return {
					...post,
					isFriends,
				};
			});

			byMe = true;
			// console.log({ fetched, byMe });
			// console.log(posts)
		}
	}


	import signedIn from "../../store/signedIn";
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
