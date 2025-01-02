<template>
    <section class="creations-panel">
        <h2 class="creations-title">MES CRÉATIONS</h2>
        <div class="creations-grid">
            <div class="creation-card" v-for="(creation, index) in creations" :key="index" ref="creationCards"
                :class="{ 'fade-in': isVisible[index] }">
                <img :src="creation.image" :alt="creation.title" class="creation-image" />
                <div class="image-overlay"></div>
            </div>
        </div>
        <!-- Bouton ajouté en dessous des créations -->
        <div class="button-container">
            <button @click="goToContact" class="portfolio-button">CONTACT</button>
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
                // Ajoutez autant de créations que vous en avez
            ],
            isVisible: []
        };
    },
    created() {
        this.loadCreations();
    },
    mounted() {
        this.observeCreations();
        this.addGlobalEventListeners();
    },
    methods: {
        goToContact() {
            this.$router.push("/contact");
        },

        // Fonction pour charger automatiquement les créations
        loadCreations() {
            const context = require.context('@/assets', false, /\.(png)$/); // Cible les fichiers d'images dans le dossier assets
            const images = context.keys(); // Récupère les clés des fichiers dans le dossier
            this.creations = images.map(image => {
                return {
                    title: image.split('/').pop().replace(/\.\w+$/, ''), // Utilise le nom du fichier sans l'extension comme titre
                    image: context(image),
                };
            });
            this.isVisible = new Array(this.creations.length).fill(false);
        },
        observeCreations() {
            const options = {
                root: null, // Utilise la fenêtre du navigateur
                rootMargin: '0px',
                threshold: 0.5 // Déclenche l'événement lorsque 50% de l'élément est visible
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const index = Array.from(this.$refs.creationCards).indexOf(entry.target);
                    if (entry.isIntersecting) {
                        this.isVisible[index] = true; // Directement modifier l'indice de isVisible
                    }
                });
            }, options);

            this.$refs.creationCards.forEach(card => {
                observer.observe(card);
            });
        },
        addGlobalEventListeners() {
            // Désactiver le clic droit sur les images
            document.addEventListener('contextmenu', (e) => {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                }
            });

            // Désactiver les raccourcis clavier (Ctrl+S, Ctrl+U)
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
                    e.preventDefault();
                }
            });
        }
    }
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
    width: 90%;
    margin: 0 auto;
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
    grid-template-columns: repeat(3, 1fr);
    /* 3 images par ligne */
    gap: 3rem;
    /* Espace entre les images */
}

.creation-card {
    background-color: transparent;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    /* Commence en transparent */
    transform: translateY(50px);
    /* Commence légèrement décalé vers le bas */
    transition: opacity 1s ease, transform 1s ease;
    /* Durée de l'animation */
}

.creation-card.fade-in {
    opacity: 1;
    /* Devient visible */
    transform: translateY(0);
    /* Remontée à sa position initiale */
}

.creation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.creation-image {
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 10;
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
    margin-top: 1.3em;
    margin-bottom: 1em;
}

.portfolio-button:hover {
    background-color: #b590d0;
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .creations-grid {
        grid-template-columns: repeat(2, 1fr);
        /* 2 images par ligne sur des écrans plus petits */
    }
}

@media (max-width: 480px) {
    .creations-grid {
        grid-template-columns: 1fr;
        /* 1 image par ligne sur des écrans très petits */
    }
}

/* Pour les tablettes */
@media (max-width: 768px) {
    .creations-panel {
        padding: 2rem;
    }

    .creations-title {
        font-size: 3rem;
        /* Taille du titre ajustée */
        letter-spacing: 4px;
    }

    .creations-grid {
        grid-template-columns: repeat(2, 1fr);
        /* 2 images par ligne */
        gap: 2rem;
        /* Espacement réduit */
    }

    .creation-card {
        transform: translateY(30px);
        /* Ajuste la position initiale pour l'animation */
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .portfolio-button {
        font-size: 1.8rem;
        padding: 0.6rem 1.5rem;
        /* Taille du bouton ajustée */
    }
}

/* Pour les téléphones */
@media (max-width: 480px) {
    .creations-panel {
        padding: 1.5rem;
    }

    .creations-title {
        font-size: 2.5rem;
        /* Taille du titre encore réduite */
        letter-spacing: 3px;
    }

    .creations-grid {
        grid-template-columns: 1fr;
        /* 1 image par ligne */
        gap: 1.5rem;
        /* Espacement encore réduit */
    }

    .creation-card {
        transform: translateY(20px);
        /* Ajuste encore la position initiale pour l'animation */
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .portfolio-button {
        font-size: 1.5rem;
        padding: 0.5rem 1.2rem;
        /* Taille du bouton encore réduite */
    }
}
</style>
