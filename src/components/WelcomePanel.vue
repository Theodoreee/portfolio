<template>
    <section class="welcome-panel">
        <div class="welcome-text">
            <h1>Bienvenue chez Cléo Miniature !</h1>
            <p>Découvrez mes créations uniques et mes collaborations avec de nombreux Youtubeurs !</p>
        </div>
        <div class="welcome-image">
            <!-- L'image est ajoutée ici en tant que background -->
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
    /* font-family: "Chewy", system-ui; */
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

/* Responsiveness */

/* Pour les tablettes */
@media (max-width: 768px) {
    .welcome-panel {
        padding: 2rem;
        min-height: 500px;
        /* Réduction de la hauteur minimale */
    }

    .welcome-text {
        max-width: 80%;
        /* Augmente la largeur pour améliorer la lisibilité */
    }

    .welcome-text h1 {
        font-size: 4.5rem;
        /* Réduction de la taille du titre */
    }

    .welcome-text p {
        font-size: 1.4rem;
        /* Réduction de la taille du texte */
        line-height: 1.4;
        /* Ajustement de l'interligne */
    }

    .welcome-image {
        bottom: -300px;
        /* Ajuste la position de l'image */
        height: 800px;
        /* Réduction de la hauteur de l'image */
    }
}

/* Pour les téléphones */
@media (max-width: 480px) {
    .welcome-panel {
        padding: 1.5rem;
        min-height: 400px;
        /* Réduction supplémentaire de la hauteur */
    }

    .welcome-text h1 {
        font-size: 3.2rem;
        /* Réduction supplémentaire de la taille du titre */
    }

    .welcome-text p {
        font-size: 1.2rem;
        /* Réduction de la taille du texte */
        line-height: 1.3;
        /* Ajustement de l'interligne */
        letter-spacing: 1.5px;
        /* Réduction de l'espacement des lettres */
    }

    .welcome-image {
        bottom: -200px;
        /* Ajuste davantage la position de l'image */
        height: 600px;
        /* Réduction supplémentaire de la hauteur de l'image */
    }
}
</style>
