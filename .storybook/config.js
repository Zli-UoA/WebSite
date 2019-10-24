import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {configure} from '@storybook/vue'
import Vue from 'vue'

library.add(fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
