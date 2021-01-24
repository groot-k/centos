import Home from './views/home.vue';

export default {
    routes: [
        {
            path: '/',
            component: Home

        },
        {
            path: '*',
            redirect: '/'
        }
    ]
}