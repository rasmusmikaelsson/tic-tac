<script lang="ts">
    import { browser } from "$app/environment";
    import { invalidateAll } from "$app/navigation";
    import { onDestroy } from "svelte";
    import type { PageData } from "./$types";
    import { enhance } from "$app/forms";


    export let data: PageData;

    if ( browser ) {
        let interval = setInterval(invalidateAll, 500)

        onDestroy(() => {
            clearInterval(interval);
        })
    }

</script>

<form action="?/message" method="post" use:enhance>
    <input type="text" name="message">
    <button>Send</button>
</form>

<div class="chat">
    {#each data.messages as message}
        <span>{message}</span>
    {/each}
</div>

<style>
    .chat {
        display: flex;
        flex-direction: column;
    }
</style>