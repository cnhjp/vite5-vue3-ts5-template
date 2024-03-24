import type { RouteRecordRaw } from "vue-router";
import { default as constRoutes } from "./const";

const moduleRoutes: RouteRecordRaw[] = []
// 读取modules下的所有路由
const modules = import.meta.glob('./modules/*.ts', { eager: true })
for (const key in modules) {
    const module = modules[key]
    const moduleDefalt = (module as any).default
    if (Array.isArray(moduleDefalt)) {
        moduleRoutes.push(...moduleDefalt)
    } else if (typeof moduleDefalt === 'object') {
        moduleRoutes.push(moduleDefalt)
    }
}


export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...moduleRoutes,
        ...constRoutes,
    ],
});
