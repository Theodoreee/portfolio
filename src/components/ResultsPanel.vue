<template>
    <section class="results-panel">
        <h2 class="creations-title">MES CRÉATIONS</h2>
        <h3 class="minia-title">RÉSULTATS CLIENTS</h3>
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
                { videoUrl: "https://www.youtube.com/embed/GEFETK2g7xY", views: "148 000" },
                { videoUrl: "https://www.youtube.com/embed/_CiwpCcPtPg", views: "33 000" },
                { videoUrl: "https://www.youtube.com/embed/k_vYxsSPQMs", views: "187 000" },
                { videoUrl: "https://www.youtube.com/embed/KVhPlxs4Nmg", views: "11 000" },
                { videoUrl: "https://www.youtube.com/embed/d1BCri2fVDs", views: "105 000" },
                { videoUrl: "https://www.youtube.com/embed/Do7F75pocMk", views: "51 000" },
                { videoUrl: "https://www.youtube.com/embed/fa4QrbXlsi0", views: "148 000" },
                { videoUrl: "https://www.youtube.com/embed/VZhhVNe6G5g", views: "24 000" },
                { videoUrl: "https://www.youtube.com/embed/6-xazmcTrZ8", views: "55 000" },
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


.creations-title {
    text-transform: lowercase;
    font-size: 3.8rem;
    letter-spacing: 6px;
    color: #E0B0FF;
    text-align: center;
}


.minia-title {
    font-size: 2.8rem;
    letter-spacing: 6px;
    margin-bottom: 1.4em;
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
</style>
