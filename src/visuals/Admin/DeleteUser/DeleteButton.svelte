<script>
    import { db } from "../../../JS/firebase";
    import { InList } from "../../../JS/friends";
    import { deleteUser } from "./tools";

    export let user;

    const delUser = () => {
        console.log(`DeleteButton.svelte; Line9; Deleting ${user}`);
        deleteUser(db, user);
    };
</script>

<button on:click={delUser}>Delete User</button>
