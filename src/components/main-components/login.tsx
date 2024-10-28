import React from 'react'
import Logo from '../ui/logo'
import Link from 'next/link'
import Image from 'next/image'

function Login () {
  return (
        <section className='border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen '>
            <div className='flex flex-wrap  h-full'>
                <article className='hidden w-full md:block lg:w-1/2'>
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
                </article>
                {/* <article className='w-full lg:1/2 border border-stroke dark:border-strokedark lg:border-l-2 lg:px-44'>

                </article> */}
            </div>
        </section>

  )
}

export default Login
