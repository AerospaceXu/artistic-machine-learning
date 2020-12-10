import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/nn-axis-classify',
      component: () => import('../views/NNAxisClassify.vue'),
    },
    {
      path: '/knn-pose-net-classify',
      component: () => import('../views/KNNPoseNetClassify.vue'),
    },
  ],
});

export default router;
