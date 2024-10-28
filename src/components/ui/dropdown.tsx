'use client'
import { Ellipsis, Pencil, Trash2 } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

function Dropdown () {
  const [dropDownOpen, setDropDownOpen] = useState(false)

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
  })
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (dropDownOpen && event.key === 'Escape') {
        setDropDownOpen(false)
      }
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })
  return (
    <div className='relative flex'>
        <button ref={trigger} className='text-[#98A6AD] hover:text-body' onClick={() => setDropDownOpen((prev) => !prev)}>
            <Ellipsis fontWeight={'bold'} size={24} />
        </button>
        <div ref={dropdown} className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${dropDownOpen ? 'block' : 'hidden'}`}
        onFocus={() => setDropDownOpen(true)}
        onBlur={() => setDropDownOpen(false)} >
            <button className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
                <Pencil size={18} />
                <span>Edit</span>
            </button>
            <button className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
                <Trash2 size={18} />
                <span>Delete</span>
            </button>
        </div>
    </div>
  )
}

export default Dropdown
