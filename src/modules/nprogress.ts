import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import router from '@/router';

export const install: CustomModule = (app) => {
    app.config.globalProperties.$nprogress = NProgress;

    router.beforeEach((to, from) => {
        if (to.path === from.path) return;
        NProgress.start();
    })

    router.afterEach(() => {
        NProgress.done();
    })

}