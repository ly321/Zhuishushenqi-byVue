import Vuex from 'vuex';
import Vue from 'vue';

import header from './modules/header'
import novelClass from './modules/novelClass';
import menuName from './modules/menuName';
import rank from './modules/rank'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        novelClass,
        menuName,
        rank,
    }
})

export default store;