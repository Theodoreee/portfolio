<template>
    <div class="contact-options-panel">
        <h2>Contactez-moi</h2>

        <section class="how-i-work-panel">
            <div class="panel-container">
                <div class="content">
                    <h3>Restons connectés</h3>
                    <p>
                        Vous avez une question, un projet ou besoin d'une collaboration ? N'hésitez pas à me
                        contacter par votre moyen préféré. Je suis disponible et prêt à vous répondre rapidement
                        pour discuter de vos besoins ! On pourra organiser un petit call et voir ensemble pour une
                        collaboration.
                    </p>
                </div>
            </div>
        </section>

        <ul class="contact-list">
            <li>
                <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                    <img src="../../public/gmail.png" alt="Email" class="icon" />
                    Par Email
                </a>
            </li>
            <li>
                <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer">
                    <img src="../../public/discord.png" alt="Discord" class="icon" />
                    Sur Discord
                </a>
            </li>
            <li>
                <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
                    <img src="../../public/instagram.png" alt="Instagram" class="icon" />
                    Sur Instagram
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ContactOptionsPanel",
};
</script>

<style scoped>
.contact-options-panel {
    font-family: "blastered";
    text-align: center;
    padding: 3rem;
    background-color: #242124;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-options-panel h2 {
    font-size: 3.8rem;
    letter-spacing: 6px;
    margin-top: 1.4em;
    margin-bottom: 1.4em;
    color: #E0B0FF;
    text-align: center;
}

.contact-list {
    margin-top: 3em;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 70px;
}

.contact-list li {
    display: flex;
    align-items: center;
    gap: 10px;
}

.contact-list a {
    text-transform: uppercase;
    text-decoration: none;
    color: #E0B0FF;
    font-size: 3.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s;
}

.contact-list a:hover {
    color: #ad87c5;
}

.icon {
    width: 50px;
    height: 50px;
}

.how-i-work-panel {
    font-family: "blastered";
    text-transform: uppercase;
    margin: 1rem auto;
    padding-bottom: 2em;
    background-color: #3b373b;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 80%;
}

.panel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content h3 {
    font-size: 4rem;
    color: #E0B0FF;
}

.content p {
    font-size: 1.6rem;
    color: #E0B0FF;
    line-height: 1.6;
    letter-spacing: 2px;
    width: 80%;
    margin: 0 auto;
}

/* Responsiveness */

/* Pour les tablettes */
@media (max-width: 768px) {
    .contact-options-panel {
        padding: 2rem;
    }

    .contact-options-panel h2 {
        font-size: 3rem;
        letter-spacing: 4px;
    }

    .contact-list {
        gap: 40px;
        /* Réduit l'espacement entre les options */
    }

    .contact-list a {
        font-size: 2.5rem;
        /* Réduction de la taille des liens */
    }

    .icon {
        width: 40px;
        height: 40px;
        /* Taille réduite des icônes */
    }

    .how-i-work-panel {
        width: 90%;
        /* Augmente la largeur disponible */
    }

    .content h3 {
        font-size: 3.2rem;
        /* Taille du sous-titre ajustée */
    }

    .content p {
        font-size: 1.4rem;
        /* Réduction de la taille du texte */
        line-height: 1.5;
        /* Ajustement de l'interligne */
    }
}

/* Pour les téléphones */
@media (max-width: 480px) {
    .contact-options-panel {
        padding: 1.5rem;
    }

    .contact-options-panel h2 {
        font-size: 2.5rem;
        /* Réduction supplémentaire de la taille du titre */
        letter-spacing: 2px;
    }

    .contact-list {
        flex-direction: column;
        /* Options empilées verticalement */
        gap: 20px;
    }

    .contact-list a {
        font-size: 2rem;
        /* Taille encore réduite pour les liens */
    }

    .icon {
        width: 30px;
        height: 30px;
        /* Taille plus petite pour les icônes */
    }

    .how-i-work-panel {
        width: 95%;
        /* Prend presque toute la largeur de l’écran */
    }

    .content h3 {
        font-size: 2.8rem;
        /* Taille du sous-titre réduite pour les petits écrans */
    }

    .content p {
        font-size: 1.2rem;
        /* Réduction supplémentaire pour le texte */
        line-height: 1.4;
        /* Interligne ajustée */
        letter-spacing: 1.5px;
    }
}
</style>