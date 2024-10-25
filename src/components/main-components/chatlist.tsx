import { Search } from 'lucide-react'
import React from 'react'
import { list } from '../../lib/data'
import Image from 'next/image'
function ChatList () {
  return (
    <section className='hidden h-full  flex-col lg:flex xl:w-1/4 dark:bg-boxdark'>
        <div className='sticky border-b border-stroke dark:border-strokedark px-6 py-7.5 flex flex-row'>
            <h3 className='text-lg flex font-medium text-black dark:text-white xl:text-xl'>Active Conversations</h3>
            <span className='rounded-md border-[.5px] border-stroke dark:border-strokedark bg-gray px-2 py-0.5 text-base font-medium text-black dark:bg-boxdark-2 dark:text-white lg:ml-4'>
              8
           </span>
        </div>

        <div className='flex   items-center max-h-full overflow-auto p-5 no-scrollbar'>
            <form className='sticky  mb-7'>
                <input type='text' placeholder='Search...' className='w-full rounded border border-stroke dark:border-strokedark bg-gray-2 py-2.5 pl-5 pr-10  font-medium text-black dark:bg-boxdark-2 dark:text-white text-sm outline-none focus:border-chatprimary' />
                <button className='absolute  right-4 top-1/2 -translate-y-1/2'>
                 <Search size={20}/>
                </button>
            </form>
        </div>
        <div className='no-scrollbar overflow-auto max-h-full '>
          {/* Chat List Item */}
          {
            list.map((user, index) =>
              <div className='flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark' key={index}>
                <div className='relative mr-3.5 h-11 rounded-full'>
                  <Image
                  src={user.imgSrc}
                  alt='profile'
                  width={40}
                  height={40}
                  className='h-full w-full rounded-full object-cover object-center' />
                  <span className='absolute bottom-0 right-0 h-3 w-3 block rounded-full border-2 border-gray-2 bg-success'></span>
                </div>
                <div className=''>
                  <h5 className='text-sm font-medium text-black dark:text-white'>{user.name}</h5>
                  <p className='text-sm'>{user.message}</p>
                </div>
              </div>
            )
          }
        </div>
    </section>
  )
}

export default ChatList
