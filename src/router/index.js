import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AvisView from "@/views/AvisView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
    { path: "/", name: "HomeView", component: HomeView },
    { path: "/avis", name: "AvisView", component: AvisView },
    { path: "/portfolio", name: "PortfolioView", component: PortfolioView },
    { path: "/contact", name: "ContactView", component: ContactView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
