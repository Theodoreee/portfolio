<template>
    <section class="avis-panel">
        <div class="content-container">
            <h1>résultats clients</h1>
            <p>
                Découvrez ici les résultats qu'on pu faire certain de mes clients !
            </p>
        </div>
        <div class="avis-image">
        </div>
    </section>
</template>

<script>
export default {
    name: "ResultsPanel",
};
</script>

<style scoped>
.avis-panel {
    font-family: "blastered";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4a3370;
    padding: 3rem;
    color: #fff;
    min-height: 600px;
    border-radius: 0 0 70px 70px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    position: relative;
    width: 100%;
    margin-top: 3em;
    left: 0;
    right: 0;
    z-index: 1;
    box-sizing: border-box;
    overflow: hidden;
}

.content-container {
    z-index: 3;
    position: relative;
    max-width: 60%;
}

.content-container h1 {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 1rem;
}

.content-container p {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    color: #e0b0ff;
    line-height: 1.6;
    max-width: 80%;
    margin: 0 auto;
}

.avis-image {
    position: absolute;
    bottom: -200px;
    left: 0;
    width: 100%;
    height: 800px;
    background-image: url("../../public/banner_cleo.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    z-index: 1;
    opacity: 0.4;
}

@media (max-width: 768px) {
    .avis-panel {
        padding: 2rem;
        min-height: 500px;
    }

    .content-container {
        max-width: 80%;
    }

    .content-container h1 {
        font-size: 3.5rem;
    }

    .content-container p {
        font-size: 1.5rem;
    }

    .avis-image {
        height: 800px;
    }
}

@media (max-width: 480px) {
    .avis-panel {
        padding: 1.5rem;
        min-height: 400px;
    }

    .content-container h1 {
        font-size: 2.5rem;
    }

    .content-container p {
        font-size: 1.2rem;
    }

    .avis-image {
        height: 600px;
    }
}
</style>