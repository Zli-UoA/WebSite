import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlobe, faChevronCircleDown, faChevronLeft, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './style/constant.css';

library.add(
  faGlobe,
  faTwitter,
  faGithub,
  faChevronCircleDown,
  faChevronRight,
  faChevronLeft,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
