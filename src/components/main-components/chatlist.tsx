import { Search } from 'lucide-react'
import React from 'react'

function ChatList () {
  return (
    <section className='hidden h-full  flex-col lg:flex xl:w-1/4'>
        <div className='sticky border-b border-stroke dark:border-strokedark px-6 py-7.5 flex flex-row'>
            <h3 className='text-lg flex font-medium text-black dark:text-white xl:text-xl'>Active Conversations</h3>
            <span className='rounded-md border-[.5px] border-stroke dark:border-strokedark bg-gray px-2 py-0.5 text-base font-medium text-black dark:bg-boxdark-2 dark:text-white lg:ml-4'>
              8
           </span>
        </div>

        <div className='flex max-h-full overflow-auto p-5'>
            <form className='sticky mb-7'>
                <input type='text' placeholder='Search...' className='w-full rounded border border-stroke dark:border-strokedark bg-gray-2 py-2.5 pl-5 pr-10  font-medium text-black dark:bg-boxdark-2 dark:text-white text-sm outline-none focus:border-chatprimary' />
                <button className='absolute right-4 top-1/2 -translate-y-1/2'>
                 <Search size={20}/>
                </button>
            </form>
        </div>
    </section>
  )
}

export default ChatList
