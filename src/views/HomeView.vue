<template>
    <section class="home">
        <WelcomePanel />
        <CreationPanel />
        <HowIWorkPanel />
        <NichesPanel />
        <FooterPanel />
    </section>
</template>

<script>
import WelcomePanel from "@/components/WelcomePanel.vue";
import CreationPanel from "@/components/CreationPanel.vue";
import HowIWorkPanel from "@/components/HowIWorkPanel.vue";
// import BannerPanel from "@/components/BannerPanel.vue";
import NichesPanel from "@/components/NichesPanel.vue";
import FooterPanel from "@/components/FooterPanel.vue";

export default {
    name: "HomeView",
    components: {
        WelcomePanel,
        CreationPanel,
        HowIWorkPanel,
        // BannerPanel,
        NichesPanel,
        FooterPanel,
    },

};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: visible;
}
</style>