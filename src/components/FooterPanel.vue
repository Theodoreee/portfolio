<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Nom à gauche -->
            <div class="footer-left">
                <p>Cléo - Miniamaker</p>
            </div>

            <!-- Liens réseaux sociaux et pages à droite -->
            <div class="footer-right">
                <div class="social-links">
                    <h3>Réseaux sociaux</h3>
                    <span @click="goToInstagram" class="social-link">Instagram</span>
                    <span @click="goToDiscord" class="social-link">Discord</span>
                    <span @click="goToEmail" class="social-link">Email</span>
                </div>

                <div class="page-links">
                    <h3>Pages</h3>
                    <span @click="goToAccueil" class="page-link">Accueil</span>
                    <span @click="goToPortfolio" class="page-link">Portfolio</span>
                    <span @click="goToAvis" class="page-link">Avis</span>
                    <span @click="goToContact" class="page-link">Contact</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterPanel_",
    methods: {
        // Navigation vers les pages
        goToAccueil() {
            if (this.$route.name !== "HomeView") {
                this.$router.push("/");
            }
        },
        goToPortfolio() {
            if (this.$route.name !== "PortfolioView") {
                this.$router.push("/portfolio");
            }
        },
        goToAvis() {
            if (this.$route.name !== "AvisView") {
                this.$router.push("/avis");
            }
        },
        goToContact() {
            if (this.$route.name !== "ContactView") {
                this.$router.push("/contact");
            }
        },

        // Ouverture des réseaux sociaux
        goToInstagram() {
            open("https://www.instagram.com/cl3oyt/", "_blank");
        },
        goToDiscord() {
            open("https://discord.gg/MMcCAuhTNg", "_blank");
        },
        goToEmail() {
            open("mailto: cl3o.contact@gmail.com", "_blank");
        }
    }
};
</script>

<style scoped>
.footer {
    background-color: #000;
    color: #fff;
    padding: 2rem 1rem;
    font-family: "Arial", sans-serif;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    /* Permet aux éléments de passer à la ligne si nécessaire */
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1.5rem;
    /* Espacement entre les sections */
}

.footer-left p {
    font-size: 1.6rem;
    margin: 0;
}

.footer-right {
    display: flex;
    flex-wrap: wrap;
    /* Les sections passent à la ligne sur petits écrans */
    justify-content: space-between;
    width: 100%;
    /* Utilise toute la largeur sur petits écrans */
    max-width: 600px;
    /* Limite la largeur sur écrans plus larges */
    gap: 2rem;
    /* Ajoute un espacement entre les sections */
}

.social-links,
.page-links {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
    /* Aligne le contenu à gauche */
}

.social-link,
.page-link {
    font-size: 1rem;
    color: #E0B0FF;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-link:hover,
.page-link:hover {
    color: #b590d0;
}

.social-links h3,
.page-links h3 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
}

/* Responsiveness */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        /* Les éléments s’empilent verticalement */
        align-items: center;
        text-align: center;
    }

    .footer-right {
        flex-direction: column;
        /* Les sections s’empilent */
        align-items: center;
        width: 100%;
        /* Utilise toute la largeur */
    }

    .social-links,
    .page-links {
        align-items: center;
        /* Centre le contenu */
    }

    .footer-left p {
        text-align: center;
        /* Centre le texte à gauche sur petits écrans */
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 1rem 0.5rem;
        /* Réduit le padding sur les très petits écrans */
    }

    .footer-left p {
        font-size: 1.4rem;
        /* Réduit la taille du texte */
    }

    .social-link,
    .page-link {
        font-size: 0.9rem;
        /* Réduit la taille des liens */
    }
}
</style>
