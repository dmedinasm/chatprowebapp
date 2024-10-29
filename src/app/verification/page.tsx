import Logo from '@/components/ui/logo'
import Link from 'next/link'
import React from 'react'

function Verification () {
  return (
    <section className='p-4 dark:bg-boxdark-2 xs:px-8'>
    <div className='flex h-screen flex-col items-center justify-center overflow-hidden'>
        <div className='no-scrollbar overflow-y-auto py-20'>
            <div className='mx-auto w-full max-w-[480px]'>
                <div className='text-center'>
                    <Link href='/' className='mb-10 inline-flex '>
                        <Logo />
                    </Link>

                    <div className='bg-white p-4 shadow-14 rounded-xl dark:bg-bg-boxdark lg:p-7.5 xl:p-12.5'>
                        <h1 className='mb-2.5 text-3xl text-black font-black leading-[48px] dark:text-white capitalize'>Verify your Account</h1>
                        <p className='mb-7.5 font-medium'>Enter the 4 digit code sent to the registered email id.</p>
                        <form action="">
                            <div className='flex items-center gap-4.5'>
                            {Array.from({ length: 4 }).map((_, index) =>
                               <input key={index} type="text" className='w-full rounded-md border-[1.5px] border-stroke bg-transparent px-5 py-3 text-center text-black outline-none trabsition focus:border-chatprimary active:border-chatprimary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-chatprimary'
                               />
                            )}
                            </div>
                            <div className='mb-5 mt-4 text-left font-medium text-sm flex items-center gap-2 dark:text-white'>
                                <p>Did no receive a code a code?</p>
                                <button className='text-chatprimary '>Resend Code</button>
                            </div>
                            <button className='flex w-full justify-center rounded-md p-[11px] text-gray font-bold bg-chatprimary hover: bg-opacity-90'>
                                Verify
                            </button>
                            <span className='mt-5 block text-red text-sm'>
                                Don&apos;t share the verification code with anyone
                            </span>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Verification
