import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import List from '../pages/List.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/list',
        name: 'List',
        component: List
    }]
})