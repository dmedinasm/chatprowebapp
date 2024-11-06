import { Send, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function GifModal () {
  const modalOpen = true
  return (
      <dialog className={`fixed left-0 top-0 flex z-999999 h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? 'block' : 'hidden'}`}>
          <div className='sm:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark sm:py-8 px-8 py-12'>
              <div className='flex flex-row items-center justify-between mb-8 space-x-2'>
                  <div className='text-md text-black font-medium dark:text-white'>Send Giphy</div>
                  <button >
                      <X size={24} />
                  </button>
              </div>
               <Image src="https://media4.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=204b71a43mjo98xsevw41pe5zqxo943nmn3xe9a9i17dzjvr&ep=v1_gifs_search&rid=giphy.gif&ct=g"
               width={70} height={60} alt='' className='w-full mx-auto max-h-125 object-cover object-center rounded-lg'
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
