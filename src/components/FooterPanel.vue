<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <p>Cléo - Miniamaker</p>
            </div>

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
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1.5rem;
}

.footer-left p {
    font-size: 1.6rem;
    margin: 0;
}

.footer-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    gap: 2rem;
}

.social-links,
.page-links {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
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

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-right {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .social-links,
    .page-links {
        align-items: center;
    }

    .footer-left p {
        text-align: center;
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 1rem 0.5rem;
    }

    .footer-left p {
        font-size: 1.4rem;
    }

    .social-link,
    .page-link {
        font-size: 0.9rem;
    }
}
</style>
