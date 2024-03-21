import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/statistics",
        name: "Statistics",
        component: () => import("@/pages/statistics/index.vue"),
        meta: {
            title: '统计'
        }
    }
]

export default routes;