import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import type { UserStore } from '@/store/modules/user'
import { router } from './router'

/**
 * 检查登录状态，未登录则跳转到登录页
 * @param to 
 * @param userStore 
 * @param next 
 * @returns
 */
export const checkLogin = (to: RouteLocationNormalized, userStore: UserStore, next: NavigationGuardNext) => {
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
export const changeTitle = (to: RouteLocationNormalized) => {
    const title = useTitle()
    if (to.meta?.title) {
        title.value = to.meta.title;
    } else if (to.meta?.i18nTitle) {
        const { t } = useI18n();
        title.value = t(to.meta.i18nTitle);
    }
    return true;
}

router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const userStore = useUserStore();
    if (!checkLogin(to, userStore, next)) return;
    if (!changeTitle(to)) return;
    next();
})
