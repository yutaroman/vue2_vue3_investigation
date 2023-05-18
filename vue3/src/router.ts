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
    },
    {
      path: '/built-in-component',
      name: 'built-in-component',
      component: () => import('./pages/BuiltInComponent.vue')
    },
    {
      path: '/config/compiler-options/whitespace',
      name: 'config-compiler-options-whitespace',
      component: () => import('./pages/config/compilerOptions/whitespace.vue')
    }
  ]
})
