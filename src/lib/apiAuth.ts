import { LoginForm, RegisterForm, LoginResponse, RegisterResponse, SendOTPResponse, VerifyOTPResponse } from '../../types'

const apiUrl = 'http://localhost:3001/api'

export const signUp = async (registerForm: RegisterForm) => {
  const response = await fetch(`${apiUrl}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...registerForm })
  })

  const data: RegisterResponse = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }
  console.log(data)
  return data
}

export const resendOTPMail = async (email: string) => {
  const response = await fetch(`${apiUrl}/auth/resend-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })

  if (!response.ok) throw new Error('Something went wrong. Please try again.')
  const data: SendOTPResponse = await response.json()
  return data
}

export const verifyUserOTP = async (formOTP: FormData) => {
  const response = await fetch(`${apiUrl}/auth/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...formOTP })
  })

  if (!response.ok) throw new Error('Something went wrong. Please try again.')
  const data: VerifyOTPResponse = await response.json()
  return data
}

export const logIn = async (formLogin: LoginForm) => {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...formLogin })
  })

  const data: LoginResponse = await response.json()
  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}
