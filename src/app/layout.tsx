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

import Hamburger from '@/components/Hamburger'
import Cursor from '@/components/Cursor'

export const metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Huann Vicente"
  },
  description: 'Portfolio created by Huann Vicente, with TailwindCSS and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto min-h-screen overflow-x-hidden relative w-screen bg-white selection:bg-white selection:text-lightPrimary`}>
        <Providers>
          <Hamburger />
          <Cursor />
          {children}
        </Providers>
      </body>
    </html >
  )
}
