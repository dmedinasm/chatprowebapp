'use client'
import Logo from '@/components/ui/logo'
// import useAuthStore from '@/store/authStore'
import { LockKeyhole, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Register () {
  const route = useRouter()
  // const { registerUser, isLoading, error } = useAuthStore()
  // const handleSubmit = () => {
  //  resgisterUser({})
  // }
  return (
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
                        <form action="">
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Name
                                </label>
                                <div className='relative'>
                                    <input type="text" placeholder='Enter your full name' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <User size={20} />
                                    </span>
                                </div>

                            </div>
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Email
                                </label>
                                <div className='relative'>
                                    <input type="email" placeholder='Enter your full name' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <Mail size={20} />
                                    </span>
                                </div>

                            </div>
                            <div className='mb-4'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Password
                                </label>
                                <div className='relative'>
                                    <input type="password" placeholder='Enter your password' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <LockKeyhole size={20} />
                                    </span>
                                </div>

                            </div>
                            <div className='mb-6'>
                                <label htmlFor='' className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Re-type Password
                                </label>
                                <div className='relative'>
                                    <input type="password" placeholder='Retype your password' className='w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-chatprimary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary' />
                                    <span className='absolute right-4 top-4'>
                                        <LockKeyhole size={20} />
                                    </span>
                                </div>

                            </div>
                            <div className='mb-5'>
                                <input type='button' onClick={() => { route.push('/verification') }} value='Create account' className='w-full cursor-pointer border border-chatprimary bg-chatprimary text-white p-2.5 rounded-lg transition hover:bg-opacity-90' />
                            </div>
                            <div>
                                <button type='button' onClick={() => { route.push('/dashboard') }} className='flex w-full items-center justify-center gap-3.5 border border-stroke bg-gray p-2.5 rounded-lg hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:bg-opacity-50'>
                                    <span>
                                        <Image src='/google-logo.svg' alt='google' width={20} height={20} />
                                    </span>
                                    Sign Up with Google
                                </button>
                                <div className='mt-6 text-center'>
                                    <p className='text-sm'>Already have an account? <Link href='/' className='text-chatprimary'>Sign in</Link></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </section>
  )
}

export default Register
