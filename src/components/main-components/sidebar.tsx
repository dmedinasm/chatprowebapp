import { LogOut, MessageSquare } from 'lucide-react'
import React from 'react'

function Sidebar () {
  return (
     <aside className='flex flex-col border-r border-stroke p-2 dark:border-strokedark'>
        <div className='mx-auto border border-stroke rounded-md p-2 dark:border-strokedark'>
            <MessageSquare size={24}/>
        </div>
        <div className='flex flex-col grow'></div>

        <div className=''>
        <div className='mx-auto border border-stroke rounded-md p-2 dark:border-strokedark hover:bg-stone-100 cursor-pointer'>
            <LogOut size={24}/>
        </div>
        </div>

    </aside>
  )
}

export default Sidebar
