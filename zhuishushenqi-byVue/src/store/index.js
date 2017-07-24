import Vuex from 'vuex';
import Vue from 'vue';

import novelClass from './modules/novelClass';
import menuName from './modules/menuName';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        novelClass,
        menuName,
    }
})

export default store;