import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/home/index.vue"),
        meta: { title: '首页' }
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: "/user/:userId?",
        name: "User",
        component: () => import("@/pages/user/index.vue"),
        meta: { title: '用户', requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
        meta: { title: '登录' }
    }
];

const errorRoutes: RouteRecordRaw[] = [
    {
        path: "/error",
        name: "Error",
        component: () => import("@/pages/error/500.vue"),
        meta: { title: '500' }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/pages/error/404.vue"),
        meta: { title: '404' }
    },
    {
        path: "/:pathMatch(.*)",
        name: "NotFound",
        component: () => import("@/pages/error/404.vue"),
        meta: { title: '404' }
    }
]

export default [...routes, ...errorRoutes];