import Vuex from 'vuex';
import Vue from 'vue';

import header from './modules/header'
import novelClass from './modules/novelClass';
import menuName from './modules/menuName';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        novelClass,
        menuName,
    }
})

export default store;