import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/statistics",
        name: "Statistics",
        component: () => import("@/pages/statistics/index.vue"),
        meta: {
            i18nTitlte: 'route.statistics',
        }
    }
]

export default routes;