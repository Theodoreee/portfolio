<template>
    <section class="results-panel">
        <h3 class="title">RÉSULTATS CLIENTS</h3>
        <div class="results-grid">
            <div class="result-card" v-for="(result, index) in results" :key="index">
                <iframe class="youtube-video" :src="result.videoUrl" frameborder="0" allowfullscreen>
                </iframe>
                <p class="views-count">{{ result.views }} VUES</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ResultsPanel",
    data() {
        return {
            results: [
                { videoUrl: "https://www.youtube.com/embed/GEFETK2g7xY", views: "175 000" },
                { videoUrl: "https://www.youtube.com/embed/_CiwpCcPtPg", views: "33 000" },
                { videoUrl: "https://www.youtube.com/embed/k_vYxsSPQMs", views: "238 000" },
                { videoUrl: "https://www.youtube.com/embed/KVhPlxs4Nmg", views: "11 000" },
                { videoUrl: "https://www.youtube.com/embed/d1BCri2fVDs", views: "105 000" },
                { videoUrl: "https://www.youtube.com/embed/Do7F75pocMk", views: "54 000" },
                { videoUrl: "https://www.youtube.com/embed/fa4QrbXlsi0", views: "140 000" },
                { videoUrl: "https://www.youtube.com/embed/VZhhVNe6G5g", views: "24 000" },
                { videoUrl: "https://www.youtube.com/embed/6-xazmcTrZ8", views: "172 000" },
            ]
        };
    }
};
</script>

<style scoped>
.results-panel {
    font-family: "blastered";
    align-items: center;
    background-color: #242124;
    padding-bottom: 3em;
    color: #fff;
    min-height: 600px;
    position: relative;
    width: 90%;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.title {
    text-transform: lowercase;
    font-size: 3.8rem;
    letter-spacing: 6px;
    color: #E0B0FF;
    text-align: center;
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}

.result-card {
    background: #242124;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.youtube-video {
    width: 100%;
    height: 250px;
    border-radius: 8px;
}

.views-count {
    font-size: 3rem;
    margin-top: 0.5rem;
    color: #fff;
}

/* Media Queries */
@media (max-width: 1024px) {
    .results-grid {
        grid-template-columns: repeat(2, 1fr);
        /* 2 videos per row */
    }

    .youtube-video {
        height: 220px;
        /* Slightly smaller video */
    }

    .views-count {
        font-size: 2.5rem;
        /* Smaller text for views */
    }
}

@media (max-width: 768px) {
    .results-grid {
        grid-template-columns: 1fr;
        /* 1 video per row on smaller screens */
    }

    .youtube-video {
        height: 200px;
        /* Even smaller video on mobile */
    }

    .views-count {
        font-size: 2rem;
        /* Even smaller text on mobile */
    }

    .creations-title {
        font-size: 3rem;
        /* Adjust main title size for mobile */
    }

    .minia-title {
        font-size: 2.4rem;
        /* Adjust subtitle size */
    }
}

@media (max-width: 480px) {
    .views-count {
        font-size: 1.8rem;
        /* Smaller views count for extra small screens */
    }

    .creations-title {
        font-size: 2.5rem;
        /* Adjust title size */
    }

    .minia-title {
        font-size: 2rem;
        /* Adjust subtitle size */
    }
}
</style>
