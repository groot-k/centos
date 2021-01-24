import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

Vue.use(Router);
import routerConfig from './src/route.js';

new Vue({
    el: '#app',
    router: new Router(routerConfig),
    render(h) {
        return h('App');
    },
    components: {
        App
    }
})