"use client"

import './globals.css'

import dynamic from 'next/dynamic'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
})

const NavigationContextProvider = dynamic(() => import("@/contexts/NavigationContextProvider"), { ssr: false })
const CursorFollowerProvider = dynamic(() => import("@/contexts/CursorFollowerProvider"), { ssr: true })
const LocomotiveScrollProvider = dynamic(() => import("@/contexts/LocomotiveScrollProvider"), { ssr: true })

export const metadata = {
  title: 'Huann Vicente Portifolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-scroll className={`${roboto.variable} pointer-events-none font-roboto h-screen overflow-x-hidden w-screen bg-black selection:bg-green-200 selection:text-lightPrimary`}>
        <CursorFollowerProvider>
          <LocomotiveScrollProvider context={NavigationContextProvider}>
            {children}
          </LocomotiveScrollProvider>
        </CursorFollowerProvider>
        {/* <Footer /> */}
      </body>
    </html >
  )
}
