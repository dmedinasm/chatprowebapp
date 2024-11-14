import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'ChatPro',
  description: 'Aplicación de chat profesional'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="es">
        <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"
          type="text/css"
        />
        </head>
      <body className={`${inter.variable}  font-sans antialiased`}>
        {children}
      </body>
    </html>

  )
}
