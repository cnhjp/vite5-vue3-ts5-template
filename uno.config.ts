// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import presetIcons from '@unocss/preset-icons/browser'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Roboto',
                mono: ['Fira Code', 'Fira Mono:400,700'],
            },
        }),
        presetIcons({
            collections: {
                mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
            }
        })
    ],
    shortcuts: [
        ['btn', 'p-2 bg-blue-500 text-white rounded-md hover:cursor-pointer'],
        ['btn-primary', 'p-2 bg-blue-500 text-white rounded-md'],
        ['btn-secondary', 'p-2 bg-gray-500 text-white rounded-md'],
    ]
})