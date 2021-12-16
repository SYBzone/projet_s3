import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from "@/components/Accueil";
import Sophrologie from "@/components/Sophrologie";
import RDV from "@/components/RDV";
import Blog from "@/components/Blog";
import Create_citation from "@/components/Create_citation";
import Hypnose from "@/components/Hypnose";
import Create_user from "@/components/composants/Create_user";
import Message from "@/components/composants/Message";
import RDV2 from "@/components/RDV2";
import Presentation from "@/components/Presentation";
import Bebe from "@/components/Bebe";
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/sophrologie',
    name: 'Sophrologie',
    component: Sophrologie
  },
  {
    path: '/rendez-vous',
    name: 'RDV',
    component: RDV
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/create_citation',
    name: 'Create_citation',
    component: Create_citation
  },
  {
    path: '/hypnose',
    name: 'Hypnose',
    component: Hypnose
  },
  {
    path: '/create_user',
    name: 'Create_user',
    component: Create_user
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/rdv2',
    name: 'RDV2',
    component: RDV2
  },

  {
    path: '/bebe',
    name: 'Bebe',
    component: Bebe
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: Presentation
  },



]


const router = new VueRouter({
  routes,


})

export default router
