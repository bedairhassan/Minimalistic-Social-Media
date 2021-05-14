<script>
    import { db } from "../../JS/firebase";

    export let id; // id is date && user

    const dismiss = () => db.collection("whisper").doc(id).delete();
</script>

<button on:click={dismiss} class="btn btn-danger">Dismiss</button>
