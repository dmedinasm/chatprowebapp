import { Mic, MicOff, PhoneOff, Video, VideoOff } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function VideoRoom ({
  open, handleClose
}:{open:boolean, handleClose:()=>void}) {
  const [muteAudio, setMuteAudio] = useState(false)
  const [muteVideo, setMuteVideo] = useState(false)

  const handleToggleAudio = () => {
    setMuteAudio((prev) => !prev)
  }
  const handleToggleVideo = () => {
    setMuteVideo((prev) => !prev)
  }
  return (
      <dialog className={`left-0 top-0 z-99999 flex h-full min-h-screen w-full
    items-center justify-center bg-black/90 px-4 py-5 ${open ? 'block' : 'hidden'}`}>
          <div className='w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark sm:py-8 px-8 py-12'>
              <div className='flex flex-col space-y-6'>
                  {/* Video Feed Grid */}
                  <div className='grid grid-cols-2 gap-4 h-50 mb-4'>
                      {/* Video Feed 1 */}
                      <div className='relative h-full w-full bg-gray dark:bg-boxdark-2 dark:text-white rounded-md flex items-center justify-center'>
                       <div className='space-y-2'>
                        <Image src='/user/user-01.png' alt='image-avatar' width={80} height={80} className='h-20 w-20 rounded-full object-cover object-center' />
                        <p className='font-medium text-small text-center'>You</p>
                       </div>
                       <div className='absolute top-3 right-4'>
                        {muteAudio && <MicOff size={20} />}
                       </div>
                      </div>
                      {/* Video Feed 2 */}
                      <div className='relative h-full w-full bg-gray dark:bg-boxdark-2 dark:text-white rounded-md flex items-center justify-center'>
                       <div className='space-y-2'>
                        <Image src='/user/user-02.png' alt='image-avatar' width={80} height={80} className='h-20 w-20 rounded-full object-cover object-center' />
                        <p className='font-medium text-sm text-center'>Andrea Smith</p>
                       </div>
                       <div className='absolute text-chatprimary  top-3 right-4'>
                        {<MicOff size={20} />}
                       </div>
                      </div>
                  </div>
                {/* Call controls */}
                <div className='flex flex-row items-center justify-center space-x-4'>
                    {/* Microphone */}
                    <button onClick={handleToggleAudio} className='p-3 rounded-md bg-gray dark:bg-boxdark-2
                    text-black dark:text-white hover:opacity-80 flex items-center justify-center '>
                        {muteAudio ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                    {/* Disconnecting */}
                    <button onClick={handleClose} className='p-3 rounded-full
                    bg-red text-white hover:bg-opacity-80'>
                        <PhoneOff size={20} />
                    </button>
                    {/* Video camera button */}
                    <button onClick={handleToggleVideo} className='p-3 rounded-md bg-gray dark:bg-boxdark-2
                    text-black dark:text-white hover:opacity-80 flex items-center justify-center '>
                        {muteVideo ? <VideoOff size={20} /> : <Video size={20}/> }
                    </button>
                </div>
            </div>
          </div>
      </dialog>
  )
}
