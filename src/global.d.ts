import type { createApp } from 'vue'

declare global {
    type KeyField = string | number | symbol

    type CustomModule = (ctx: ReturnType<typeof createApp>) => void

}
