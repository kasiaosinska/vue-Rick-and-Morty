import Vue from 'vue'
import Router from 'vue-router'
import Episodes from './views/Episodes.vue'
import Quiz from './views/Quiz.vue'
import Episode from './views/Episode.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Episodes',
      component: Episodes
    },
    {
      path: '/quiz',
      name: 'Quiz',
      // component: () => import(/* webpackChunkName: "Quiz" */ Quiz)
      component: Quiz
    },
    {
      path: '/episode/:id',
      name: 'Episode',
      component: Episode,
      props: true,
    }
  ]
})
