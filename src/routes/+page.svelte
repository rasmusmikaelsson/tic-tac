<script>

    export let data;

</script>

<main>
    <section class="home-banner">
        <div class="home-banner__text">
            <h1>Welcome, {data.username}</h1>
            <div class="logout_btn">
                <form method="post" action="/login?/logout">
                    <button>Logout</button>
                </form>
            </div>
        </div>
        
    </section>
    <section class="projects">
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti perspiciatis omnis explicabo suscipit hic!</p>
        <a href="/session">Sessions</a>     
    </section>
    <!-- Home page -->
    
</main>

<style>
    .home-banner {
        background: url('./home-banner.jpg');
        background-size: cover;
        background-position: center;

        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home-banner__text {
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

    .logout_btn button {
        font-size: 22px;
        box-shadow: 2px 3px 10px 4px rgba(0, 0, 0, 0.5);
        background: black;
        color: white;

        width: 200px;

        border-radius: 20px;
        border: 4px solid white;
        padding: 10px;

        transition: all 0.3s ease;
    }

    .logout_btn button:hover {
        background: white;
        color: black;
        border: 4px solid black;
    }

    .projects {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .projects p {
        margin-bottom: 1rem;
    }

    .projects a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: black;
        font-size: 18px;
        box-shadow: 2px 3px 10px 4px rgba(0, 0, 0, 0.5);
        background: black;
        color: white;

        width: 150px;

        border-radius: 20px;
        border: 4px solid white;
        padding: 10px;

        transition: all 0.3s ease;
    }

    .projects a:hover {
        background: white;
        color: black;
        border: 4px solid black;
    }


</style>