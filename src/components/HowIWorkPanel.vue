<template>
    <section class="how-i-work-panel">
        <div class="panel-container">
            <div class="left-content">
                <div class="content">
                    <h3>mes services</h3>
                    <h2>Créations de miniatures impactantes et personnalisées !</h2>
                    <p>
                        Je vous propose de créer pour vous une miniature impactante et personnalisée pour votre chaîne
                        YouTube. Cela vous permettra de vous professionnaliser et de toucher une plus large audience !
                    </p>
                </div>
            </div>
            <div class="right-content">
                <ul>
                    <li ref="listItem1">Discussion autour du projet</li>
                    <li ref="listItem2">Création de prototypes</li>
                    <li ref="listItem3">Révisions basées sur les retours</li>
                    <li ref="listItem4">Livraison et suivi post-projet</li>
                </ul>
            </div>
        </div>
    </section>
    <div class="button-container">
        <button @click="goToContact" class="contact-button">CONTACT</button>
    </div>
</template>

<script>
export default {
    name: "HowIWorkPanel",
    mounted() {
        const listItems = [this.$refs.listItem1, this.$refs.listItem2, this.$refs.listItem3, this.$refs.listItem4];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.5 }
        );

        listItems.forEach((item) => observer.observe(item));
    },
    methods: {
        goToContact() {
            this.$router.push("/contact");
        }
    },
};
</script>

<style scoped>
.how-i-work-panel {
    font-family: "blastered";
    text-transform: uppercase;
    margin: 1rem auto;
    background-color: #3b373b;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 90%;
}

.panel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content {
    margin-left: 4em;
}

.left-content {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.left-content h3 {
    text-transform: lowercase;
    font-size: 1.6em;
    color: #E0B0FF;
}

.left-content h2 {
    font-size: 4rem;
    color: #E0B0FF;
}

.left-content p {
    font-size: 1.6rem;
    color: #E0B0FF;
    line-height: 1.6;
    letter-spacing: 2px;
}

.right-content {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.right-content ul {
    list-style-type: none;
    padding: 0;
}

.right-content li {
    font-size: 4rem;
    color: #E0B0FF;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateX(0);
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

.right-content li::before {
    content: "• ";
    color: #ffffff;
    font-weight: bold;
}

.right-content li.animate:nth-child(odd) {
    animation-name: slide-from-right;
}

.right-content li.animate:nth-child(even) {
    animation-name: slide-from-left;
}

@keyframes slide-from-right {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-from-left {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.right-content li:last-child {
    margin-bottom: 0;
}

.button-container {
    text-align: center;
    margin-bottom: 4em;
}

.contact-button {
    font-family: "blastered";
    background-color: #E0B0FF;
    color: #242124;
    font-size: 2rem;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 2em;
}

.contact-button:hover {
    background-color: #b590d0;
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .panel-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .left-content,
    .right-content {
        width: 100%;
        margin: 1rem 0;
        text-align: center;
    }

    .left-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: -3.5em;
    }

    .left-content h2 {
        font-size: 2.8rem;
        margin-bottom: 0.8rem;
    }

    .left-content p {
        font-size: 1.5rem;
        line-height: 1.6;
    }

    .right-content ul {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
    }

    .right-content li {
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }
}

@media (max-width: 480px) {
    .panel-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .left-content,
    .right-content {
        width: 100%;
        margin: 1rem 0;
        text-align: center;
    }

    .left-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: -3.5em;
    }

    .left-content h2 {
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
    }

    .left-content p {
        font-size: 1.3rem;
        line-height: 1.4;
    }

    .right-content ul {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
    }

    .right-content li {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
}
</style>
