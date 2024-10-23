import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'
import { Paperclip, Send, Smile } from 'lucide-react'

function Inbox () {
  return (
    <section className='flex flex-col h-full border-l border-stroke dark:border-strokedark w-3/4'>
        {/* Chat Header */}
        <header className='sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5'>
            <div className='flex items-center'>
                <div className='mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full'>
                    <Image src='/user/user-01.png' alt='avatar' width={40} height={40} className='h-full w-full object-cover object-center' />
                </div>
                <div>
                    <h5 className='font-medium text-black dark:text-white'>
                        Henry Dholi
                    </h5>
                    <p className='text-sm'>Reply to message</p>
                </div>
            </div>
            <DotsHorizontalIcon className='font-bold size-6'/>
        </header>
        {/* list of messages */}
        <div className='max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow'>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary dark:bg-boxdark-2'>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary dark:bg-boxdark-2'>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary dark:bg-boxdark-2'>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary dark:bg-boxdark-2'>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
        </div>
        {/* input section */}
        <div className='sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark'>
            <form className='flex items-center justify-between space-x-4.5'>
                <div className='relative  w-full'>
                    <input type='text' placeholder='Type something here...' className='h-11 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-chatprimary dark:border-strokedark dark:bg-boxdark-2 dark:text-white' />
                    <div className='absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-end space-x-4'>
                     <button className='hover:text-chatprimary'>
                        <Paperclip size={20} />
                     </button>
                     <button className='hover:text-chatprimary'>
                        <Smile size={20} />
                     </button>
                    </div>
                </div>
                <button className='flex items-center justify-center h-11 max-w-11 w-full bg-chatprimary text-white hover:bg-chatprimary rounded-md hover:bg-opacity-90'><Send size={20}/></button>
            </form>
        </div>
    </section>
  )
}

export default Inbox
