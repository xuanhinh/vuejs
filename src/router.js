import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingalPost from './views/SingalPost.vue'
import ArchivePage from './views/ArchivePage.vue'
import FAQs from './views/FAQs'
import FAQs_single from './views/FAQs_single'
import Contact from './views/Contact'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/Home',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/SingalPost',
      name: 'singalpost',
      component: SingalPost
    },
    {
      path: '/ArchivePage',
      name: 'archivepage',
      component: ArchivePage
    },
    {
      path: '/FAQs',
      name: 'faqs',
      component: FAQs
    },
    {
      path: '/FAQs_single',
      name: 'faqs_single',
      component: FAQs_single
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    }
  ]
})
