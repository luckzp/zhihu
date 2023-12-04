import { createRouter, createWebHistory  } from "vue-router";
/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes = [
  /**
   * 首页
   */
  {
    path: "/",
    name:"Home",
    component: () => import('../views/home/index.vue')
  },
  {
    path: "/hello",
    name:"Hello",
    component: () => import('../views/hello/index.vue')
  },
  {
    path: "/todo",
    name:"Todo",
    component: () => import('../views/todo/index.vue')
  },
//   /**
//    * 子路由示例
//    */
//   {
//     path: '/foo',
//     name: 'foo',
//     component: () => import('@/components/TransferStation.vue'),
//     meta: {
//       title: 'Foo',
//     },
//     redirect: {
//       name: 'bar',
//     },
//     children: [
//       {
//         path: 'bar',
//         name: 'bar',
//         component: () => import('@/views/foo/bar.vue'),
//         meta: {
//           title: 'Bar',
//         },
//       },
//     ],
//   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
