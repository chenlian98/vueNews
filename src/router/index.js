import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about/",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("../views/Articles")
  },
  {
    path: '/articles/:id',
    name: 'acticle-Show',
    component: () => import('../views/ArticleShow')
  },
  {
    path: '/article/create',
    name: 'article-create',
    component: () => import('../views/ArticleCreate')
  },
  {
    path: '/article/:id/edit',
    name: 'article-edit',
    component: () => import('../views/ArticleEdit')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
