import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'],
  weight: ['400', '500', '600', '700'], })

export const metadata: Metadata = {
  title: 'SaveDaBucks',
  description: 'Track the price of product effortlessly and get save some bucks for beer.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <main className="max-w-10xl mx-auto" >
          <Navbar />  
          {children}
        </main>
       </body>
    </html>
  )
}
