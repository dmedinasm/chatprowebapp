'use client'
import useGifStore from '@/store/gifStore'
import React, { useEffect, useRef } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

export default function VoiceRecorder () {
  const modalRef = useRef(null)
  const { modals, updatedAudioModal } = useGifStore()
  const modalOpen = modals.audio

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (modalOpen && event.key === 'Escape') {
        updatedAudioModal(false)
      }
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [])// eslint-disable-line

  const recorderControls = useAudioRecorder({
    noiseSuppression: true,
    echoCancellation: true
  }, (err) => console.log(err))

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob)
    const audio = document.createElement('audio')
    audio.src = url
    audio.controls = true

    const targetContainer = document.getElementById('audio-container')
    targetContainer?.appendChild(audio)
  }

  return (
      <dialog ref={modalRef} className={`fixed left-0 top-0 flex z-999999 h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? 'block' : 'hidden'}`}>
          <div className='sm:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark sm:py-8 px-8 py-12'>
            <div id="audio-container" className='flex flex-col space-y-8 items-center'>
                <AudioRecorder
                showVisualizer={true}
                recorderControls={recorderControls}
                onRecordingComplete={(blob) => addAudioElement(blob)}
                downloadOnSavePress={true}
                downloadFileExtension='mp3'
                />
            </div>
            <div className='flex flex-row items-center space-x-4 mt-8'>
                <button className='w-full bg-chatprimary rounded-lg p-2 text-white hover:bg-opacity-90'>Send</button>
                <button onClick={() => updatedAudioModal(false)} className='w-full bg-transparent border border-red text-red rounded-lg p-2  '>Cancel</button>
            </div>
          </div>
      </dialog>
  )
}
