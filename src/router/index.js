import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ResultView from "@/views/ResultView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
import LegalMentions from "@/components/LegalMentions.vue";

const routes = [
    { path: "/", name: "HomeView", component: HomeView },
    { path: "/avis", name: "ResultView", component: ResultView },
    { path: "/portfolio", name: "PortfolioView", component: PortfolioView },
    { path: "/contact", name: "ContactView", component: ContactView },
    { path: "/mentions-legales", name: "LegalMentions", component: LegalMentions }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
