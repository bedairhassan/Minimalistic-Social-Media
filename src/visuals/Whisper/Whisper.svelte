<script>
    export let whisper;

    import Dismiss from "./actions/Dismiss.svelte";
    import Respond from "./actions/Respond.svelte";
</script>

<div>
    <tr>
        <td>CONTEXT >> {whisper.context}</td>
        <td>SENDER >> {whisper.sender}</td>
        <td>MESSAGE >> {whisper.message}</td>
        <td><Dismiss id={whisper.id} /> </td>
        <td><Respond {whisper} /></td>
    </tr>
</div>
