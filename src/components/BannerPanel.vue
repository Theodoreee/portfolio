<template>
    <section class="creations-panel">
        <h2 class="creations-title">Bannières</h2>
        <div class="banners-container">
            <div class="banner-card" v-for="(banner, index) in banners" :key="index">
                <img :src="banner.image" :alt="banner.title" class="banner-image" />
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
            ]
        };
    }
};
</script>

<style scoped>
/* Section principale */
.creations-panel {
    font-family: "blastered";
    background-color: #242124;
    padding: 3rem;
    color: #fff;
    text-align: center;
}

/* Titre */
.creations-title {
    font-size: 3.8rem;
    letter-spacing: 6px;
    color: #E0B0FF;
    margin-bottom: 1.4rem;
}

/* Conteneur des bannières */
.banners-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
}

/* Cartes des bannières */
.banner-card {
    width: 100%;
    max-width: 700px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.banner-card:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

/* Images */
.banner-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 10px;
}

/* Responsive */
@media (max-width: 768px) {
    .banners-container {
        gap: 1.5rem;
    }

    .banner-card {
        max-width: 90%;
    }

    .creations-title {
        font-size: 3rem;
    }
}

@media (max-width: 480px) {
    .banner-card {
        max-width: 95%;
    }

    .creations-title {
        font-size: 2.5rem;
        letter-spacing: 3px;
    }
}
</style>
