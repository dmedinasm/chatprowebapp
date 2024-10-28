import { MessagesSquare } from 'lucide-react'
import React from 'react'

function Logo () {
  return (
    <div className='flex flex-row items-center space-x-2'>
        <MessagesSquare size={32} fontWeight={'bold'} />
        <span className='text-2xl font-medium text-body dark:text-white'>ChatPro</span>
    </div>
  )
}

export default Logo
