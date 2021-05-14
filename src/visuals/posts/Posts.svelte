<script>
	import { db } from "../../JS/firebase";
	import CreatePost from "./CreatePost.svelte";
	import signedIn from "../../store/signedIn";
	import { InList } from "../../JS/friends";
	import PostsSub from "./PostsSub.svelte";

	let people = [];

	// TODO: place at tools

	// is the owner of post friends with the currentSignedIn
	db.collection("friends").onSnapshot((snap) => {
		// fetch ONLY currentSignedIn's friends
		people = snap.docs
			.map((person) => person.data())
			.filter((person) => InList(person.who.split(","), currentSignedIn));
	});

	// while passing down data {post}, I need to render {pending,friends,YOU,ADD FRIEND}
	// for ex. a user sees a good post, he adds person.

	// main-component; keep people at posts
	// sub-component; ask server for posts.

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

		<PostsSub {people} />
	{/if}
</main>
