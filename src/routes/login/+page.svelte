<script lang="ts">
    import type {ActionData} from "./$types.js";
    import { enhance } from "$app/forms";
    export let form : ActionData;
    export let data;

</script>

<!-- Loginpage -->
<div class="login-form">
    <form method="post" action="?/login" use:enhance>
        <!-- <label for="username">Username</label> -->
        <input type="text" name="username" placeholder="Enter Username">
        <button>Login</button>
    
        {#if form?.username}
            <span style="color:red;">{form.username}</span>
        {/if}
    </form>
</div>

<style>
    .login-form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>

