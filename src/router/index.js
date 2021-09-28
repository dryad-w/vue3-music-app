import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend.vue'
import Singer from '@/views/singer.vue'
import TopList from '@/views/top-list.vue'
import Search from '@/views/search.vue'
import SingerDetail from '@/views/singer-detail.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
