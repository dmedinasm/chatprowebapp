import { Check, CheckCheck } from 'lucide-react'
import { Message } from '../../../types'
import React from 'react'
import WaveForm from './waveform'

export default function VoiceMessages ({ message }:{message: Message}) {
  return message.incoming
    ? (
    <article className='max-w-125'>
        <div className='mb-2.5 rounded-2xl rounded-tl-none px-5 py-3 bg-gray dark:bg-boxdark-2'>
            <WaveForm incoming={message.incoming}/>
        </div>

         <p className='text-xs font-medium text-right'>{message.timestamp}</p>
    </article>
      )
    : (
    <article className='max-w-125 ml-auto'>
       <div className='mb-2.5 rounded-2xl rounded-br-none px-5 py-3'>
       <WaveForm incoming={message.incoming}/>
        </div>
        <div className='flex flex-row items-center justify-end space-x-2'>
          <div className={`${message.read_recipt !== 'Read' ? 'text-body dark:text-white' : 'text-chatprimary'}`}>
            {message.read_recipt === 'Sent' ? <Check fontWeight='bold' size={16} /> : <CheckCheck fontWeight='bold' size={16} />}
          </div>
          <p className='text-xs font-medium'>{message.timestamp}</p>
        </div>
    </article>
      )
}
