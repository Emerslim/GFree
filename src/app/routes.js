import Home from './pages/home.vue';
import About from './pages/about.vue';
import NotFound from './pages/notFound.vue';

export default [
    { 
        path: '/', 
        component: Home, 
        props: true 
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '*',
        component: NotFound
    }
]