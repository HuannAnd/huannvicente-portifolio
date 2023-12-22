import './styles/globals.css'
import './styles/typography.css'

import { Montserrat, Syne } from 'next/font/google'

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-syne",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
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
  openGraph: {
    title: "Portifolio",
    description: "A different Next.js portfolio approach, simple, conceptive and smart.",
    siteName: "Huann Vicente",
    url: "https://https://huannvicente-portifolio.vercel.app/",
    images: [
      {
        url: "https://https://huannvicente-portifolio.vercel.app/PortifolioOpenGraphImage.png",
        width: 1280,
        height: 720,
        alt: "Website presentation"
      }
    ],
    locale: "pt-BR",
    type: "website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${syne.variable} w-screen overflow-x-hidden font-montserrat min-h-screen relative bg-[#050505]`}>
        <Providers>
          {/* <Hamburger /> */}
          <Cursor />
          {children}
        </Providers>
      </body>
    </html >
  )
}
