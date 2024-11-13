'use client'
import useGifStore from '@/store/gifStore'
import { Send, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

function GifModal () {
  const modalRef = useRef(null)
  const { modals, selectedGifUrl, updatedGifModal } = useGifStore()
  const modalOpen = modals.gif

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (modalOpen && event.key === 'Escape') {
        updatedGifModal('', false)
      }
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [])// eslint-disable-line
  return (
      <dialog ref={modalRef} className={`fixed left-0 top-0 flex z-999999 h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? 'block' : 'hidden'}`}>
          <div className='sm:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark sm:py-8 px-8 py-12'>
              <div className='flex flex-row items-center justify-between mb-8 space-x-2'>
                  <div className='text-md text-black font-medium dark:text-white'>Send Giphy</div>
                  <button onClick={() => updatedGifModal('', false)} >
                      <X size={24} />
                  </button>
              </div>
               <Image src={selectedGifUrl}
               width={70} height={70} alt='' className='w-full mx-auto max-h-125 object-cover object-center rounded-lg' unoptimized
               />
               <div className='flex flex-row items-center space-x-2 justify-between mt-4'>
                <input type='text' placeholder='Type your message...' className='h-11 w-full rounded-lg border border-stroke bg-gray p-2 text-black placeholder-body outline-none hover:border-chatprimary dark:border-strokedark dark:bg-form-input bg-transparent' />
                <button className='p-2.5 border border-chatprimary flex items-center justify-center rounded-lg text-white bg-chatprimary hover:bg-opacity-90'>
                    <Send size={24} />
                </button>
               </div>
          </div>
      </dialog>
  )
}

export default GifModal
