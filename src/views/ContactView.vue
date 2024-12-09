<template>
    <section class="contact">
        <AccueilContactPanel />
        <ContactOptionsPanel />
        <FooterPanel />
    </section>
</template>

<script>
import AccueilContactPanel from '@/components/AccueilContactPanel.vue';
import FooterPanel from '@/components/FooterPanel.vue';
import ContactOptionsPanel from '@/components/ContactOptionsPanel.vue';

export default {
    name: "ContactView",
    components: {
        AccueilContactPanel,
        ContactOptionsPanel,
        FooterPanel
    }
};
</script>

<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: visible;
}
</style>
