<template>
    <section class="portfolio">
        <AccueilPortfolioPanel />

        <div class="portfolio-nav">
            <button class="portfolio-btn" :class="{ active: selectedTab === 'miniatures' }"
                @click="selectedTab = 'miniatures'">
                Miniatures
            </button>
            <button class="portfolio-btn" :class="{ active: selectedTab === 'bannieres' }"
                @click="selectedTab = 'bannieres'">
                Bannières
            </button>
            <button class="portfolio-btn" :class="{ active: selectedTab === 'resultats' }"
                @click="selectedTab = 'resultats'">
                Résultats
            </button>
        </div>

        <div class="portfolio-content">
            <PortfolioPanel v-if="selectedTab === 'miniatures'" />
            <BannerPanel v-if="selectedTab === 'bannieres'" />
            <ResultsPanel v-if="selectedTab === 'resultats'" />

        </div>

        <FooterPanel />
    </section>
</template>

<script>
import AccueilPortfolioPanel from '@/components/AccueilPortfolioPanel.vue';
import PortfolioPanel from '@/components/PortfolioPanel.vue';
import BannerPanel from '@/components/BannerPanel.vue';
import ResultsPanel from '@/components/ResultsPanel.vue';
import FooterPanel from '@/components/FooterPanel.vue';

export default {
    name: "PortfolioView",
    components: {
        AccueilPortfolioPanel,
        PortfolioPanel,
        BannerPanel,
        ResultsPanel,
        FooterPanel,
    },
    data() {
        return {
            selectedTab: 'miniatures' // Par défaut, on affiche les miniatures
        };
    }
};
</script>

<style scoped>
.portfolio-nav {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 2rem 0;
}

.portfolio-btn {
    font-family: "blastered";
    text-decoration: none;
    color: #E0B0FF;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border: 2px solid transparent;
    /* Bordure transparente au départ */
    background: none;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease, border-color 0.3s ease;
    letter-spacing: 2px;
}

.portfolio-btn::before,
.portfolio-btn::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    background: none;
    transition: width 0.3s ease, height 0.3s ease;
}

/* Bordures animées */
.portfolio-btn::before {
    top: 0;
    left: 0;
    border-top: 2px solid #E0B0FF;
    border-left: 2px solid #E0B0FF;
}

.portfolio-btn::after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #E0B0FF;
    border-right: 2px solid #E0B0FF;
}

.portfolio-btn:hover::before,
.portfolio-btn.active::before {
    width: 100%;
    height: 100%;
}

.portfolio-btn:hover::after,
.portfolio-btn.active::after {
    width: 100%;
    height: 100%;
}

/* Change la couleur du texte au survol ou si actif */
.portfolio-btn:hover,
.portfolio-btn.active {
    color: #E0B0FF;
    border-color: #E0B0FF;
}

.separator {
    width: 80%;
    /* Largeur du trait */
    height: 2px;
    /* Épaisseur du trait */
    background-color: #E0B0FF;
    /* Couleur du trait */
    margin: 1.5rem auto;
    /* Espacement */
    opacity: 0.7;
    /* Légère transparence */
    transition: width 0.3s ease;
}

.separator:hover {
    width: 90%;
    /* Effet subtil au survol */
}
</style>
