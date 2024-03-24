import { default as router } from './router';
export * from './guard';

export const install: CustomModule = (app) => {
    app.use(router);
}