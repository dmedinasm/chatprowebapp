import { Camera } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import SelectInput from '../ui/selectinput'

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

        {/* profile form */}
      <div className='rounded-sm border border-stroke bg-white shadow-default
         dark:border-strokedark dark:bg-boxdark sm:max-w-150'>
        <form action=''>
          <div className='flex flex-col gap-5 p-6'>
            {/* Name */}
            <div >
              <label className='mb-3 block text-black dark:text-white'>
                Name
              </label>
              <input type='text' placeholder='Enter your Name' className='w-full rounded-lg border-[1.5px]
               border-stroke bg-transparent py-3 px-5 text-black outline-none transition
               focus:border-chatprimarydark:text-whiteactive:border-chatprimary disabled: cursor-default
               disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white
               dark:focus:border-chatprimary
               '/>
            </div>
            {/* Job Title */}
            <div >
              <label className='mb-3 block text-black dark:text-white'>
                Job Title
              </label>
              <input type='text' placeholder='Enter your Job Title' className='w-full rounded-lg border-[1.5px]
               border-stroke bg-transparent py-3 px-5 text-black outline-none transition
               focus:border-chatprimarydark:text-whiteactive:border-chatprimary disabled: cursor-default
               disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white
               dark:focus:border-chatprimary
               '/>
            </div>
            {/* Bio */}
            <div >
              <label className='mb-3 block text-black dark:text-white'>
                Bio
              </label>
              <input type='text' placeholder='Add your Bio' className='w-full rounded-lg border-[1.5px]
               border-stroke bg-transparent py-3 px-5 text-black outline-none transition
               focus:border-chatprimarydark:text-whiteactive:border-chatprimary disabled: cursor-default
               disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white
               dark:focus:border-chatprimary
               '/>
            </div>
            {/* Country */}
            <SelectInput />
            {/* Submit */}
            <button type='submit' className='bg-chatprimary text-white w-full
            cursor-pointer rounded-lg border border-chatprimary py-3 px-6 transition hover:bg-opacity-90'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
