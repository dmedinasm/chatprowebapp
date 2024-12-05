import Sidebar from '@/components/main-components/sidebar'
import DocumentPicker from '@/components/ui/documentpicker'
import GifModal from '@/components/ui/gifmodal'
import MediaPicker from '@/components/ui/mediapicker'
import VoiceRecorder from '@/components/ui/voicerecorder'

export default function DashboardLayout ({
  children
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (

        <main className='h[calc(100vh)] h-screen overflow-hidden ss:h-screen'>
            <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark  lg:flex'>
                {/* Sidebar */}
                <Sidebar/>
                {children}
            </div>
            <GifModal />
            <VoiceRecorder />
            <MediaPicker />
            <DocumentPicker />
        </main>

  )
}
