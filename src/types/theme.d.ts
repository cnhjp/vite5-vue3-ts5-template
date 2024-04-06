/**
 * 布局相关定义
 */
interface LayoutCssVarProps {
  // header高度
  headerHeight: number
  // sider宽度
  siderWidth: number
  // 折叠后的sider宽度
  collapsedSiderWidth: number
  // footer高度
  footerHeight: number
  // content内边距
  contentPadding: number
}

/**
 * 布局状态
 */
interface LayoutState {
  // 是否折叠
  collapsed: boolean
  // 布局数量
  layoutsCount: number
  // 当前布局
  currentLayout: number
}

/**
 * 过渡效果
 */
type TransitionName = 'fade' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'cubic-bezier' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'

/**
 * 主题状态
 */
interface ThemeState {
  /**
   * 布局配置
   */
  layoutConfig: MaybeRefOrGetters<LayoutCssVarProps>
  /**
   * 布局状态
   */
  layoutState: MaybeRefOrGetter<LayoutState>
  /**
   * 主题变量配置
   */
  themeVars: MaybeRefOrGetter<Record<string, string>>
  /**
   * 主题变量配置（暗黑模式）
   */
  darkThemeVars: MaybeRefOrGetter<Record<string, string>>
  /**
   * 过渡效果
   */
  transitionName: MaybeRefOrGetter<TransitionName>
}
