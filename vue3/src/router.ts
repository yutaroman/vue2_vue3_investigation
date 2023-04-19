import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/attribute-coercion',
      name: 'attribute-coercion',
      component: () => import('./pages/AttributeCoercion.vue')
    }
  ]
})
