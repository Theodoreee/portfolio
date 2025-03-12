<template>
    <section class="niches-page">
        <div class="niches-container">
            <div class="text-left">
                <div class="content">
                    <h3>niches</h3>
                    <h2>Les niches dans lesquelles je suis à l'aise !</h2>
                    <p>
                        Voici quelques domaines dans lesquels je suis compétent et où je peux apporter de la valeur à
                        vos miniatures.
                    </p>
                </div>
            </div>

            <div class="bubbles-right">
                <div class="bubble bubble-1">Business</div>
                <div class="bubble bubble-2">Divert.</div>
                <div class="bubble bubble-3">Gaming</div>
                <div class="bubble bubble-4">IRL</div>
                <div class="bubble bubble-5">Story</div>
                <div class="bubble bubble-6">Dev Perso</div>
            </div>
        </div>
    </section>
    <div class="button-container">
        <button @click="goToContact" class="contact-button">CONTACT</button>
    </div>
</template>

<script>
export default {
    name: "NichesPage",
};
</script>

<style scoped>
.niches-page {
    font-family: "blastered";
    text-transform: uppercase;
    margin: 1rem auto;
    background-color: #3b373b;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 70%;
}

.niches-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
}

.text-left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-left h3 {
    text-transform: lowercase;
    font-size: 1.6em;
    color: #E0B0FF;
}

.text-left h2 {
    font-size: 4rem;
    color: #E0B0FF;
    margin-bottom: 1rem;
}

.text-left p {
    font-size: 1.6rem;
    color: #E0B0FF;
    line-height: 1.6;
    letter-spacing: 2px;
}

.bubbles-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    gap: 20px;
    width: 45%;
    position: relative;
    max-width: 500px;
}

.bubble {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    background: linear-gradient(135deg, #c979ff, #E0B0FF);
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: float 6s infinite ease-in-out alternate;
}

.bubble-1 {
    animation: float 6s infinite ease-in-out alternate;
    animation-delay: 0s;
}

.bubble-2 {
    animation: float 7s infinite ease-in-out alternate;
    animation-delay: 0.5s;
}

.bubble-3 {
    animation: float 6.5s infinite ease-in-out alternate;
    animation-delay: 1s;
}

.bubble-4 {
    animation: float 5.8s infinite ease-in-out alternate;
    animation-delay: 1.5s;
}

.bubble-5 {
    animation: float 7.2s infinite ease-in-out alternate;
    animation-delay: 2s;
}

.bubble-6 {
    animation: float 6.3s infinite ease-in-out alternate;
    animation-delay: 2.5s;
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

.bubble:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(160, 68, 255, 0.5);
}

/* Effet de flottement */
@keyframes float {
    0% {
        transform: translateY(0px) translateX(-5px) rotate(0deg);
    }

    25% {
        transform: translateY(-15px) translateX(0px) rotate(2deg);
    }

    50% {
        transform: translateY(0px) translateX(5px) rotate(0deg);
    }

    75% {
        transform: translateY(15px) translateX(0px) rotate(-2deg);
    }

    100% {
        transform: translateY(0px) translateX(-5px) rotate(0deg);
    }
}


/* Responsive Design */
@media (max-width: 1024px) {
    .niches-container {
        flex-direction: column;
        text-align: center;
    }

    .text-left {
        width: 90%;
        text-align: center;
    }

    .bubbles-right {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        margin-top: 2rem;
    }

    .bubble {
        width: 120px;
        height: 120px;
        font-size: 1.3rem;
    }
}

@media (max-width: 768px) {
    .bubbles-right {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .bubble {
        width: 110px;
        height: 110px;
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .text-left h2 {
        font-size: 2.5rem;
    }

    .text-left p {
        font-size: 1.2rem;
        line-height: 1.4;
    }

    .bubbles-right {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
    }

    .bubble {
        width: 90px;
        height: 90px;
        font-size: 1rem;
    }
}
</style>
