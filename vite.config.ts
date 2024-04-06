import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import AutoComponents from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { unheadVueComposablesImports } from '@unhead/vue'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '~': '/',
    },
  },
  plugins: [vue(), AutoImport({
    imports: ['vue', 'pinia', '@vueuse/core', {
      'vue-router': [
        'useLink',
        'useRoute',
        'useRouter',
        'onBeforeRouteLeave',
        'onBeforeRouteUpdate',
        'createRouter',
        'createWebHistory',
        'createWebHashHistory',
      ],
    }, unheadVueComposablesImports],
    include: [
      /\.[tj]sx?$/,
      /\.vue$/,
      /\.vue\?vue/,
      /\.md$/,
    ],
    dirs: ['src', 'src/store', 'src/composables', 'src/config'],
    vueTemplate: true,
  }), AutoComponents({
    exclude: [/node_modules/, /^\.\/src\/components\/.*\.vue$/],
    resolvers: [NaiveUiResolver()],
  }), UnoCSS(), vueJsx()],

})
