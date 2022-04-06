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
  --color-dark: #2B2D42;
  --color-medium: #8D99AE;
  --color-light: #EDF2F4;
  --color-accent: #EF233C;
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
