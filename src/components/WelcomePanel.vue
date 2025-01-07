<template>
    <section class="welcome-panel">
        <div class="welcome-text">
            <h1>Bienvenue chez Cléo Miniature !</h1>
            <p>Découvrez mes créations uniques et mes collaborations avec de nombreux Youtubeurs !</p>
        </div>
        <div class="welcome-image">
        </div>
    </section>
</template>

<script>
export default {
    name: "WelcomePanel",
};
</script>

<style scoped>
.welcome-panel {
    font-family: "blastered";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4a3370;
    padding: 3rem;
    color: #fff;
    min-height: 600px;
    border-radius: 0 0 70px 70px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    position: relative;
    width: 100%;
    margin-top: 3em;
    left: 0;
    right: 0;
    z-index: 1;
    box-sizing: border-box;
    overflow: hidden;
}

.welcome-text {
    text-align: center;
    z-index: 3;
    position: relative;
    max-width: 60%;
}

.welcome-text h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
}

.welcome-text p {
    font-size: 1.6rem;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.welcome-image {
    position: absolute;
    bottom: -400px;
    left: 0;
    width: 100%;
    height: 1000px;
    background-image: url("../../public/moon.gif");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    z-index: 2;
    opacity: 0.3;
}


@media (max-width: 768px) {
    .welcome-panel {
        padding: 2rem;
        min-height: 500px;
    }

    .welcome-text {
        max-width: 80%;
    }

    .welcome-text h1 {
        font-size: 4.5rem;
    }

    .welcome-text p {
        font-size: 1.4rem;
        line-height: 1.4;
    }

    .welcome-image {
        bottom: -300px;
        height: 800px;
    }
}

@media (max-width: 480px) {
    .welcome-panel {
        padding: 1.5rem;
        min-height: 400px;
    }

    .welcome-text h1 {
        font-size: 3.2rem;
    }

    .welcome-text p {
        font-size: 1.2rem;
        line-height: 1.3;
        letter-spacing: 1.5px;
    }

    .welcome-image {
        bottom: -200px;
        height: 600px;
    }
}
</style>
