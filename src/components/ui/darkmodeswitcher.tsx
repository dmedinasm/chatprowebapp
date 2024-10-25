'use client'
import useColorMode from '@/hooks/useColorMode'
import { Moon, Sun } from 'lucide-react'
import React from 'react'

function DarkModeSwitcher () {
  const [colorMode, setColorMode] = useColorMode()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof setColorMode === 'function') {
      setColorMode(event.target.checked ? 'dark' : 'light')
    }
  }
  return (
    <li className='list-none'>
        <label htmlFor='' className={`relative m-0 block h-7.5 w-14 rounded-full ${colorMode === 'dark' ? 'bg-chatprimary' : 'bg-stroke'} `}>
            <input type='checkbox'
            className='absolute z-50 top-0 m-0 h-full w-full cursor-pointer opacity-0'
            onChange={handleChange}
            />
            <span className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center 
            justify-center rounded-full
             bg-white duration-75 ease-linear ${colorMode === 'dark' && '!right-[3px] !translate-x-full'}
            `}>
                <span className='dark:hidden'>
                    <Sun size={20}/>
                </span>
                <span className='hidden dark:inline'>
                    <Moon/>
                </span>
            </span>
        </label>
    </li>
  )
}

export default DarkModeSwitcher
