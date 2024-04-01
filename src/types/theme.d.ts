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
    collapsed: boolean,
    // 布局数量
    layoutsCount: number,
    // 当前布局
    currentLayout: number
}
