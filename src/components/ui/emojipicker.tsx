'use client'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import { Smile } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

function EmojiPicker () {
  const [openPicker, setOpenPicker] = useState(false)

  const pickerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleTrigger = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setOpenPicker((prev) => !prev)
  }
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!pickerRef.current) return

      if (pickerRef.current.contains(target) || buttonRef.current?.contains(target)) return

      setOpenPicker(false)
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [])
  return (
    <div className='relative flex'>
        <button ref={buttonRef} className='text-[rgb(152,166,173)] hover:text-body' onClick={handleTrigger}>
            <Smile size={20}/>
        </button>
        {openPicker &&
        <div ref={pickerRef} className='absolute z-40 -top-115 right-0'>
            <Picker data={data} onEmojiSelect={console.log} />
        </div>
        }
    </div>
  )
}

export default EmojiPicker
