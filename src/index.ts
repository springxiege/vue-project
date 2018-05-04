// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from "vue-router"
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
/* eslint-disable no-new */
const vm = new Vue({
    store: store(),
    router: router('history'),
    render(h) {
        return h(App)
    }
})

vm.$mount('#app')