import {configure} from '@storybook/vue'

import Vue from 'vue'

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
