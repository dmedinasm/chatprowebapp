'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Mic, Phone, Send, Video } from 'lucide-react'
import Dropdown from '../ui/dropdown'
import EmojiPicker from '../ui/emojipicker'
import UserInfo from './userinfo'
import Giphy from '../ui/giphy'
import { PixelarticonsGif } from '../ui/gif'
import useGifStore from '@/store/gifStore'
import Attachment from '../ui/attachment'
import MessageSeparator from '../ui/messageseparator'
import TypingIndicator from '../ui/typingindicator'
import TextMessages from '../ui/textmessages'
import DocumentMessages from '../ui/documentmessages'
import VoiceMessages from '../ui/voicemessages'
import MediaMessages from '../ui/mediamessages'
import VideoRoom from '../ui/videoroom'
import AudioRoom from '../ui/audioroom'

function Inbox () {
  const { updatedAudioModal } = useGifStore()
  const [userInfoOpen, setUserInfoOpen] = useState(false)
  const [videoCall, setVideoCall] = useState(false)
  const [audioCall, setAudioCall] = useState(false)
  const [gifOpen, setGifOpen] = useState(false)

  const handleToggleVideo = () => {
    setVideoCall((prev) => !prev)
  }
  const handleToggleAudio = () => {
    setAudioCall((prev) => !prev)
  }
  const handleToggleGif = (e:React.MouseEvent<HTMLButtonElement >) => {
    e.preventDefault()
    setGifOpen((prev) => !prev)
  }
  const handleUserInfoOpen = () => {
    setUserInfoOpen((prev) => !prev)
  }
  const handleMicClick = (e:React.MouseEvent<HTMLButtonElement >) => {
    e.preventDefault()
    updatedAudioModal(true)
  }
  return (
    <>
    <section className={`flex flex-col h-full border-l border-stroke dark:bg-boxdark dark:border-strokedark lg:w-3/4 ${userInfoOpen ? 'lg:w-1/2' : 'lg:w-3/4'}`}>
        {/* Chat Header */}
        <header className='sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5'>
            <div className='flex items-center cursor-pointer' onClick={handleUserInfoOpen}>
                <div className='mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full'>
                    <Image src='/user/user-01.png' alt='avatar' width={40} height={40} className='h-full w-full object-cover object-center' />
                </div>
                <div>
                    <h5 className='font-medium text-black dark:text-white'>
                        Henry Dholi
                    </h5>
                    <p className='text-sm'>Reply to message</p>
                </div>
            </div>
            <div className='flex flex-row items-center space-x-8'>
                <button onClick={handleToggleVideo}>
                    <Video size={24}/>
                </button>
                <button onClick={handleToggleAudio}>
                    <Phone size={20}/>
                </button>
            <Dropdown />
            </div>

        </header>
        {/* list of messages */}
        <div className='max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow'>
           <TextMessages message={
               {
                 incoming: false,
                 author: 'Andri Thomas',
                 timestamp: '1:55 pm',
                 read_recipt: 'Delivered',
                 content: 'I want to make an appointment tomorrow from 2:00 pm to 5:00 pm? to talk about https://npmjs.com'
               }
           } />
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary '>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>

            <MessageSeparator date='Today'/>
            <DocumentMessages message={
                {
                  incoming: true,
                  author: 'Andri Thomas',
                  timestamp: '1:55 pm',
                  read_recipt: 'Delivered',
                  content: 'I want to make an appointment tomorrow from 2:00 pm to 5:00 pm? to talk about https://npmjs.com'
                }
            }/>

            <VoiceMessages message={{
              incoming: false,
              author: 'Andri Thomas',
              timestamp: '4:55 pm',
              read_recipt: 'Read',
              content: ''
            }
            }/>

            <MediaMessages message={{
              incoming: true,
              author: 'Andri Thomas',
              timestamp: '4:55 pm',
              read_recipt: 'Read',
              content: '',
              assets: ['https://images.unsplash.com/photo-1678489820694-df1b1388dd6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'],
              caption: 'This is a beautiful car'
            }
            }/>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary '>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary '>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
            <article className='max-w-125'>
                <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
                <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
                    <p>I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
                </div>
                <p className='text-xs font-medium'>1:55 pm</p>
            </article>
            <article className='max-w-125 ml-auto'>
                <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary '>
                    <p className='text-white'>Hello, I will check my schedule and inform you</p>
                </div>
                <p className='text-xs font-medium'>1:57 pm</p>
            </article>
            <TypingIndicator/>
        </div>
        {/* input section */}
        <div className='sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark'>
            <form className='flex items-center justify-between space-x-4.5'>
                <div className='relative  w-full'>
                    <input type='text' placeholder='Type something here...' className='h-11 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-chatprimary dark:border-strokedark dark:bg-boxdark-2 dark:text-white' />
                    <div className='absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-end space-x-4'>
                     <button onClick={handleMicClick} className='hover:text-chatprimary'>
                        <Mic size={20} />
                     </button>
                        <Attachment/>
                     <button onClick={handleToggleGif}>
                        <PixelarticonsGif />
                     </button>
                        <EmojiPicker/>
                    </div>
                </div>
                <button className='flex items-center justify-center h-11 max-w-11 w-full bg-chatprimary text-white hover:bg-chatprimary rounded-lg hover:bg-opacity-90'><Send size={20}/></button>
            </form>
            {gifOpen && <Giphy/>}
        </div>
    </section>
    {videoCall && <VideoRoom open={videoCall} handleClose={handleToggleVideo}/>}
    {audioCall && <AudioRoom open={audioCall} handleClose={handleToggleAudio}/>}
    {userInfoOpen &&
    <div className='w-1/4'>
        <UserInfo handleToggleUserInfo={handleUserInfoOpen}/>
    </div>

    }

    </>

  )
}

export default Inbox
