import Vue from 'vue';
import App from './app.vue';
import Routes from './routes';
import VueRouter from 'vue-router';
import ConfigHelper from './plugins/configHelper';

Vue.use(VueRouter)
Vue.use(ConfigHelper);

var store = {
    state: {
    }
}

const router = new VueRouter({
    mode: 'history',
    routes: Routes
})

var vue = new Vue({
    el: '#app',
    router,
    data: store,
    render: h => h(App)
});

Window.App = vue;
vue.$mount('#app');
