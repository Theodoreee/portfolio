<template>
    <section class="avis">
        <AccueilAvisPanel />
        <AvisClientsPanel />
        <FooterPanel />
    </section>
</template>

<script>
import AccueilAvisPanel from '@/components/AccueilAvisPanel.vue';
import AvisClientsPanel from '@/components/AvisClientsPanel.vue';
import FooterPanel from '@/components/FooterPanel.vue';

export default {
    name: "ServicesView",
    components: {
        AccueilAvisPanel,
        AvisClientsPanel,
        FooterPanel
    },
};
</script>

<style scoped>
.avis {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: visible;
}
</style>
