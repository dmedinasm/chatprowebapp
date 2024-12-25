import { create } from 'zustand'
import { resendOTPMail, signUp, verifyUserOTP, logIn } from '@/lib/apiAuth'

import { AuthStore } from '../../types'
import { toast } from 'sonner'

const useAuthStore = create<AuthStore>()((set, get) => ({
  isLoading: false,
  error: null,
  token: null,
  user: null,
  isLoggedIn: false,

  registerUser: async (formRegister) => {
    set({ error: null })
    set({ isLoading: true })
    try {
      const response = await signUp(formRegister)
      toast.success(response.message, { position: 'top-right', richColors: true })
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err })
        toast.error(err.message, { position: 'top-right', richColors: true })
      } else {
        set({ error: new Error('An unknown error occurred.') })
        toast.error('An unknown error occurred.', { position: 'top-right', richColors: true })
      }
    } finally {
      set({ isLoading: false })
    }
  },
  resendOTP: async (email) => {
    set({ error: null })
    set({ isLoading: true })
    try {
      const response = await resendOTPMail(email)
      toast.success(response.message)
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err })
        toast.error(err.message)
      } else {
        set({ error: new Error('An unknown error occurred.') })
        toast.error('An unknown error occurred.')
      }
    } finally {
      set({ isLoading: false })
    }
  },
  verifyOTP: async (formOTP, push) => {
    set({ error: null })
    set({ isLoading: true })
    try {
      const response = await verifyUserOTP(formOTP)
      const { token, message } = response
      set({ token, isLoggedIn: true })
      toast.success(message)
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err })
        toast.error(err.message)
      } else {
        set({ error: new Error('An unknown error occurred.') })
        toast.error('An unknown error occurred.')
      }
    } finally {
      set({ isLoading: false })
      const stateError = get().error
      if (stateError === null) {
        push('/dashboard')
      }
    }
  },
  loginUser: async (formLogin, push) => {
    set({ error: null })
    set({ isLoading: true })
    try {
      const response = await logIn(formLogin)
      const { token, message } = response
      set({ token, isLoggedIn: true })
      toast.success(message)
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err })
        toast.error(err.message, { position: 'top-right', richColors: true })
      } else {
        set({ error: new Error('An unknown error occurred.') })
        toast.error('An unknown error occurred.')
      }
    } finally {
      set({ isLoading: false })
      const stateError = get().error
      if (stateError === null) {
        push('/dashboard')
      }
    }
  },
  logout: () => {
    set({ token: null, isLoggedIn: false })
  }
}))

export default useAuthStore
