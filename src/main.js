import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from './utils/httpRequest';
import * as echarts from "echarts";

import './common/iviewUI';
import './common/theme.less';
import { i18n } from './common/i18n/i18n';
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard)
Vue.prototype.$httpRequest = http.request;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.locale = () => {};
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");