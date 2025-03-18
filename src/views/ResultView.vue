<template>
    <section class="res">
        <AccueilResultsPanel />
        <ResultsPanel />
        <FooterPanel />
    </section>
</template>

<script>
import AccueilResultsPanel from '@/components/AccueilResultsPanel.vue';
import ResultsPanel from '@/components/ResultsPanel.vue';
import FooterPanel from '@/components/FooterPanel.vue';

export default {
    name: "ServicesView",
    components: {
        AccueilResultsPanel,
        ResultsPanel,
        FooterPanel
    },
};
</script>

<style scoped>
.res {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: visible;
}
</style>
