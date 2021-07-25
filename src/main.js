import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from './utils/httpRequest';

// import { locale } from 'iview';
// import en from 'iview/dist/locale/en-US';
// import zh from 'iview/dist/locale/zh-CN';

import './common/iviewUI';
import './common/theme.less';
// import 'iview/dist/styles/iview.css';
Vue.prototype.$httpRequest = http.request;
Vue.config.productionTip = false;
// Vue.use(iView);

// locale(en);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
