import React from 'react'
import { Message } from '../../../types'
import extractLinks from '@/utils/extractLinks'
import Microlink from '@microlink/react'
export default function TexMessages ({ message }: { message: Message }) {
  const { links, originalString } = extractLinks(message.content)
  return message.incoming
    ? (
      <article className='max-w-125'>
        <p className='mb-2.5 text-sm font-medium'>{message.author}</p>
        <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2 space-y-2'>
          <p dangerouslySetInnerHTML={{ __html: originalString }}></p>
          {links.length > 0 && <Microlink style={{ width: '100%' }} url={links[0]} />}
        </div>
        <p className='text-xs font-medium'>{message.timestamp}</p>
      </article>
      )
    : (
      <article className='max-w-125 ml-auto'>
        <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary space-y-2 '>
          <p className='text-white' dangerouslySetInnerHTML={{ __html: originalString }}></p>
        </div>
        <p className='text-xs font-medium'>{message.timestamp}</p>
      </article>
      )
}
