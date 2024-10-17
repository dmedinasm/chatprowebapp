import React from 'react'
import Sidebar from './sidebar'
import ChatList from './chatlist'

function Messages () {
  return (
    <main className='h-screen overflow-hidden'>
        <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark lg:flex'>
          {/* Sidebar */}
          <Sidebar/>

          {/* ChatList */}
          <ChatList/>

          {/* Inbox */}
        </div>
    </main>
  )
}

export default Messages
