import './styles/globals.css'
import './styles/typography.css'

import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
})

import Providers from '@/contexts/Providers'

export const metadata = {
  title: {
    default: "Portifolio",
    template: "%s | Huann Vicente"
  },
  description: 'Porfiolofio created by Huann Vicente, with TailwindCSS and Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-scroll className={`${roboto.variable} pointer-events-none font-roboto h-screen overflow-x-hidden z-10 w-screen bg-black selection:bg-green-200 selection:text-lightPrimary`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  )
}
