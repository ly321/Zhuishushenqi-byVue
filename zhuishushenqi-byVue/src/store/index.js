import Vuex from 'vuex';
import Vue from 'vue';

import header from './modules/header'
import novelClass from './modules/novelClass';

import rank from './modules/rank'
// import catalogList from './modules/catalogList'
import listTwo from './modules/listTwo'
import booklist from './modules/booklist'
import book from './modules/Book'
import searching from './modules/searching'
import bookshelf from './modules/bookshelf'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        novelClass,

        rank,
        // catalogList,
        listTwo,
        booklist,
        book,
        searching,
        bookshelf
    }
})

export default store;