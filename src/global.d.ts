import { createApp } from 'vue'

declare global {
    type CustomModule = (ctx: ReturnType<typeof createApp>) => void
}