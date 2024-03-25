import Layout1 from './layouts/layout1'
import Layout2 from './layouts/layout2'

export const layouts: LayoutItem[] = [
    { label: 'Layout 1', value: 'layout1', component: Layout1 },
    { label: 'Layout 2', value: 'layout2', component: Layout2 },
]

const { component } = useLayout()

export default component.value