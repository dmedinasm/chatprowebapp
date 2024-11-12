'use client'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

// slices
import appReducer from './slices/chatApp'

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-'
}

const rootReducer = combineReducers({
  chatApp: appReducer
})

export { rootPersistConfig, rootReducer }
