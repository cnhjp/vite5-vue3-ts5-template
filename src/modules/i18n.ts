import { createI18n } from "vue-i18n";

// 从~/locales中导入所有语言文件
const modules = import.meta.glob('../../locales/*.json', { eager: true });
export const messages: Record<string, any> = {};
Object.keys(modules).forEach((key) => {
    const locale = key.replace(/^.*\/([^/]+)\.json$/, '$1');
    messages[locale] = modules[key];
});

export const i18n = createI18n({
    locale: useInitialLocale(),
    messages,
    fallbackLocale: 'en',
    silentFallbackWarn: false,
    missingWarn: false,
    silentTranslationWarn: true,
    fallbackWarn: false,
});

export const install: CustomModule = (app) => {
    app.use(i18n);
}

