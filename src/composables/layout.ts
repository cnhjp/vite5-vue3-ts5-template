import { layouts } from "../layouts"

export const useLayout = () => {
    const state = 'layout'
    const layout = useLocalStorage(state, layouts[0].value)
    const setLayout = (value: string) => layout.value = value
    const component = computed(() => layouts.find(l => l.value === layout.value)?.component)
    return { layout, setLayout, layouts, component }
}