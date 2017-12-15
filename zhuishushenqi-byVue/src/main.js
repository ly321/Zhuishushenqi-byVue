// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

const options={  
//   duration: '0.1',              //转场动画时长，默认为0.3，单位秒   
//   firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false  
//   firstEntryDuration: '.6',     //首次进入应用时的渐现动画时长，默认为.6  
//   forwardAnim: 'fadeIn',   //前进动画，默认为fadeInRight  
//   backAnim: 'fadeOut',       //后退动画，默认为fedeInLeft   
// //   sameDepthDisable: false,      //url深度相同时禁用动画，默认为false   
//   tabs: [{
//           path:'/'
//       },{
//           path:'/category'
//       },{
//           path:'/ranking'
//       },{
//           path:'searching'
//       }],                       //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画  
//   tabsDisable: true,           //值为true时，tabs间的转场没有动画，默认为false  
  shadow:false,                  //值为false，转场时没有阴影的层次效果
  disable: true,               //禁用转场动画，默认为false，嵌套路由默认为true  
}  

Vue.use(vueg, router,options)

Vue.use(VueTouch, {name: 'v-touch'})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})