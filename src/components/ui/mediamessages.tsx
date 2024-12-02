import React from 'react'
import { MediaMessage } from '../../../types'
import { Check, CheckCheck } from 'lucide-react'
import MediaMessageGrid from './mediamessagegrid'

export default function MediaMessages ({ message }:{message: MediaMessage}) {
  return message.incoming
    ? (
        <article className='max-w-125'>
            <p className='mb-2.5 text-sm font-medium'>{message.author}</p>
            <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2 space-y-2'>
                {/* Media Msg Grid */}
                <MediaMessageGrid incoming={message.incoming}/>
                <p>{message.caption}</p>
            </div>
            <p className='text-xs font-medium'>{message.timestamp}</p>
        </article>
      )
    : (
        <article className='max-w-125 ml-auto'>
            <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary space-y-2 '>
                 {/* Media Msg Grid */}
                 <MediaMessageGrid incoming={message.incoming}/>
                 <p className='text-white'>{message.caption}</p>
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
