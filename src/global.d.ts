import { createApp, defineComponent } from 'vue'

declare global {
    type KeyField = string | number | symbol

    type CustomModule = (ctx: ReturnType<typeof createApp>) => void

    interface LayoutItem {
        label: string
        value: string
        component: ReturnType<typeof defineComponent>
    }


}