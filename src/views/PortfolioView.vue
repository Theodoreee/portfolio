<template>
    <section class="portfolio">
        <AccueilPortfolioPanel />
        <PortfolioPanel />
        <FooterPanel />
    </section>
</template>

<script>
import AccueilPortfolioPanel from '@/components/AccueilPortfolioPanel.vue';
import PortfolioPanel from '@/components/PortfolioPanel.vue';
import FooterPanel from "@/components/FooterPanel.vue";

export default {
    name: "PortfolioView",
    components: {
        AccueilPortfolioPanel,
        PortfolioPanel,
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