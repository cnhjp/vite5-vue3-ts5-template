import { i18n } from "@/modules/i18n";

export const changeLocale = (locale: 'zh-CN' | 'en' | 'ja') => {
    i18n.global.locale = locale;
    localStorage.setItem('locale', locale);
}

export const useInitialLocale = () => {
    return localStorage.getItem('locale') || 'zh-CN'
}

export const useI18n = () => {
    return i18n.global
}