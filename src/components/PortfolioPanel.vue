<template>
    <section class="creations-panel">
        <h2 class="creations-title">MES CRÉATIONS</h2>
        <h3 class="minia-title">MINIATURES</h3>
        <div class="creations-grid">
            <div class="creation-card" v-for="(creation, index) in creations" :key="index" ref="creationCards"
                :class="{ 'fade-in': isVisible[index] }">
                <img :src="creation.image" :alt="creation.title" class="creation-image" />
                <div class="image-overlay"></div>
            </div>
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

        loadCreations() {
            const context = require.context('@/assets', false, /\.(png)$/);
            const images = context.keys();
            this.creations = images.map(image => {
                return {
                    title: image.split('/').pop().replace(/\.\w+$/, ''),
                    image: context(image),
                };
            });
            this.isVisible = new Array(this.creations.length).fill(false);
        },
        observeCreations() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const index = Array.from(this.$refs.creationCards).indexOf(entry.target);
                    if (entry.isIntersecting) {
                        this.isVisible[index] = true;
                    }
                });
            }, options);

            this.$refs.creationCards.forEach(card => {
                observer.observe(card);
            });
        },
        addGlobalEventListeners() {
            document.addEventListener('contextmenu', (e) => {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                }
            });

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
    text-transform: lowercase;
    font-size: 3.8rem;
    letter-spacing: 6px;
    margin-top: 1.4em;
    color: #E0B0FF;
    text-align: center;
}


.minia-title {
    font-size: 2.8rem;
    letter-spacing: 6px;
    margin-bottom: 1.4em;
    color: #E0B0FF;
    text-align: center;
}

.creations-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}

.creation-card {
    background-color: transparent;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
}

.creation-card.fade-in {
    opacity: 1;
    transform: translateY(0);
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

@media (max-width: 768px) {
    .creations-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .creations-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .creations-panel {
        padding: 2rem;
    }

    .creations-title {
        font-size: 3rem;
        letter-spacing: 4px;
    }

    .creations-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .creation-card {
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .portfolio-button {
        font-size: 1.8rem;
        padding: 0.6rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .creations-panel {
        padding: 1.5rem;
    }

    .creations-title {
        font-size: 2.5rem;
        letter-spacing: 3px;
    }

    .creations-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .creation-card {
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .portfolio-button {
        font-size: 1.5rem;
        padding: 0.5rem 1.2rem;
    }
}
</style>
