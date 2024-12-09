<template>
    <section class="niches-page">
        <div class="niches-container">
            <!-- Texte à gauche -->
            <div class="text-left">
                <h2>Les niches dans lesquelles je suis à l'aise</h2>
                <p>
                    Voici quelques domaines dans lesquels je suis compétent et où je peux apporter de la valeur à
                    vos miniatures.
                </p>
            </div>

            <!-- Bulles flottantes à droite -->
            <div class="bubbles-right">
                <div class="bubble bubble-1">Business</div>
                <div class="bubble bubble-2">Divertissement</div>
                <div class="bubble bubble-3">Jeux vidéos</div>
                <div class="bubble bubble-4">IRL</div>
                <div class="bubble bubble-5">Storytelling</div>
                <div class="bubble bubble-6">Dev Perso</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "NichesPage",
};
</script>

<style scoped>
.niches-page {
    font-family: "blastered";
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    background-color: #242124;
}

.niches-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
}

.text-left {
    width: 45%;
}

.text-left h2 {
    font-size: 2.8rem;
    color: #ffffff;
    margin-bottom: 1rem;
}

.text-left p {
    font-size: 1.5rem;
    color: #E0B0FF;
    line-height: 1.6;
    letter-spacing: 3px;
}

.bubbles-right {
    width: 50%;
    position: relative;
    height: 300px;
}

.bubble {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    background-color: #4a3370;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    opacity: 0.8;
    animation: floatAndDeform 10s infinite;
}

.bubble-1 {
    top: -20%;
    left: -5%;
    animation-duration: 22s;
}

.bubble-2 {
    top: 40%;
    left: -5%;
    animation-duration: 30s;
}

.bubble-3 {
    top: -20%;
    left: 38%;
    animation-duration: 18s;
}

.bubble-4 {
    top: 40%;
    left: 38%;
    animation-duration: 10s;
}

.bubble-5 {
    top: -20%;
    left: 80%;
    animation-duration: 26s;
}

.bubble-6 {
    top: 40%;
    left: 80%;
    animation-duration: 14s;
}

@keyframes floatAndDeform {
    0% {
        transform: translateY(0) translateX(0) scale(1);
    }

    15% {
        transform: translateY(-10px) translateX(20px) scale(1.1);
    }

    30% {
        transform: translateY(0) translateX(0) scale(1);
    }

    45% {
        transform: translateY(10px) translateX(-20px) scale(1.1);
    }

    60% {
        transform: translateY(0) translateX(0) scale(1);
    }

    75% {
        transform: translateY(-10px) translateX(-20px) scale(1.1);
    }

    100% {
        transform: translateY(0) translateX(0) scale(1);
    }
}

/* Responsiveness */

/* Pour les tablettes */
@media (max-width: 768px) {
    .niches-container {
        flex-direction: column;
        /* Change la disposition en colonne */
        align-items: center;
        /* Centre les éléments */
        text-align: center;
        /* Centre le texte */
    }

    .text-left {
        width: 100%;
        /* Utilise toute la largeur */
        margin-bottom: 2rem;
        /* Ajoute un espacement avec les bulles */
    }

    .bubbles-right {
        width: 100%;
        /* Utilise toute la largeur */
        height: 400px;
        /* Augmente la hauteur pour plus de bulles visibles */
    }

    .bubble {
        width: 140px;
        /* Réduit la taille des bulles */
        height: 140px;
        font-size: 1.8rem;
        /* Réduit la taille de la police */
    }
}

/* Pour les téléphones */
@media (max-width: 480px) {
    .text-left h2 {
        font-size: 2.2rem;
        /* Réduit la taille du titre */
    }

    .text-left p {
        font-size: 1.3rem;
        /* Réduit la taille du texte */
        line-height: 1.4;
        /* Ajuste l'interligne */
        letter-spacing: 2px;
        /* Réduit l'espacement entre les lettres */
    }

    .bubbles-right {
        height: 300px;
        /* Réduit encore la hauteur */
    }

    .bubble {
        width: 120px;
        /* Taille plus petite pour les bulles */
        height: 120px;
        font-size: 1.5rem;
        /* Réduction supplémentaire de la taille de police */
    }
}
</style>
