import { i18n } from "@/modules/i18n";
import { useLocalStorage } from "@vueuse/core";
import { createI18n } from "vue-i18n";
import { router, changeTitle } from "@/router";

interface I18nGlobal {
    t: (...args: any[]) => string;
    locale: any
}

type I18nReturnType = ReturnType<typeof createI18n>;

type UseI18nReturn = I18nGlobal & I18nReturnType;

const state = 'locale'
const storage = useLocalStorage(state, 'zh-CN')

export const changeLocale = (locale: string) => {
    i18n.global.locale = locale;
    storage.value = locale;
    // 更新当前页面的标题
    const { currentRoute } = router;
    changeTitle(currentRoute.value);
}

export const useInitialLocale = () => {
    return storage.value
}

export const useI18n = (): UseI18nReturn => {
    return i18n.global as any as UseI18nReturn
}