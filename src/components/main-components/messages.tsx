import React from 'react'
import Sidebar from './sidebar'

function Messages () {
  return (
    <div className='h-screen overflow-hidden'>
        <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark lg:flex'>
          {/* Sidebar */}
          <Sidebar/>
          {/* ChatList */}

          {/* Inbox */}
        </div>
    </div>
  )
}

export default Messages
