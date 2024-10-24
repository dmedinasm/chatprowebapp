import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light')

  useEffect(() => {
    const mode = 'dark'

    const bodyClass = window.document.body.classList

    if (colorMode === 'dark') {
      bodyClass.add(mode)
    } else {
      bodyClass.remove(mode)
    }
  }, [colorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
