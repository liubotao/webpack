import Vue from 'vue';
import ElementUI from 'element-ui';
import 'font-awesome/css/font-awesome.css';
import '@cloudux/noah-theme/lib/index.css';
import App from './App';
import Store from './store';
import router from './routers';
import Utils from './utils';
// import './element-variables.scss';

Vue.use(ElementUI);
Vue.use(Utils);

/* eslint-disable no-new */
/* eslint-disable no-undef */
window.vm = new Vue({
  el: '#app',
  store: Store,
  router,
  render: h => h(App),
});

