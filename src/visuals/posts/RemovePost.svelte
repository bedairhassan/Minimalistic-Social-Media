<script>
import { db } from "../../JS/firebase";


    // import { db } from "../../../JS/
    // firebase";


    export let id; // id is date && user

    const dismiss = () => db.collection("posts").doc(id).delete();
</script>

<button on:click={dismiss} class="btn btn-danger">Remove Post </button>
