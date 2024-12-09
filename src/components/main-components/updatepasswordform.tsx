import React from 'react'

export default function UpdatePasswordForm () {
  return (
    <div className='flex flex-col w-full p-4 space-y-6'>

    {/* profile form */}
  <div className='rounded-sm border border-stroke bg-white shadow-default
     dark:border-strokedark dark:bg-boxdark sm:max-w-150'>
    <form action=''>
      <div className='flex flex-col gap-5 p-6'>
        {/* Current Password */}
        <div >
          <label className='mb-3 block text-black dark:text-white'>
            Current Password
          </label>
          <input type='text' placeholder='Enter your Password' required className='w-full rounded-lg border-[1.5px]
           border-stroke bg-transparent py-3 px-5 text-black outline-none transition
           focus:border-chatprimarydark:text-whiteactive:border-chatprimary disabled: cursor-default
           disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white
           dark:focus:border-chatprimary
           '/>
        </div>
        {/* New Password */}
        <div >
          <label className='mb-3 block text-black dark:text-white'>
            New Password
          </label>
          <input type='text' placeholder='Choose New Password' required className='w-full rounded-lg border-[1.5px]
           border-stroke bg-transparent py-3 px-5 text-black outline-none transition
           focus:border-chatprimarydark:text-whiteactive:border-chatprimary disabled: cursor-default
           disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white
           dark:focus:border-chatprimary
           '/>
        </div>
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
