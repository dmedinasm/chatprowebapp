'use client'
import { Pause, Play } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

export default function WaveForm ({ incoming }: { incoming: boolean }) {
  const waveformRef = useRef(null)
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')

  useEffect(() => {
    if (waveformRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#3c50e0',
        progressColor: '#80caee',
        url: '/file_example.mp3',
        renderFunction: (channels, ctx) => {
          const { width, height } = ctx.canvas
          const scale = channels[0].length / width
          const step = 6

          ctx.translate(0, height / 2)
          ctx.strokeStyle = ctx.fillStyle
          ctx.beginPath()

          for (let i = 0; i < width; i += step * 2) {
            const index = Math.floor(i * scale)
            const value = Math.abs(channels[0][index])
            let x = i
            let y = value * height

            ctx.moveTo(x, 0)
            ctx.lineTo(x, y)
            ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true)
            ctx.lineTo(x + step, 0)

            x = x + step
            y = -y
            ctx.moveTo(x, 0)
            ctx.lineTo(x, y)
            ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false)
            ctx.lineTo(x + step, 0)
          }

          ctx.stroke()
          ctx.closePath()
        }
      })

      ws.on('ready', () => {
        const totalDuration = ws.getDuration()
        setDuration(formatTime(totalDuration))
      })

      ws.on('audioprocess', () => {
        const currentTime = ws.getCurrentTime()
        setCurrentTime(formatTime(currentTime))
      })

      ws.on('finish', () => {
        setIsPlaying(false)
        setCurrentTime(formatTime(0))
      })
      setWaveSurfer(ws)
      return () => {
        ws.destroy()
      }
    }
  }, [])//eslint-disable-line

  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }
  const handlePlay = () => {
    if (waveSurfer) {
      if (isPlaying) {
        waveSurfer.pause()
      } else {
        waveSurfer.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  return (
    <div className={`flex flex-row items-center space-x-6 p-2 rounded-md ${incoming ? 'bg-gray-3 dark:bg-boxdark' : 'bg-transparent'}`}>
        <button onClick={handlePlay} className='bg-gray dark:bg-boxdark-2 rounded-full h-16 w-16 flex flex-row items-center justify-center'>
            {isPlaying ? <Pause size={20} fontWeight='bold' /> : <Play size={20} fontWeight='bold' />}
       </button>
          <div className='grow flex flex-col space-x-1'>
              <div className='w-full !z-0' ref={waveformRef} style={{ overflow: 'hidden' }}>

              </div>
              <div className='text-sm'>
                  {currentTime} / {duration}
              </div>
          </div>

    </div>
  )
}
