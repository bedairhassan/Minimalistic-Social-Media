<script>
    import { db } from "../../JS/firebase";

    import { shortDate } from "../../JS/tools";
    import SI from "../../store/signedIn";
    let post;
    let signedInUser;
    SI.subscribe((last) => (signedInUser = last));

    // reusable

    const addPost = () => {
        const id = shortDate() + signedInUser;

        db.collection("posts").doc(id).set({
            dateCreated: shortDate(),
            id,
            post: post,
            user: signedInUser,
        });

        // CREATEFirebase("posts", {
        //     dateCreated: shortDate(),
        //     post: post,
        //     user: signedInUser,
        // });
    };
</script>

<div class="center">
    <tr>
        <td>
            <input value={shortDate()} disabled={true} class="form-control" />
        </td>
        <td> <input bind:value={post} /> </td>
        <td
            ><button on:click={addPost} class="btn btn-primary">Add Post</button
            ></td
        >
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
