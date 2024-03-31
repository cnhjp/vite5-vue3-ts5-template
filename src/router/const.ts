import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/home/index.vue"),
        meta: { i18nTitlte: 'route.home' }
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: "/user/:userId?",
        name: "User",
        component: () => import("@/pages/user/index.vue"),
        meta: { i18nTitlte: 'route.user', requiresAuth: true }
    },
    {
        path: '/test',
        redirect: '/test/index',
        component: () => import('@/layouts'),
        children: [
            {
                path: 'index',
                name: 'Test',
                component: () => import('@/pages/test/index.vue'),
                meta: { i18nTitle: 'route.test' }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
        meta: { i18nTitle: 'route.login' }
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