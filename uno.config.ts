// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import presetIcons from '@unocss/preset-icons/browser'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        aguafina: ['Aguafina Script'],
        architects: ['Architects Daughter'],
      },
    }),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        heroicons: () => import('@iconify-json/heroicons/icons.json').then(i => i.default),
      },
    }),
  ],
  shortcuts: [
    ['btn', 'p-2 bg-blue-500 text-white rounded-md hover:cursor-pointer'],
    ['btn-primary', 'p-2 bg-blue-500 text-white rounded-md'],
    ['btn-secondary', 'p-2 bg-gray-500 text-white rounded-md'],
  ],
  content: {
    pipeline: {
      // include: ['**/*.{ts,tsx}'],
    },
  },
  safelist: ['i-heroicons-document-duplicate-solid', 'i-heroicons-document-duplicate', 'copy-button', 'hover:cursor-pointer', 'w-6', 'h-6', 'hover:w-4', 'hover:h-4', 'absolute', 'top-2', 'right-2', 'text-gray-500']
})
