<template>
    <section class="creations-panel">
        <h2 class="creations-title-1">CRÉATIONS RÉCENTES</h2>
        <div class="creations-grid">
            <div class="creation-card" v-for="(creation, index) in creations" :key="index">
                <img :src="creation.image" :alt="creation.title" class="creation-image" />
            </div>
        </div>
        <div class="before-after-panel">
            <h2 class="creations-title-2">AVANT - APRèS</h2>
            <div class="image-wrapper" @mousemove="handleMouseMove">
                <img :src="require('../assets/brain_valer-v1-min.jpeg')" alt="Before" class="image" />
                <img :src="require('../assets/brain_valer-v3-min.jpeg')" alt="After" class="image"
                    :style="{ clipPath: clipPathStyle }" />
                <div class="divider" :style="{ left: `${dividerPosition}px` }"></div>
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
            dividerPosition: 0,
            containerWidth: 0,
        };
    },
    computed: {
        clipPathStyle() {
            return `inset(0 ${this.containerWidth - this.dividerPosition}px 0 0)`;
        },
    },
    methods: {
        goToPortfolio() {
            // Redirection vers la page portfolio
            this.$router.push("/portfolio");
        },
        handleMouseMove(event) {
            const container = event.currentTarget;
            const rect = container.getBoundingClientRect();
            this.containerWidth = rect.width;

            // Limiter le diviseur entre 0 et la largeur du conteneur
            const mouseX = event.clientX - rect.left;
            this.dividerPosition = Math.max(0, Math.min(mouseX, this.containerWidth));
        }
    },
    mounted() {
        // Set initial position to the center
        const container = this.$el.querySelector(".image-wrapper");
        this.containerWidth = container.offsetWidth;
        this.dividerPosition = this.containerWidth / 2;
    },
};
</script>

<style scoped>
.before-after-panel {
    font-family: "blastered";
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    height: auto;
    /* Ajuste automatiquement à la hauteur du contenu */
    margin-bottom: 2rem;
    overflow: hidden;
    /* Coupe tout débordement */
}

.image-wrapper {
    position: relative;
    width: 100%;
    height: 440px;
    overflow: hidden;
    /* Cache les parties des images qui dépassent */
    border-radius: 20px;
    /* Coins arrondis */
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Les images remplissent le conteneur sans déborder */
    clip-path: inset(0 0 0 0);
    transition: none;
    border-radius: 20px;
    /* Coins arrondis appliqués aux images */
}

.divider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: ew-resize;
    z-index: 10;
}

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

.creations-title-1 {
    font-size: 3.8rem;
    letter-spacing: 6px;
    margin-bottom: 1.4em;
    color: #E0B0FF;
    text-align: center;
}

.creations-title-2 {
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
    background-color: rgba(255, 255, 255, 0);
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

@media (max-width: 1024px) {
    .creations-panel {
        padding: 2rem;
    }

    .creations-title-1,
    .creations-title-2 {
        font-size: 3.2rem;
    }

    .creations-grid {
        gap: 1.5rem;
    }

    .image-wrapper {
        height: 360px;
        /* Réduction de la hauteur */
    }

    .portfolio-button {
        font-size: 1.8rem;
        padding: 0.7rem 1.8rem;
    }
}

/* Adaptation pour téléphones */
@media (max-width: 768px) {
    .creations-panel {
        padding: 1.5rem;
    }

    .creations-title-1,
    .creations-title-2 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }

    .creations-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .creation-card {
        border-radius: 6px;
    }

    .image-wrapper {
        height: 300px;
        /* Hauteur encore réduite */
    }

    .portfolio-button {
        font-size: 1.6rem;
        padding: 0.6rem 1.5rem;
    }
}

/* Adaptation pour petits téléphones */
@media (max-width: 480px) {

    .creations-title-1,
    .creations-title-2 {
        font-size: 2.4rem;
    }

    .creations-grid {
        grid-template-columns: 1fr;
    }

    .image-wrapper {
        height: 240px;
    }

    .portfolio-button {
        font-size: 1.4rem;
        padding: 0.5rem 1.2rem;
    }
}
</style>
