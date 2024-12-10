<template>
    <section class="creations-panel">
        <h2 class="creations-title">CRÉATIONS RÉCENTES</h2>
        <div class="creations-grid">
            <div class="creation-card" v-for="(creation, index) in creations" :key="index">
                <img :src="creation.image" :alt="creation.title" class="creation-image" />
            </div>
        </div>
        <!-- Bouton ajouté en dessous des créations -->
        <div class="button-container">
            <button @click="goToPortfolio" class="portfolio-button">VOIR LE PORTFOLIO</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "CreationsPanel",
    data() {
        return {
            creations: [
                { title: "Création 1", image: require("@/assets/combattant_ia-v6-min.png") },
                { title: "Création 2", image: require("@/assets/aaron2-v2-min.png") },
                { title: "Création 3", image: require("@/assets/activision2-final-min.png") },
                { title: "Création 4", image: require("@/assets/formule-final-min.png") },
            ],
        };
    },
    methods: {
        goToPortfolio() {
            // Redirection vers la page portfolio
            this.$router.push("/portfolio");
        }
    },
};
</script>

<style scoped>
.creations-panel {
    font-family: "blastered";
    align-items: center;
    background-color: #242124;
    padding: 3rem;
    color: #fff;
    min-height: 600px;
    position: relative;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.creations-title {
    font-size: 3.8rem;
    letter-spacing: 6px;
    margin-top: 1.4em;
    margin-bottom: 1.4em;
    color: #E0B0FF;
    text-align: center;
}

.creations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.creation-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.creation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.creation-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Style pour le bouton */
.button-container {
    text-align: center;
    margin-top: 2rem;
}

.portfolio-button {
    font-family: "blastered";
    background-color: #E0B0FF;
    color: #242124;
    font-size: 2rem;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    /* Ajout de la transition pour le zoom */
    margin-top: 1.3em;
    margin-bottom: 1em;
}

.portfolio-button:hover {
    background-color: #b590d0;
    /* Couleur un peu plus foncée */
    transform: scale(1.1);
    /* Zoom léger */
}

.creations-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Adaptation du titre et des marges sur tablettes */
@media (max-width: 768px) {
    .creations-title {
        font-size: 3rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .portfolio-button {
        font-size: 1.8rem;
        padding: 0.7rem 1.8rem;
    }
}

/* Adaptation pour les téléphones */
@media (max-width: 480px) {
    .creations-title {
        font-size: 2.5rem;
    }

    .creation-card {
        border-radius: 6px;
    }

    .portfolio-button {
        font-size: 1.6rem;
        padding: 0.6rem 1.5rem;
    }
}
</style>
