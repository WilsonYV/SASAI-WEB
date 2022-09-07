import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);
import Router, { RouteConfig } from 'vue-router';

const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
const Dashboard = () => import('@/core/Contratos/Dashboard/Dashboard.vue');
import account from '@/router/account';
import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';

Vue.use(Router);

// prettier-ignore
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('@/core/Contratos/Dashboard/Dashboard.vue')
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('@/core/Contratos/Inicio/Inicio.vue')
    },
    {
      path: '/PersonasJ',
      name: 'PersonasJ',
      component: () => import('@/core/Contratos/Personas J/PersonasJ.vue')
    }, 
    {
      path: '/AltaPF',
      name: 'AltaPF',
      component: () => import('@/core/Contratos/AltaPF/AltaPF.vue')
    },        
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    ...account,
    ...admin,
    entities,
    ...pages
  ]
});

export default router;
