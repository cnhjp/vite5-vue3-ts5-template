import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'

const defaultThemeState = {
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
  themeVars: INITIAL_THEME(),
  darkThemeVars: INITIAL_DARK_THEME(),
  transitionName: 'fade',
}

export const useThemeStore = defineStore({
  id: 'theme',

  state: (): ThemeState => ({
    layoutConfig: useLocalStorage('layoutConfig', cloneDeep(defaultThemeState.layoutConfig)),
    layoutState: useLocalStorage('layoutState', cloneDeep(defaultThemeState.layoutState)),
    themeVars: useLocalStorage('themeVars', cloneDeep(defaultThemeState.themeVars)),
    darkThemeVars: useLocalStorage('darkThemeVars', cloneDeep(defaultThemeState.darkThemeVars)),
    transitionName: useLocalStorage('transitionName', cloneDeep(defaultThemeState.transitionName)),
  }),

  actions: {
    resetTheme() {
      // layoutConfig
      for (const key in this.layoutConfig)
        this.changeLayoutConfig(key as keyof LayoutCssVarProps, defaultThemeState.layoutConfig[key as keyof LayoutCssVarProps])

      // layoutState
      for (const key in this.layoutState)
        this.layoutState[key] = defaultThemeState.layoutState[key]

      // themeVars
      for (const key in this.themeVars)
        this.themeVars[key] = defaultThemeState.themeVars[key]

      // darkThemeVars
      for (const key in this.darkThemeVars)
        this.darkThemeVars[key] = defaultThemeState.darkThemeVars[key]

      // transitionName
      this.toggleTransition(defaultThemeState.transitionName as TransitionName)
    },
    createLayoutCssVar(layoutConfig?: LayoutCssVarProps) {
      if (!layoutConfig)
        layoutConfig = this.layoutConfig
      const { headerHeight, siderWidth, footerHeight, collapsedSiderWidth, contentPadding } = layoutConfig!
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
      const vars = isDark.value ? this.darkThemeVars : this.themeVars
      vars[key] = value
    },
    toggleTransition(transitionName: TransitionName) {
      this.transitionName = transitionName
      window.location.reload()
    },
  },
})
