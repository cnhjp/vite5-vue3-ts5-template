import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import AutoComponents from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '~': '/'
    }
  },
  plugins: [vue(), AutoImport({
    imports: ['vue', 'pinia', {
      'vue-router': [
        'useLink',
        'useRoute',
        'useRouter',
        'onBeforeRouteLeave',
        'onBeforeRouteUpdate',
        'createRouter',
        'createWebHistory',
        'createWebHashHistory'
      ],
    }],
    include: [
      /\.[tj]sx?$/,
      /\.vue$/,
      /\.vue\?vue/,
      /\.md$/,
    ],
    dirs: ['src', 'src/store'],
    vueTemplate: true,
  }), AutoComponents({
    dirs: ['src/components']
  }), UnoCSS(), vueJsx()],

})
