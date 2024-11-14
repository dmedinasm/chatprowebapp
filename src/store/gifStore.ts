import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type GifStore = {
 modals:{
  gif:boolean,
  audio:boolean,
  media:boolean
  document:boolean
 },
 selectedGifUrl:string,
 updatedGifModal:(url: string, toggle: boolean) => void,
 updatedAudioModal:(toggle: boolean) => void,
 updatedMediaModal:(toggle: boolean) => void,
 updatedDocumentModal:(toggle: boolean) => void
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
      gif: false,
      audio: false,
      media: false,
      document: false
    },
    selectedGifUrl: '',

    updatedGifModal: (url, toggle) => {
      const { modals } = get()
      const newModals = { ...modals, gif: toggle }
      set({ modals: newModals })
      set({ selectedGifUrl: url })
    },
    updatedMediaModal: (toggle) => {
      const { modals } = get()
      const newModals = { ...modals, media: toggle }
      set({ modals: newModals })
    },

    updatedAudioModal: (toggle) => {
      const { modals } = get()
      const newModals = { ...modals, audio: toggle }
      set({ modals: newModals })
    },

    updatedDocumentModal: (toggle) => {
      const { modals } = get()
      const newModals = { ...modals, document: toggle }
      set({ modals: newModals })
    }
  }),
  {
    name: 'gifStore',
    storage: localStoragePersist
  }
))

export default useGifStore
