import React, { useEffect, useRef } from 'react'
import Dropzone from 'dropzone'
import { Upload } from 'lucide-react'
export default function FileDropzone ({
  acceptedFiles = 'image/*,video/*',
  maxFileSize = 16 * 1024 * 1024,
  url = '/file/post'
}) {
  const dropZoneRef = useRef<Dropzone | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    Dropzone.autoDiscover = false
    if (!dropZoneRef.current && formRef.current) {
      dropZoneRef.current = new Dropzone(formRef.current, {
        url,
        acceptedFiles,
        maxFilesize: maxFileSize / (1024 * 1024)
      })
    }

    return () => {
      dropZoneRef.current?.destroy()
      dropZoneRef.current = null
    }
  }, [])// eslint-disable-line
  return (
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='p-6.5'>
                <form action={url} ref={formRef} id='upload'
                className='dropzone rounded-md border !border-dashed !border-bodydark1 !bg-gray hover:!border-chatprimary dark:!border-strokedark dark:bg-graydark dark:hover:!border-chatprimary'>
                    <div className='dz-message'>
                    <div className='mb-2.5 flex flex-col justify-center items-center space-y-2'>
                        <div className='shadow-10 flex h-15 w-15 items-center justify-center rounded-full bg-white  dark:bg-black text-black dark:text-white'>
                            <Upload size={20}/>
                        </div>
                        <span className='font-medium text-black dark:text-white'>
                            Drag files here to upload
                        </span>
                    </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
