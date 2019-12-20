import Vue from "vue";
import VueRouter from "vue-router";

import Root from "../pages/Root.vue";
import Members from "../pages/Members.vue";
import Member from "../pages/Member.vue";
import Events from "../pages/Events.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Root
  },
  {
    path: "/members",
    component: Members
  },
  {
    path: "/member/:id",
    component: Member
  },
  {
    path: "/events",
    component: Events
  },
  {
    path: "*",
    component: { render: h => h("div", {}, "Not Found") }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
