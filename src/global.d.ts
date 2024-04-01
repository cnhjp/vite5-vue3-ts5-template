import { createApp, defineComponent } from 'vue'

declare global {
    type KeyField = string | number | symbol

    type CustomModule = (ctx: ReturnType<typeof createApp>) => void

}