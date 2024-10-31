import { Clock, EllipsisVertical, MessageSquare, Video, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function UserInfo ({ handleToggleUserInfo }: {handleToggleUserInfo:() => void}) {
  return (
      <section className='border-l border-stroke dark:border-strokedark dark:bg-boxdark flex flex-col h-full'>
          <header className='border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-7.5'>
              <h3 className='text-black dark:text-white font-semibold'>Profile</h3>
              <button onClick={handleToggleUserInfo} className='text-black dark:text-white'>
                  <X size={20} />
              </button>
          </header>
          <div className='mx-auto my-8'>
              <Image src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='user-01' width={400} height={400} className='w-44 h-auto object-cover object-center rounded-lg' />
          </div>
          <div className='px-6 space-y-1'>
              <p className='text-black dark:text-white text-xl font-medium'>
                  Blake Jonathan
              </p>
              <span className='text- text-md'>Sales Manager</span>

          </div>
          <div className='px-6 my-6'>
              <div className='flex flex-row items-center space-x-2'>
                  <Clock size={20} />
                  <p>6:50 AM local time</p>
              </div>
          </div>
          <div className='px-6 flex flex-row space-x-2'>
          <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex items-center justify-center'>
                <MessageSquare size={18} className='mr-2' />
                Message
            </button>
            <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex items-center justify-center'>
                <Video size={20} className='mr-2' />
                Hudle
            </button>
            <button className=' border border-stroke dark:border-strokedark p-2 rounded-md '>
                <EllipsisVertical size={18} />
            </button>

          </div>
      </section>
  )
}

export default UserInfo
