import type { LucideIcon } from 'lucide-react'

type MessageState = 'Sent' | 'Delivered' | 'Read'

interface ChatItem {
    imgSrc: string;
    name: string;
    message: string;
}
interface SideMenuItem{
    key:number;
    title:string;
    icon:LucideIcon;
    path:string;
}

interface Message {
    incoming: boolean;
    author: string;
    timestamp: string;
    read_recipt: MessageState;
    content: string;
}

interface MediaMessage extends Message {
  assets: string[];
  caption: string;
}

interface MediaMessageImage {
    key: number;
    imgSrc: string;
}

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

interface LoginForm {
  email: string;
  password: string;
}

interface RegisterResponse {
  status: string;
  message: string;
}

interface SendOTPResponse {
  status: string;
  message: string;
}

interface VerifyOTPResponse {
  status: string;
  message: string;
  token?: string;
  user_id?: string;
}

interface LoginResponse {
  status: string;
  message: string;
  token?: string;
  user_id?: string;
}

interface User {
  _id?: string;
  name: string;
  jobTitle?: string;
  bio?: string;
  avatar?: string;
  email: string;
  password?: string;
  passwordChangeAt?: Date;
  verified: boolean;
  otp?: string;
  otp_expiry_time?: Date;
  status: 'Online' | 'Offline';
  socketId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type AuthStore = {
  isLoading: boolean,
  error: Error | null,
  token: string | null,
  user:User | null,
  isLoggedIn: boolean
  registerUser: (formRegister: RegisterForm) => Promise<void>,
  resendOTP: (email: string) => Promise<void>,
  verifyOTP:(formOTP: FormData, push: (href: string, options?: { scroll?: boolean }) => void) => Promise<void>,
  loginUser:(formLogin: LoginForm, push: (href: string, options?: { scroll?: boolean }) => void) => Promise<void>,
  logout: () => void
}

export type {
  ChatItem,
  SideMenuItem,
  Message,
  MessageState,
  MediaMessage,
  MediaMessageImage,
  RegisterForm,
  RegisterResponse,
  SendOTPResponse,
  VerifyOTPResponse,
  LoginResponse,
  User,
  AuthStore,
  LoginForm
}
