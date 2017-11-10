import Vuex from 'vuex';
import Vue from 'vue';

import header from './modules/header'
import novelClass from './modules/novelClass';
import menuName from './modules/menuName';
import rank from './modules/rank'
import catalogList from './modules/catalogList'
import listTwo from './modules/listTwo'
import bookview from './modules/bookview'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        novelClass,
        menuName,
        rank,
        catalogList,
        listTwo,
        bookview
    }
})

export default store;