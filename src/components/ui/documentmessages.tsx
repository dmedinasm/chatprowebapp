import React from 'react'
import { Message } from '../../../types'
import { Check, CheckCheck, Download, File } from 'lucide-react'

export default function DocumentMessages ({ message }: { message: Message }) {
  return message.incoming
    ? (
    <div className='max-w-125 w-fit'>
        <p className='mb-2.5 text-sm font-medium capitalize'>{message.author}</p>
        <div className='mb-2.5 rounded-tl-none rounded-2xl px-5 py-3 bg-gray dark:bg-boxdark-2 space-y-2'>
            <div className='flex flex-row items-center justify-between p-2 bg-gray-3 rounded-md dark:bg-boxdark'>
                <div className='flex flex-row items-center space-x-3'>
                    <div className='p-2 rounded-md bg-chatprimary/80 text-white'>
                    <File size={20}/>
                    </div>
                    <div className='flex flex-col'>
                        <p>admin_v1.0.zip</p>
                        <p className='text-sm font-medium'>12.5 MB</p>
                    </div>
                </div>
                <button className='pl-5'>
                    <Download size={20}/>
                </button>
            </div>
            <p className=''>This is some text associated with this msg</p>

        </div>
        <p className='text-xs'>{message.timestamp}</p>
    </div>
      )
    : (
          <div className='max-w-125 w-fit ml-auto'>
              <div className='mb-2.5 rounded-br-none rounded-2xl px-5 py-3 bg-chatprimary text-white space-y-2'>
                  <div className='flex flex-row items-center justify-between p-2 bg-white rounded-md text-chatprimary'>
                      <div className='flex flex-row items-center space-x-3'>
                          <div className='p-2 rounded-md bg-chatprimary/20 text-chatprimary'>
                              <File size={20} />
                          </div>
                          <div className='flex flex-col'>
                              <p>admin_v1.0.zip</p>
                              <p className='text-sm font-medium'>12.5 MB</p>
                          </div>
                      </div>
                      <button className='pl-5'>
                          <Download size={20} />
                      </button>
                  </div>
                  <p className=''>This is some text associated with this msg</p>

              </div>
              <div className='flex flex-row items-center justify-end space-x-2'>
                  <div className={`${message.read_recipt !== 'Read' ? 'text-body dark:text-white' : 'text-chatprimary'}`}>
                      {message.read_recipt === 'Sent' ? <Check fontWeight='bold' size={16} /> : <CheckCheck fontWeight='bold' size={16} />}
                  </div>
                  <p className='text-xs font-medium text-right'>{message.timestamp}</p>
              </div>
          </div>
      )
}
