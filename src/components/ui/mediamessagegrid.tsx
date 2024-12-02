import { images } from '@/lib/data'
import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function MediaMessageGrid ({ incoming }:{incoming:boolean}) {
  const renderImage = () => {
    if (images.length === 1) {
      return (
        <div className='relative col-span-2 row-span-2 rounded-2xl'>
             <Image src={images[0].imgSrc}
             width={100}
             height={100}
             alt="image-media"
             className=" h-full w-full rounded-lg object-cover object-center"/>
             <button className='absolute top-3 right-4 bg-gray/80 dark:bg-boxdark p-2 rounded-md
             hover:opacity-70 hover:text-black dark:hover:text-white'>
                <Download size={20}/>
             </button>
        </div>

      )
    } else if (images.length === 2) {
      return images.map((image) => {
        return <div className='relative col-span-1 row-span-2 rounded-2xl' key={image.key}>
                 <Image src={image.imgSrc}
             width={100}
             height={100}
             alt="image-media"
             className=" h-full w-full rounded-lg object-cover object-center"/>
             <button className='absolute top-3 right-4 bg-gray/80 dark:bg-boxdark p-2 rounded-md
             hover:opacity-70 hover:text-black dark:hover:text-white'>
                <Download size={20}/>
             </button>
            </div>
      })
    } else if (images.length === 3) {
      return (
          <>
            {images.slice(0, 3).map((image) => (
              <div
                key={image.key}
                className="col-span-1 row-span-1 relative rounded-2xl"
              >
                <Image
                  src={image.imgSrc}
                  alt='image-media'
                  width={100}
                  height={100}
                  className="h-full w-full rounded-lg object-cover object-center"
                />
                <button className="absolute top-3 right-4 bg-gray/80 dark:bg-boxdark p-2 rounded-md hover:bg-opacity-80 hover:cursor-pointer hover:text-black dark:hover:text-white">
                  <Download size={20} />
                </button>
              </div>
            ))}
            <div className="col-span-1 row-span-1 relative rounded-2xl">
              <Image
                src={images[2].imgSrc}
                alt='image-media'
                width={100}
                height={100}
                className="h-full w-full rounded-lg object-cover object-center"
              />
              <button className="absolute top-3 right-4 bg-gray/80 dark:bg-boxdark p-2 rounded-md hover:bg-opacity-80 hover:cursor-pointer hover:text-black dark:hover:text-white">
                <Download size={20} />
              </button>
            </div>
          </>
      )
    } else {
      return (
          <>
            {images.slice(0, 3).map((image) => (
              <div
                key={image.key}
                className="col-span-1 row-span-1 relative rounded-2xl"
              >
                <Image
                  src={image.imgSrc}
                  alt='image-media'
                  width={100}
                  height={100}
                  className="h-full w-full rounded-lg object-cover object-center"
                />
                <button className="absolute top-3 right-4 bg-gray/80 dark:bg-boxdark p-2 rounded-md hover:bg-opacity-80 hover:cursor-pointer hover:text-black dark:hover:text-white">
                  <Download size={20} />
                </button>
              </div>
            ))}
            <div className="relative rounded-2xl bg-body/50 flex flex-row items-center justify-center text-xl text-white font-semibold">
              <div>+{images.length - 3}</div>
            </div>
          </>
      )
    }
  }
  return (
    <div className={`grid grid-cols-2 grid-rows-2 pt-4 pb-2 gap-3 rounded-2xl rounded-tl-none ${incoming ? 'bg-gray dark:bg-boxdark-2' : 'bg-transparent'}`}>
        {renderImage()}
    </div>
  )
}
