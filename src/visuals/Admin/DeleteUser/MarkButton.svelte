<script>
    export let user;
    const display = ()=>console.log(user)
</script>

<button on:click={display}>Mark Button</button>