<script>
    import { db } from "../../../JS/firebase";
    import { InList } from "../../../JS/friends";

    export let user;

    let posts = [],
        sign = [],
        whisper = [],
        friends = [],
        fetched = 0;
    const deleteUser = () => {
        db.collection("posts").onSnapshot((snap) => {
            posts = snap.docs
                .map((snap) => snap.data())
                .filter((snap) => snap.user == user) // filter by selected user
                .map((snap) => snap.id); // fetch array of ids

            console.log({ posts });
            fetched++;
        });

        db.collection("sign").onSnapshot((snap) => {
            sign = snap.docs
                .map((snap) => snap.data())
                .filter((snap) => snap.username == user) // filter by selected user
                .map((snap) => snap.username);

            console.log({ sign });
            fetched++;
        });

        db.collection("whisper").onSnapshot((snap) => {
            whisper = snap.docs
                .map((snap) => snap.data())
                .filter((snap) => snap.sender == user || snap.receiver == user) // filter by selected user
                .map((snap) => snap.id);

            console.log({ whisper });
            fetched++;
        });

        db.collection("friends").onSnapshot((snap) => {
            friends = snap.docs
                .map((snap) => snap.data())
                .filter((snap) => InList(snap.who.split(","), user)) // filter by selected user
                .map((snap) => snap.who);

            console.log({ friends });
            fetched++;
        });
    };

    let deleted = false;
    const getRidOf = () => {
        posts.map((doc) => db.collection("posts").doc(doc).delete());
        sign.map((doc) => db.collection("sign").doc(doc).delete());
        whisper.map((doc) => db.collection("whisper").doc(doc).delete());
        friends.map((doc) => db.collection("friends").doc(doc).delete());
        deleted = true;
    };

    const resetCounter = () => {
        fetched = 0;
        deleted = false;
    };

    $: {
        if (fetched == 4) {
            getRidOf();

            if (deleted) {
                resetCounter();
            }
        }
    }
</script>

<button on:click={deleteUser}>Delete User</button>
