'use client'
import useGifStore from '@/store/gifStore'
import { FileImage, FileText, Paperclip } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

function Attachment () {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const { updatedMediaModal, updatedDocumentModal } = useGifStore()
  const trigger = useRef<HTMLButtonElement>(null)
  const dropdown = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!dropdown.current) return

      if (dropdown.current.contains(target) || trigger.current?.contains(target)) return

      setDropDownOpen(false)
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [])
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (dropDownOpen && event.key === 'Escape') {
        setDropDownOpen(false)
      }
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [])// eslint-disable-line
  return (
    <div className='relative flex'>
        <button ref={trigger} className='text-[#98A6AD] hover:text-body' onClick={(e) => {
          e.preventDefault()
          setDropDownOpen((prev) => !prev)
        }}>
            <Paperclip fontWeight={'bold'} size={20} />
        </button>
        <div ref={dropdown} className={`absolute right-0  -top-24 z-40 w-54 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${dropDownOpen ? 'block' : 'hidden'}`}
        onFocus={() => setDropDownOpen(true)}
        onBlur={() => setDropDownOpen(false)} >
            <button onClick={(e) => {
              e.preventDefault()
              updatedMediaModal(true)
            }} className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
                <FileImage size={20} />
                <span>Images and Videos</span>
            </button>
              <button onClick={(e) => {
                e.preventDefault()
                updatedDocumentModal(true)
              }} className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
                  <FileText size={20} />
                  <span>Files and Documents</span>
              </button>
        </div>
    </div>
  )
}

export default Attachment
