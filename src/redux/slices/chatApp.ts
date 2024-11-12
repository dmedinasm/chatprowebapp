'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modals: {
    gif: false
  },
  selectedGifUrl: ''
}

const slice = createSlice({
  name: 'chatApp',
  initialState,
  reducers: {
    updatedGifModal: (state, action) => {
      state.modals.gif = action.payload.value
      state.selectedGifUrl = action.payload.url
    }
  }
})

export default slice.reducer
