<template>
    <section class="creations-panel">
        <h2 class="creations-title">MES CRÉATIONS</h2>
        <h3 class="banner-title">BANNIÈRES</h3>
        <div class="creations-grid">
            <div class="creation-card" v-for="(banner, index) in banners" :key="index" ref="bannerCards"
                :class="{ 'fade-in': isVisible[index] }">
                <img :src="banner.image" :alt="banner.title" class="creation-image" @contextmenu.prevent />
                <div class="image-overlay"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BannersPanel",
    data() {
        return {
            banners: [
                { title: "Bannière 1", image: require("@/assets/banner_badis-v5-min.jpg") },
                { title: "Bannière 2", image: require("@/assets/banner_remy_3-v7-min.jpg") }
            ],
            isVisible: []
        };
    },
    created() {
        this.loadBanners();
    },
    mounted() {
        this.observeBanners();
        this.addGlobalEventListeners();
    },
    methods: {
        loadBanners() {
            this.isVisible = new Array(this.banners.length).fill(false);
        },
        observeBanners() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const index = Array.from(this.$refs.bannerCards).indexOf(entry.target);
                    if (entry.isIntersecting) {
                        this.isVisible[index] = true;
                    }
                });
            }, options);

            this.$refs.bannerCards.forEach(card => {
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
    padding-bottom: 3rem;
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
    color: #E0B0FF;
    text-align: center;
}

.banner-title {
    font-size: 2.8rem;
    letter-spacing: 6px;
    margin-bottom: 1.4em;
    color: #E0B0FF;
    text-align: center;
}

.creations-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Deux colonnes */
    gap: 2rem;
    /* Espacement entre les cartes */
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.creation-card {
    width: 100%;
    max-width: 100%;
    /* Empêche les bannières de s'étirer */
    background-color: transparent;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.creation-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
    .creations-grid {
        grid-template-columns: 1fr;
        /* Une colonne sur petits écrans */
    }
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
    height: auto;
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
        gap: 2rem;
    }

    .creation-card {
        max-width: 90%;
    }

    .creations-title {
        font-size: 3rem;
    }
}

@media (max-width: 480px) {
    .creation-card {
        max-width: 95%;
    }

    .creations-title {
        font-size: 2.5rem;
        letter-spacing: 6px;
    }
}
</style>
