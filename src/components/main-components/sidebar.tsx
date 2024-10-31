'use client'
import { LogOut, Shapes } from 'lucide-react'
import React, { useState } from 'react'
import DarkModeSwitcher from '../ui/darkmodeswitcher'
import { navigation } from '@/lib/data'

function Sidebar () {
  const [selected, setSelected] = useState(0)

  const handleClick = (key: number) => {
    setSelected(key)
  }
  return (
    <aside className='flex flex-col border-r border-stroke p-2 dark:bg-boxdark dark:border-strokedark'>
      <div className='flex flex-col items-center space-y-5'>
        <div className='space-y-2 flex flex-col text-center'>
          <div className='mx-auto border border-stroke rounded-md p-2 dark:border-strokedark'>
            <Shapes size={24} />
          </div>
          <span className='font-medium text-sm'>WorkSpace</span>
        </div>
        {navigation.map((item) =>
          <div key={item.key} className='flex flex-col text-center space-y-2 hover:cursor-pointer hover:text-chatprimary'
          onClick={() => handleClick(item.key)}
          >
            <div className={`mx-auto border border-stroke rounded-md p-2 dark:border-strokedark 
              ${selected === item.key && 'bg-chatprimary bg-opacity-90 text-white'} hover:border-chatprimary dark:hover:border-chatprimary`}>
              <item.icon size={24} />
            </div>
            <span className={`font-medium text-sm ${selected === item.key && 'text-chatprimary'}`}>{item.title}</span>
          </div>
        )}
      </div>
      <div className='flex flex-col grow'></div>

      <div className='space-y-4.5'>
        <div className='flex flex-row items-center justify-center'>
        <DarkModeSwitcher />
        </div>

        <div className='flex flex-row items-center justify-center border border-stroke rounded-md p-2 dark:border-strokedark hover:bg-stone-100 cursor-pointer'>
          <LogOut size={24} />
        </div>
      </div>

    </aside>
  )
}

export default Sidebar
