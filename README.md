# Rijksmuseum
Ik heb gekozen voor vue.js omdat dit een component based javascript framework is en dit daarom het meest in de buurt komt bij Angular.js. Dit project gebruikt de Rijksmuseum API om data op te halen. Op de homepage zit een filterfunctie om de getoonde collectie te verfijnen. Er worden maximaal 9 items per pagina getoond, onder aan de pagina bevinden zich een "Back" en "Next" knop om door de pagina's te bladeren. Elk collectie item bevat een knop die navigeert naar een detail pagina waar wat meer informatie wordt gegeven. De website zelf is responsive en op mobiel formaat wordt een hamburger menu getoond. De "Anagram" optie in de navigatie navigeert naar een scherm waar in de console te zien is dat een lijst met willekeurige woorden wordt omgezet naar een array met daarin arrays van woorden die een anagram van elkaar zijn. Er wordt gebruik gemaakt van axios om de get requests naar de api te doen. Voor het navigeren wordt gebruik gemaakt van vue-router.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
