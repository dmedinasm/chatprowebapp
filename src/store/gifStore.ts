import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/* export const useGifStore = create(
  persist(
    (set) => ({
      gifs: [],
      setGifs: (gifs: any) => set({ gifs }),
    }),
    {
      name: 'gifs', // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage'
      partialize: (state) => ({ gifs: state.gifs }), // (optional) by default, return the whole state
      version: 1, // (optional) by default, 0
      migrate: (persistedState, version) => {
        // migrate from version 1 to version 2, etc.
        return persistedState
      },
    }
  )
) */
