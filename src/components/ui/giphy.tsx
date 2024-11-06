'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import type { IGif } from '@giphy/js-types'
import { useDebouncedCallback } from 'use-debounce'
import { Search } from 'lucide-react'

const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY!)
export default function Giphy () {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isloading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState<Error | null>(null)
  const [gifs, setGifs] = useState<IGif[]>([])
  const fetchGifs = async (offset: number) => {
    return gf.search(value, { offset, limit: 10 })
  }

  const debouncedFetchGifs = useDebouncedCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const newGifs = await fetchGifs(0)
      setGifs(newGifs.data)
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      setIsLoading(false)
    }
  }, 500)

  useEffect(() => {
    // fetch GIFs initially based on Search Term

    const fetchInitialGifs = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const initialGifs = await fetchGifs(0)
        setGifs(initialGifs.data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)))
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialGifs()
  }, [])//eslint-disable-line

  const handleGifClick = (gif: IGif, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const gifUrl = gif.images.original.url
    console.log(gifUrl)
  }
  return (
    <div ref={gridRef} className='w-full mt-3 '>
        <input type='text' placeholder='Search for Gif...'
        className='border border-stroke rounded-md p-2 w-full mb-2 outline-none dark:border-strokedark bg-transparent'
        value={value}
        onChange ={(e) => {
          setValue(e.target.value)
          debouncedFetchGifs()
        }}
        />
        {isloading && <p>Loading GIFs...</p>}
        {error && <p className='text-red'>Error:{error.message}</p>}

        <div className='h-48 overflow-auto no-scrollbar'>
            {
              gifs.length > 0
                ? <Grid width={gridRef.current?.offsetWidth} columns={8} gutter={6} fetchGifs={fetchGifs} key={value} onGifClick={handleGifClick} data={gifs} />
                : <div className='flex flex-col items-center justify-center h-full space-y-2'>
                <Search size={48} fontWeight={500}/>
                <span className='text-xl text-body dark:text-white font-semibold'>Please search for any Gif</span>
                </div>
            }

        </div>
    </div>
  )
}
