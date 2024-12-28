//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
//import 'mdb-react-ui-kit/dist/scss/free/_buttons.scss'

import './sass.scss'
import { Noto_Sans } from 'next/font/google'
import { Overpass_Mono } from 'next/font/google'
import Favicon from '../components/Favicon'
import Appbar from './Appbar'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './globals.css'



import Footer from '@/components/Footer'

export const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans'
});

export const overpass_mono = Overpass_Mono({
  subsets: ['latin'],
  variable: '--font-overpass-mono'
})

export const metadata = {
  title: 'CodeWrite Academy',
  description: 'Programming the Next Generation',
  themeColor: '#ffffff'
}

/*

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossOrigin="anonymous"
    />
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={noto_sans.className}>
        <Appbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
