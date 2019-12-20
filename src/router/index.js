import Vue from 'vue';
import VueRouter from 'vue-router';

import Root from '../pages/Root.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Root,
  },
  {
    path: '/members',
    component: {
      render: h => h('div', {}, 'TODO: members'),
    },
  },
  {
    path: '/member/:id',
    component: { render: h => h('div', {}, 'TODO: member') },
  },
  {
    path: '/events',
    component: { render: h => h('div', {}, 'TODO: events') },
  },
  {
    path: '/event/:id',
    component: { render: h => h('div', {}, 'TODO: event') },
  },
  {
    path: '*',
    component: { render: h => h('div', {}, 'Not Found') },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
