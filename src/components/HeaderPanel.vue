<template>
    <header class="header">
        <nav class="nav-bar">
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" :class="{ active: $route.name === 'HomeView' }">
                        ACCUEIL
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/portfolio" class="nav-link" :class="{ active: $route.name === 'PortfolioView' }">
                        PORTFOLIO
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/avis" class="nav-link" :class="{ active: $route.name === 'ResultView' }">
                        RÉSULTATS
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link" :class="{ active: $route.name === 'ContactView' }">
                        CONTACT
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderPanel",
};
</script>

<style scoped>
.header {
    background-color: #242124;
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.nav-list {
    display: flex;
    gap: 5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {}

.nav-link {
    font-family: "blastered";
    text-decoration: none;
    color: #E0B0FF;
    font-size: 1.9rem;
    font-weight: bold;
    position: relative;
    transition: color 0.3s ease;
    letter-spacing: 2px;
}

.nav-link::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #E0B0FF;
    transition: width 0.3s ease;
}

.nav-link:hover::before,
.nav-link.active::before {
    width: 100%;
}

@media (max-width: 768px) {
    .header {
        padding: 2rem 1.5rem;
    }

    .nav-link {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 1.5rem 1rem;
    }

    .nav-list {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .nav-link {
        font-size: 1.3rem;
    }
}
</style>
