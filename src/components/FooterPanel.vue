<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Section gauche : Copyright -->
            <div class="footer-left">
                <p>© 2024 Cléo - Miniamaker</p>
            </div>

            <!-- Section Navigation avec boutons -->
            <div class="footer-nav">
                <button @click="goToAccueil" class="nav-button">Accueil</button>
                <button @click="goToPortfolio" class="nav-button">Portfolio</button>
                <button @click="goToAvis" class="nav-button">Avis</button>
                <button @click="goToContact" class="nav-button">Contact</button>
            </div>

            <!-- Section droite : Call-To-Action et Mentions légales -->
            <div class="footer-right">
                <div class="cta">
                    <button @click="goToContact" class="footer-button">Travaillons ensemble !</button>
                </div>

                <div class="availability">
                    <h3>Disponibilité</h3>
                    <p>Lundi - Vendredi : 7h - 21h</p>
                    <p>Samedi - Dimanche : 7h - 21h</p>
                </div>

                <div class="legal">
                    <a @click="goToMentionsLegales">Mentions Légales</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterPanel",
    methods: {
        goToAccueil() {
            if (this.$route.name !== "HomeView") this.$router.push("/");
        },
        goToPortfolio() {
            if (this.$route.name !== "PortfolioView") this.$router.push("/portfolio");
        },
        goToAvis() {
            if (this.$route.name !== "AvisView") this.$router.push("/avis");
        },
        goToContact() {
            if (this.$route.name !== "ContactView") this.$router.push("/contact");
        },
        goToMentionsLegales() {
            this.$router.push("/mentions-legales");
        },
        goToPrivacyPolicy() {
            this.$router.push("/politique-de-confidentialite");
        }
    }
};
</script>

<style scoped>
.footer {
    background-color: #1a1a1a;
    color: #bbb;
    padding: 2rem 1rem;
    font-family: "Arial", sans-serif;
    font-size: 0.9rem;
    text-align: center;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 🔹 Section Copyright */
.footer-left {
    flex: 1;
    text-align: left;
}

.footer-left p {
    margin: 0;
    font-size: 0.9rem;
    color: #888;
}

/* 🔹 Section Navigation */
.footer-nav {
    display: flex;
    gap: 10px;
    margin-right: 3em;
}

.nav-button {
    background-color: #2c2c2c;
    color: #e0b0ff;
    border: 1px solid #e0b0ff;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.nav-button:hover {
    background-color: #e0b0ff;
    color: #1a1a1a;
}

/* 🔹 Bouton Call-To-Action */
.footer-button {
    background-color: #e0b0ff;
    color: #1a1a1a;
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.footer-button:hover {
    background-color: #b590d0;
    transform: scale(1.05);
}

/* 🔹 Disponibilité */
.availability {
    margin-top: 1rem;
}

.availability h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #e0b0ff;
}

.availability p {
    font-size: 0.85rem;
    margin: 2px 0;
    color: #bbb;
}

/* 🔹 Mentions Légales */
.legal {
    margin-top: 1rem;
    font-size: 0.85rem;
}

.legal a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.3s ease;
}

.legal a:hover {
    color: #e0b0ff;
}

/* 🔹 Responsive Design */
@media (max-width: 1024px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-left {
        text-align: center;
        margin-bottom: 1rem;
    }

    .footer-nav {
        margin: 1rem 0;
    }

    .footer-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 1.5rem 1rem;
        font-size: 0.8rem;
    }

    .footer-nav {
        flex-direction: column;
        gap: 5px;
    }

    .nav-button {
        width: 100%;
    }

    .footer-button {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
    }

    .availability h3 {
        font-size: 0.9rem;
    }

    .legal {
        font-size: 0.8rem;
    }
}
</style>
