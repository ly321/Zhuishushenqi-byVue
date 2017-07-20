import Vuex from 'vuex';
import Vue from 'vue';

import novelClass from './modules/novelClass';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        novelClass,

    }
})

export default store;