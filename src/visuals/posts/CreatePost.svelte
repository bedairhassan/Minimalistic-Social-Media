<script>
    import { db } from "../../JS/firebase";

    import { shortDate } from "../../JS/tools";
    let post;
    let signedInUser = "mohammed";

    // reusable
    const CREATEFirebase = (source, object) =>
        db.collection(source).add(object);

    const addPost = () => CREATEFirebase("posts", {
        dateCreated:shortDate(),
        post:post,
        user:signedInUser
    });
</script>

<div class="center">
    <tr>
        <td>
            <input value={shortDate()} disabled={true} class="form-control" />
        </td>
        <td> <input bind:value={post} /> </td>
        <td><button on:click={addPost}>Add Post</button></td>
    </tr>
    <br />
</div>

<style>
    .center {
        margin: auto;
        width: 50%;
        padding: 10px;
    }
</style>
