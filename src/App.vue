<template>
  <navigation/>
  <router-view></router-view>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
:root {
  --color-dark: #2B2118;
  --color-medium: #B3B6B7;
  --color-light: #F7F3E3;
  --color-accent: #AF9164;
}

#app {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

*,
::before,
::after {
  margin: 0;
  box-sizing: border-box;
}
</style>
