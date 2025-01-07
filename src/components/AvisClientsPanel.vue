<template>
    <section class="reviews-panel">
        <h2 class="reviews-title">Ce qu'ils en pensent</h2>
        <div class="reviews-carousel">
            <!-- Flèches -->
            <button class="arrow left" @click="prevReview">◃</button>
            <div class="review">
                <transition name="fade">
                    <div key="currentReview" class="review-content">
                        <h3 class="review-name">{{ currentReview.name }}</h3>
                        <p class="review-comment">{{ currentReview.comment }}</p>
                    </div>
                </transition>
            </div>
            <button class="arrow right" @click="nextReview">▹</button>
        </div>
    </section>
</template>


<script>
export default {
    name: "CustomerReviewsPanel",
    data() {
        return {
            currentIndex: 0,
            reviews: [
                { name: "Loris POKA", comment: "3ème fois que je fais appel à Cléo pour mes minias et je suis très satisfait. Très réactif, une bonne créativité et des minias très qualitatives. Je recommande !" },
                { name: "Linck", comment: "Sublime, vraiment le miniamaker le plus efficace avec lequel j'ai travaillé, merci beaucoup !" },
                { name: "Emté", comment: "Encore un énorme merci à celui qui me rend plus beau sur YouTube. Masterclass !" },
                { name: "AnakinWTR", comment: "Incroyable, rendu vite et insane !" },
                { name: "Lok", comment: "Masterclass, il m'a fait ça en quelques dizaines de minutes dès que je lui ai demandé et c'est pile poil ce que j'avais demandé, gros gg mec !" },
            ],
        };
    },
    computed: {
        currentReview() {
            return this.reviews[this.currentIndex];
        },
    },
    methods: {
        nextReview() {
            this.currentIndex =
                (this.currentIndex + 1) % this.reviews.length;
        },
        prevReview() {
            this.currentIndex =
                (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
        },
    },
};
</script>

<style scoped>
.reviews-panel {
    font-family: "blastered";
    background-color: #242124;
    padding: 3rem;
    border-radius: 16px;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    position: relative;
    left: 0;
    right: 0;
    z-index: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.reviews-title {
    text-transform: uppercase;
    font-size: 3.8rem;
    letter-spacing: 6px;
    margin-top: 1.4em;
    margin-bottom: 1.4em;
    color: #E0B0FF;
}

.reviews-carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.review {
    width: 500px;
    height: 350px;
    background-color: #3b373b;
    border-radius: 8px;
    padding: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.review-content {
    color: white;
    transition: opacity 0.5s ease-in-out;
}

.review-name {
    font-size: 3rem;
    font-weight: bold;
    color: #E0B0FF;
}

.review-comment {
    text-transform: uppercase;
    font-size: 2rem;
    color: white;
    letter-spacing: 1.5px;
    margin-left: 1em;
    margin-right: 1em;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #E0B0FF;
    color: white;
    font-size: 1.5rem;
    border: none;
    border-radius: 50%;
    padding: 0.5rem 1rem;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.arrow:hover {
    background-color: #bf95db;
    transform: translateY(-50%) scale(1.1);
}

.arrow.left {
    left: -2rem;
}

.arrow.right {
    right: -2rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 768px) {
    .reviews-panel {
        padding: 2rem;
        max-width: 90%;
    }

    .reviews-title {
        font-size: 3rem;
        letter-spacing: 4px;
    }

    .review {
        width: 400px;
        height: 300px;
    }

    .review-name {
        font-size: 2.5rem;
    }

    .review-comment {
        font-size: 1.6rem;
    }

    .arrow {
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
    }
}

@media (max-width: 480px) {
    .reviews-panel {
        padding: 1.5rem;
        max-width: 100%;
    }

    .reviews-title {
        font-size: 2.5rem;
        letter-spacing: 3px;
    }

    .review {
        width: 300px;
        height: 250px;
        padding: 1rem;
    }

    .review-name {
        font-size: 2rem;
    }

    .review-comment {
        font-size: 1.2rem;
        margin: 0;
    }

    .arrow {
        font-size: 1rem;
        padding: 0.3rem 0.6rem;
    }

    .arrow.left {
        left: -1rem;
    }

    .arrow.right {
        right: -1rem;
    }
}
</style>
