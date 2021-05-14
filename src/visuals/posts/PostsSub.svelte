<script>
    import { fetchIsFriends } from "./tools";
    import Post from "./post.svelte";
    import { db } from "../../JS/firebase";
    import signedIn from "../../store/signedIn";

    export let people;

    let fetched = false;

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    let posts;
    db.collection("posts")
        .orderBy("dateCreated", "asc")
        .onSnapshot((snap) => {
            posts = snap.docs.map((post) => post.data());

            //             if (people) { // remove this?
            if (people) {
                posts = posts.map((post) => {
                    let isFriends = fetchIsFriends(
                        post.user,
                        currentSignedIn,
                        people
                    ); // displays YOU,FRIENDS

                    return {
                        ...post,
                        isFriends,
                    };
                });
                // console.table(posts)
                fetched = true;
            }
        });
</script>

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
