// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from 'axios';
//引入vuex
import Vuex from 'vuex';
//引入element-ui
import ElementUI from 'element-ui';

Vue.config.productionTip = false;

//创建过滤器
Vue.filter('formatter',function (value) {
  if(value== true){
    return '启用'
  }
  return '停用'
})

//使用vuex
Vue.use(Vuex);
//使用element-ui
Vue.use(ElementUI);
//创建一个vuex的实例
const store = new Vuex.Store({
  //存放数据的地方
  state:{

  },
  //getter也是存放数据的地方但这里跟state的区别主要在于getter中用于计算后的结果
  getter:{},
  //用于改变状态的地方
  mutations:{},
  //也是用于改变状态的地方 但是通常用于一部改变
  action:{},
  module:{},
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,//Vue-router
  store,//vuex
  components: { App },
  template: '<App/>',
  render: h => h(App)
})