import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import type { UserStore } from '@/store/modules/user'
import { changeDocumentTitle } from '../utils'
import { router } from './router'

/**
 * 检查登录状态，未登录则跳转到登录页
 * @param to 
 * @param userStore 
 * @param next 
 * @returns 
 */
const checkLogin = (to: RouteLocationNormalized, userStore: UserStore, next: NavigationGuardNext) => {
    if (to.meta?.requiresAuth && !userStore.logged) {
        next({ name: 'Login' });
        return false
    }
    return true;
}

/**
 * 修改页面标题
 * @param to 
 */
const changeTitle = (to: RouteLocationNormalized) => {
    if (to.meta?.title) {
        changeDocumentTitle(to.meta.title);
    }
    return true;
}

router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const userStore = useUserStore();
    if (!checkLogin(to, userStore, next)) return;
    if (!changeTitle(to)) return;
    next();
})
