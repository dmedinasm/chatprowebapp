import { Camera } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ProfileForm () {
  return (
    <div className='flex flex-col w-full p-4 space-y-6'>
        {/* Image Picker */}
        <div className='relative z-30  rounded-full p-1 backdrop-blur max-w-26  ss:p-3'>
            <div className='relative drop-shadow-2  '>
                <Image src='/user/user-01.png' alt='avatar-image' width={80} height={80} className='object-cover object-center rounded-full' />
                <label htmlFor='profile' className='absolute bottom-0 right-4 ss:bottom-0 ss:right-0 flex items-center justify-center rounded-full
                 bg-chatprimary text-white hover:bg-opacity-90  p-1'>
                    <Camera size={18} className='cursor-pointer' />
                    <input type='file' id='profile' className='sr-only' name='profile' accept='image/*' />
                 </label>
            </div>
        </div>
    </div>
  )
}
