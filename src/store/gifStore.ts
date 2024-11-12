import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type GifStore = {
 modals:{
  gif:boolean
 },
 selectedGifUrl:string,
 updatedGifModal:(url: string, toggle: boolean) => void,
}

const localStoragePersist = {
  getItem: (name: string) => {
    const storedValue = localStorage.getItem(name)
    return storedValue ? JSON.parse(storedValue) : null
  },
  setItem: (name: string, value: unknown) => {
    localStorage.setItem(name, JSON.stringify(value))
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name)
  }
}

const useGifStore = create<GifStore>()(persist(
  (set, get) => ({
    modals: {
      gif: false
    },
    selectedGifUrl: '',

    updatedGifModal: (url, toggle) => {
      const { modals } = get()
      const newModals = { ...modals, gif: toggle }
      set({ modals: newModals })
      set({ selectedGifUrl: url })
    }

  }),
  {
    name: 'gifStore',
    storage: localStoragePersist
  }
))

export default useGifStore
