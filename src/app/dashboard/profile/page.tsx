'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ProfilePage () {
  const [selectedTab, setSelectedTab] = useState(1)
  return (
    <div className='w-full rounded-sm border border-stroke bg-white py-7.5 px-20
    shadow-default dark:border-strokedark dark:bg-boxdark'>
      {/* Buttons for tabs */}
      <div className='mb-6 flex flex-wrap gap-5 border-b border-stroke
       dark:border-strokedark ss:gap-10'>
        <Link href='#' className={`border-b-2 py-4 text-sm hover:text-chatprimary sm:text-base 
          ${selectedTab === 1 ? 'text-chatprimary border-chatprimary' : 'border-transparent'}`}
          onClick={() => setSelectedTab(1)}>
            Profile
        </Link>
        <Link href='#' className={`border-b-2 py-4 text-sm hover:text-chatprimary sm:text-base 
          ${selectedTab === 2 ? 'text-chatprimary border-chatprimary' : 'border-transparent'}`}
          onClick={() => setSelectedTab(2)}
          >
            Update password
        </Link>
       </div>
      {/* Content for tabs */}
      <div>
        <article className={`${selectedTab === 1 ? 'block' : 'hidden'}`}>
          {/* Profile form */}
          Profile form
        </article>
        <article className={`${selectedTab === 2 ? 'block' : 'hidden'}`}>
          {/* Update Password form */}
          Update Password Form
        </article>
      </div>
    </div>
  )
}
