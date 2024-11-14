import React from 'react'
import Sidebar from './sidebar'
import ChatList from './chatlist'
import Inbox from './inbox'
import GifModal from '../ui/gifmodal'
import VoiceRecorder from '../ui/voicerecorder'
import MediaPicker from '../ui/mediapicker'
import DocumentPicker from '../ui/documentpicker'

export default function Messages () {
  return (
    <main className='h-screen overflow-hidden '>
        <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark  lg:flex'>
          {/* Sidebar */}
          <Sidebar/>

          {/* ChatList */}
          <ChatList/>

          {/* Inbox */}
          <Inbox/>
        </div>
        <GifModal/>
        <VoiceRecorder/>
        <MediaPicker/>
        <DocumentPicker/>
    </main>
  )
}
