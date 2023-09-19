<script>
    import { enhance } from "$app/forms";

    export let data;
</script>

<main>
    <section class="banner">
        <div class="banner-text">
            <h1>Welcome To Sessions</h1>
            <a href="/"
                ><button class="back_btn"
                    >Go Back, <span>or Scroll Down :)</span></button
                ></a
            >
        </div>
    </section>
    <section class="session">
        <div class="sessions">
            <h1>Create A Session</h1>
        </div>

        <form action="?/create" method="post" use:enhance>
            <input
                type="text"
                name="sessionName"
                placeholder="Enter session name.."
            />
            <button>Create</button>
        </form>

        <p>Active Session</p>

        <div class="black-devider">
            <span></span>
        </div>

        {#each data.sessions as [session, messages]}
            <a href="/session/{session}"
                >{session} - {messages.length} messages</a
            >
        {/each}
    </section>
</main>

<style>
    .banner {
        background: url("./session-banner.jpg");
        background-size: cover;
        background-position: center;

        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-text {
        display: flex;
        flex-direction: column;
        align-items: center;

        box-shadow: 2px 3px 10px 4px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        backdrop-filter: blur(15px);

        color: white;
        font-size: 46px;

        padding: 50px;
    }

    .back_btn {
        font-size: 22px;
        box-shadow: 2px 3px 10px 4px rgba(0, 0, 0, 0.5);
        background: #7b3470;
        color: white;

        width: 250px;

        border-radius: 20px;
        border: 4px solid white;
        padding: 10px;

        transition: all 0.3s ease;
    }

    .back_btn:hover {
        background: white;
        color: #7b3470;
        border: 4px solid #7b3470;
    }

    .back_btn span {
        font-size: 12px;
    }

    .session {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
    }

    .session a {
        text-decoration: none;
        color: black;
    }

    form {
        margin-top: 1rem;
    }
</style>
