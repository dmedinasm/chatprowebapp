import { useEffect, useState } from 'react'

function useLocalStorage<T> (key: string, initialValue: T):[T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const valueToStore = typeof storedValue === 'function' ? (storedValue as (prev: T) => T)(storedValue) : storedValue
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
