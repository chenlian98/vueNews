import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//element-ui组件
import './components/element-components'
import 'element-ui/lib/theme-chalk/index.css';

//normalize --重置样式
import 'normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
