import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import List from '../pages/List.vue'
import Book from '../pages/Book.vue'
import RankPage from '../pages/RankPage'
import Category from '../pages/Category'
import Ranking from '../pages/Ranking'
import Searching from '../pages/Searching'
import Bookcontent from '../pages/Bookcontent'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/category',
      name:'category',
      component:Category
    },
    {
       path:'/ranking' ,
       name:'ranking',
       component:Ranking
    },
    {
        path:'/searching',
        name:'searching',
        component:Searching
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path:'/book/:id',
      name: 'Book',
      component: Book,
    }, {
      path:'/book/:id/:page',
      name:'Bookcontent',
      component:Bookcontent,
    },
     {
      path: '/rank/:id',
      name: 'Rank',
      component: RankPage,
    }
  ]
})
