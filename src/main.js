import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './components/Homepage.vue';
import Detailpage from './components/Detail.vue';
import Anagram from './components/Anagram.vue';

const routes = [
    { path: '/', component: Homepage},
    { path: '/details/:id', component: Detailpage},
    { path: '/anagram', component: Anagram},
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);

app.mount('#app');
