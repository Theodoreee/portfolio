<template>
    <section class="portfolio">
        <AccueilPortfolioPanel />
        <PortfolioPanel />
        <BannerPanel />
        <FooterPanel />
    </section>
</template>

<script>
import AccueilPortfolioPanel from '@/components/AccueilPortfolioPanel.vue';
import PortfolioPanel from '@/components/PortfolioPanel.vue';
import FooterPanel from "@/components/FooterPanel.vue";
import BannerPanel from '@/components/BannerPanel.vue';

export default {
    name: "PortfolioView",
    components: {
        AccueilPortfolioPanel,
        PortfolioPanel,
        BannerPanel,
        FooterPanel,
    },
};
</script>

<style scoped>
.portfolio {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: visible;
}
</style>