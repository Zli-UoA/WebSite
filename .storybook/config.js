import '../src/style/constant.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {configure} from '@storybook/vue'
import Vue from 'vue'

library.add(fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('router-link', {
    props: {
        to: {
            type: String,
            default: ''
        },
    },
    template: '<a :href="to"><slot /></a>',
})

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
