// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Tasks from '../views/Tasks.vue'; // Tasks page
import Login from '../views/Login.vue';   // Login page
import Register from '../views/Register.vue'; // Register page

const routes = [
  {
    path: '/',
    redirect: '/register',
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
