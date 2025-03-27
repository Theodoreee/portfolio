<template>
    <section class="DA-panel">
        <h2 class="creations-title">MES CRÉATIONS</h2>
        <h3 class="minia-title">DIRECTION ARTISTIQUE</h3>
        <section class="portfolio-panel">
            <div class="panel-container">
                <div class="content">
                    <h2>ASSETS POUR PROMOUVOIR SES SERVICES SUR COMEUP</h2>
                </div>
                <div class="image-container">
                    <img src="../assets/plaquette_nicocomeup-v1.jpg" alt="Aperçu de la plaquette"
                        class="plaquette-preview">
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
.DA-panel {
    font-family: "blastered";
    align-items: center;
    background-color: #242124;
    padding-bottom: 3em;
    color: #fff;
    min-height: 600px;
    position: relative;
    width: 90%;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.portfolio-panel {
    font-family: "blastered";
    text-transform: uppercase;
    margin: 1rem auto;
    background-color: #3b373b;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 60%;
}

.creations-title {
    font-family: "blastered";
    text-transform: lowercase;
    font-size: 3.8rem;
    letter-spacing: 6px;
    color: #E0B0FF;
    text-align: center;
}

.minia-title {
    font-family: "blastered";
    font-size: 2.8rem;
    letter-spacing: 6px;
    margin-bottom: 1.4em;
    color: #E0B0FF;
    text-align: center;
}

.panel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
}

.content {
    margin-bottom: 2rem;
    text-align: center;
}

.content h2 {
    font-size: 4rem;
    color: #E0B0FF;
    margin-bottom: 1rem;
}

.image-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.plaquette-preview {
    width: 100%;
    max-width: 800px;
    /* Limite la largeur maximale pour les grands écrans */
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
    .creations-title {
        font-size: 2.5rem;
        letter-spacing: 6px;
    }

    .portfolio-panel {
        width: 100%;
        /* Plus large pour les petits écrans */
    }

    .content h2 {
        font-size: 2rem;
    }

    .content p {
        font-size: 1.5rem;
    }

    .plaquette-preview {
        width: 90%;
        /* Prend plus de place sur les petits écrans */
        max-width: 100%;
        /* Assure que l'image ne dépasse pas l'écran */
    }
}
</style>
