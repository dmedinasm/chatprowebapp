'use client'
import Logo from '@/components/ui/logo'
import { LockKeyhole, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuthStore from '@/store/authStore'
import { RegisterForm } from '../../../types'
import { Toaster } from 'sonner'

// Validation schema
const schema = yup.object().shape({
  name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Please confirm your password')
})

function Register () {
  // const route = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const { isLoading, registerUser } = useAuthStore()

  const onSubmit = (data: RegisterForm) => {
    console.log(data, 'Form Data: SignUp')
    registerUser(data)
  }

  return (
    <>
    <Toaster/>
    <section className='border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark  '>
            <div className='flex flex-row flex-wrap items-center  '>
                <article className='hidden w-full md:block md:w-1/2 h-full'>
                    <div className='py-17.5 px-26 text-center  '>
                        <Link href={'/'} className='mb-5.5 inline-block'>
                            <Logo />
                        </Link>
                        <p className='xl:px-20'>
                            Join ChatPro & experience the modern way to connect with people
                        </p>
                        <span className='mt-15 inline-block'>
                            <Image src={'/chat-signup.svg'} alt='login' width={400} height={400} className='h-auto w-64 object-cover object-center' />
                        </span>

                    </div>
                </article >
                <article className='md:w-1/2 border-l-2 border-stroke dark:border-strokedark lg:px-44  '>
                    <div className=' p-4  lg:py-17.5 '>
                        <span className='mb-1.5 block font-medium'>Start for free</span>
                        <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>Sign Up to ChatPro</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Name
                                </label>
                                <div className='relative'>
                                    <input type="text" {...register('name')} placeholder='Enter your full name' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <User size={20} />
                                    </span>
                                </div>
                                {errors.name && <p className='text-red text-sm'>{errors.name.message}</p>}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Email
                                </label>
                                <div className='relative'>
                                    <input type="email" {...register('email')} placeholder='Enter your email' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <Mail size={20} />
                                    </span>
                                </div>
                                {errors.email && <p className='text-red text-sm'>{errors.email.message}</p>}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Password
                                </label>
                                <div className='relative'>
                                    <input type="password" {...register('password')} placeholder='Enter your password' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <LockKeyhole size={20} />
                                    </span>
                                </div>
                                {errors.password && <p className='text-red text-sm'>{errors.password.message}</p>}
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Re-type Password
                                </label>
                                <div className='relative'>
                                    <input type="password" {...register('confirmPassword')} placeholder='Retype your password' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <LockKeyhole size={20} />
                                    </span>
                                </div>
                                {errors.confirmPassword && <p className='text-red text-sm'>{errors.confirmPassword.message}</p>}
                            </div>
                            <div className='mb-5'>
                                <input type='submit' disabled={isSubmitting || isLoading} value={isSubmitting || isLoading ? 'Submitting...' : 'Create account'} className='w-full cursor-pointer border border-chatprimary bg-chatprimary text-white p-2.5 rounded-lg transition hover:bg-opacity-90' />
                            </div>
                            <div>

                                <div className='mt-6 text-center'>
                                    <p className='text-sm'>Already have an account? <Link href='/' className='text-chatprimary'>Sign in</Link></p>
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

export default Register
