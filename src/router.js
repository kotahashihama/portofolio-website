import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about-me",
      name: "about-me",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about-me" */ "./views/AboutMe.vue")
    },
    {
      path: "/skills",
      name: "skills",
      component: () =>
        import(/* webpackChunkName: "skills" */ "./views/Skills.vue")
    },
    {
      path: "/works",
      name: "works",
      component: () =>
        import(/* webpackChunkName: "works" */ "./views/Works.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    }
  ]
});
