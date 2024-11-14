'use client'
import useGifStore from '@/store/gifStore'
import { Send, X } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import FileDropzone from './filedropzone'

export default function DocumentPicker () {
  const refModal = useRef(null)
  const { modals, updatedDocumentModal } = useGifStore()
  const modalOpen = modals.document

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!modalOpen || event.key !== 'Escape') return
      updatedDocumentModal(false)
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })// eslint-disable-line

  return (
      <div ref={refModal} className={`fixed left-0 top-0 flex z-999999 h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? 'block' : 'hidden'}`}>
          <div className='sm:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark sm:py-8 px-8 py-12'>
              <div className='flex flex-row items-center justify-between mb-8 space-x-2'>
                  <div className='text-md text-black font-medium dark:text-white'>
                    Choose Files to send
                  </div>
                  <button onClick={() => { updatedDocumentModal(false) }} className='text-md text-black font-medium dark:text-white'>
                      <X size={24} />
                  </button>
              </div>
              {/* Dropzone */}
              <FileDropzone acceptedFiles='.pdf,.ppt,.doc,.docx,.xls,xlsx,.txt,.csv,.fig' maxFileSize={64 * 1024 * 1024}/>

              <div className='flex flex-row items-center space-x-2 justify-between mt-4'>
              <input type='text' placeholder='Type your message...' className='h-11 w-full rounded-lg border border-stroke bg-gray p-2 text-black placeholder-body outline-none hover:border-chatprimary dark:border-strokedark dark:bg-form-input bg-transparent' />
              <button className='p-2.5 border border-chatprimary flex items-center justify-center rounded-lg text-white bg-chatprimary hover:bg-opacity-90'>
                  <Send size={24} />
              </button>
          </div>
          </div>

      </div>
  )
}
