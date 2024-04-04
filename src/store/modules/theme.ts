import { defineStore } from 'pinia'
import { useThemeVars } from 'naive-ui'

interface ThemeState {
  layoutConfig: LayoutCssVarProps
  layoutState: LayoutState
  themeVars: ReturnType<typeof useThemeVars>
  key: number
}

export const useThemeStore = defineStore({
  id: 'theme',

  state: (): ThemeState => ({
    layoutConfig: {
      headerHeight: 60,
      footerHeight: 60,
      siderWidth: 200,
      collapsedSiderWidth: 80,
      contentPadding: 10,
    },
    layoutState: {
      collapsed: false,
      layoutsCount: 3,
      currentLayout: 1,
    },
    themeVars: useThemeVars(),
    key: 1,
  }),

  actions: {
    createLayoutCssVar(layoutConfig?: LayoutCssVarProps) {
      if (!layoutConfig)
        layoutConfig = this.layoutConfig
      const { headerHeight, siderWidth, footerHeight, collapsedSiderWidth, contentPadding } = layoutConfig
      const vars = {
        '--layout-header__height': `${headerHeight}px`,
        '--layout-sider__width': `${this.layoutState.collapsed ? collapsedSiderWidth : siderWidth}px`,
        '--layout-footer__height': `${footerHeight}px`,
        '--layout-content__padding': `${contentPadding}px`,
      }
      let cssText = ''
      for (const key in vars)
        cssText += `${key}:${vars[key]};`

      const existingStyle = document.head.querySelector('style[data-layout-css-var]')

      if (existingStyle) {
        existingStyle.textContent = `:root {${cssText}}`
      }
      else {
        const style = document.createElement('style')
        style.setAttribute('data-layout-css-var', '')
        style.textContent = `:root {${cssText}}`
        document.head.appendChild(style)
      }

      return vars
    },
    setCollapse(collapsed: boolean) {
      this.layoutState.collapsed = collapsed
      this.createLayoutCssVar()
    },
    changeLayoutConfig(key: keyof LayoutCssVarProps, value: number) {
      this.layoutConfig[key] = value
      this.createLayoutCssVar()
    },
    changeThemeVars(key, value: string) {
      this.themeVars[key] = value
      this.key += 1
    },
  },
})
