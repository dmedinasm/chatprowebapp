import React from 'react'
import { Message } from '../../../types'
export default function TexMessages ({ message }: { message: Message }) {
  return message.incoming
    ? (
    <article className='max-w-125'>
<p className='mb-2.5 text-sm font-medium'>{message.author}</p>
<div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2'>
    <p>{message.content}</p>
</div>
<p className='text-xs font-medium'>{message.timestamp}</p>
</article>
      )
    : (
    <article className='max-w-125 ml-auto'>
<div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary '>
    <p className='text-white'>{message.content}</p>
</div>
<p className='text-xs font-medium'>{message.timestamp}</p>
</article>
      )
}
