<template>
  <div id="app">
    <HeaderPanel />
    <router-view />
  </div>
</template>

<script>
import HeaderPanel from "./components/HeaderPanel.vue";
import { nextTick } from "vue"; // Importation de nextTick

export default {
  components: {
    HeaderPanel,
  },
  mounted() {
    nextTick(() => {
      // Force le défilement vers le haut à l'aide de document.documentElement.scrollTop
      document.documentElement.scrollTop = 0;
    });
  },
  watch: {
    // Utilise un watcher pour écouter les changements de route
    $route() {
      nextTick(() => {
        // Force le défilement vers le haut lors du changement de page
        document.body.scrollTop = 0;
      });
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

@font-face {
  font-family: 'Blastered';
  src: url('@/assets/fonts/blastered.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  margin-top: 5rem;
  background-color: #242124;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
