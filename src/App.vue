<template>
  <div id="app">
    <mainVue/>
  </div>
</template>

<script>
import mainVue from './components/main.vue'

export default {
  name: "App",
  components: {
    mainVue
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      *{
        font-family: 'Inter', sans-serif;
      }
</style>
