import { useFullscreen as _useFullscreen } from '@vueuse/core'

export function useFullscreen() {
  const { isFullscreen, toggle, enter, exit } = _useFullscreen()
  return {
    isFullscreen,
    toggle,
    enter,
    exit,
  }
}
