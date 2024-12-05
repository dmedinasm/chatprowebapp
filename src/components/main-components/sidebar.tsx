'use client'
import { LogOut, MessagesSquare } from 'lucide-react'
import React, { useState } from 'react'
import DarkModeSwitcher from '../ui/darkmodeswitcher'
import { navigation } from '@/lib/data'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Sidebar () {
  const [selected, setSelected] = useState(0)
  const route = useRouter()
  const handleClick = (key: number, path: string) => {
    setSelected(key)
    route.push(path)
  }
  return (
    <aside className='flex flex-col border-r border-stroke p-2 dark:bg-boxdark dark:border-strokedark'>
      <div className='flex flex-col items-center space-y-5'>
        {/* <div className='space-y-2 flex flex-col text-center'>
          <div className='mx-auto border border-stroke rounded-md p-2 dark:border-strokedark'>
            <Shapes size={24} />
          </div>
          <span className='font-medium text-sm'>WorkSpace</span>
        </div> */}
         <Link href={'/'} className='mb-5.5 inline-block'>
         <MessagesSquare size={32} fontWeight={'bold'} className='text-chatprimary' />
        </Link>
        {navigation.map((item) =>
          <li key={item.key} className='flex flex-col text-center space-y-2 hover:cursor-pointer hover:text-chatprimary'
          onClick={() => handleClick(item.key, item.path)}
          >
            <div className={`mx-auto border border-stroke rounded-md p-2 dark:border-strokedark 
              ${selected === item.key && 'bg-chatprimary bg-opacity-90 text-white'} hover:border-chatprimary dark:hover:border-chatprimary`}>
              <item.icon size={24} />
            </div>
            <span className={`font-medium text-sm ${selected === item.key && 'text-chatprimary'}`}>{item.title}</span>
          </li>
        )}
      </div>
      <div className='flex flex-col grow'></div>

      <div className='space-y-4.5'>
        <div className='flex flex-row items-center justify-center'>
        <DarkModeSwitcher />
        </div>

        <button onClick={() => { route.push('/') }} className='flex flex-row items-center justify-center border border-stroke rounded-md p-2 dark:border-strokedark hover:bg-stone-100 cursor-pointer'>
          <LogOut size={24} />
        </button>
      </div>

    </aside>
  )
}

export default Sidebar
