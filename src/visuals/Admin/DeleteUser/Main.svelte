<script>
    import { db } from "../../../JS/firebase";
    import DeleteButton from "./DeleteButton.svelte";
    import MarkButton from "./MarkButton.svelte";

    let users,
        fetched = false;
    db.collection("sign").onSnapshot((snap) => {
        snap = snap.docs
            .map((snap) => snap.data())
            .map((snap) => snap.username)
            .filter((snap) => snap != "admin");

        users = snap;
        console.log(users);

        fetched = true;
    });
</script>


<table class="table">
    <tr>
        <th scope="col">user</th>
        <th scope="col">delete</th>
    </tr>

    {#if fetched}
        {#each users as user}
            <tr>
                <td>{user}</td>
                <td><DeleteButton {user} /></td>
            </tr>
            <!-- <MarkButton {user}/> -->
        {/each}
    {:else}
        Loading...
    {/if}
</table>
