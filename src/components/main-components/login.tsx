'use client'
import React from 'react'
import Logo from '../ui/logo'
import Link from 'next/link'
import Image from 'next/image'
import { LockKeyhole, Mail } from 'lucide-react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { Toaster } from 'sonner'

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})
function Login () {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const { isLoading, loginUser } = useAuthStore()
  const onSubmit = (data: { email: string; password: string; }) => {
    console.log(data, 'Form Data: Login')
    loginUser(data, router.push)
  }
  return (
    <>
    <Toaster position='top-center'/>
        <section className='border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen '>
            <div className='flex flex-row flex-wrap items-center  h-full'>
                <article className='hidden w-full md:block md:w-1/2'>
                    <div className='py-17.5 px-26 text-center '>
                        <Link href={'/'} className='mb-5.5 inline-block'>
                            <Logo />
                        </Link>
                        <p className='xl:px-20'>
                            Hey There 👋 , Welcome to ChatPro, Login to Chat with your friends and collegues.
                        </p>
                        <span className='inline-block'>
                            <Image src={'/chat-login.svg'} alt='login' width={400} height={400} className='h-90 w-auto object-cover object-center' />
                        </span>

                    </div>
                </article >
                <article className='md:w-1/2 border-l-2 border-stroke dark:border-strokedark  lg:px-44'>
                    <div className=' p-4  lg:py-17.5'>
                        <span className='mb-1.5 block font-medium'>Start for free</span>
                        <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>Sign In to ChatPro</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Email
                                </label>
                                <div className='relative'>
                                <input type="email" {...register('email')} placeholder='Enter your email' className={`w-full rounded-lg border  bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark
                                 dark:bg-form-input dark:text-white dark:focus:border-chatprimary ${errors.email ? 'border-red focus:border-red' : 'border-stroke'}`}/>
                                <span className='absolute right-4 top-4'>
                                    <Mail size={20}/>
                                </span>
                                </div>
                                {errors.email && <p className='text-red text-sm'>{errors.email.message}</p>}
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Password
                                </label>
                                <div className='relative'>
                                <input type="password" {...register('password')} placeholder='6+ characters, 1 Capital Letter' className={`w-full rounded-lg border  bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none
                                 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary ${errors.password ? 'border-red focus:border-red' : 'border-stroke'}`}/>
                                <span className='absolute right-4 top-4'>
                                    <LockKeyhole size={20}/>
                                </span>
                                </div>
                                {errors.password && <p className='text-red text-sm'>{errors.password.message}</p>}
                            </div>
                            <div className='mb-5'>
                                <input type='submit' value={isSubmitting || isLoading ? 'Submitting...' : 'Sign In'}
                                disabled={isSubmitting || isLoading} className='w-full cursor-pointer border border-chatprimary bg-chatprimary text-white p-2.5 rounded-lg transition hover:bg-opacity-90' />
                            </div>
                            <div>
                                <div className='mt-6 text-center'>
                                    <p className='text-sm'>Don&apos;t have an account? <Link href='/signup' className='text-chatprimary'>Sign up</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </section>
</>
  )
}

export default Login
