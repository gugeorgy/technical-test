// src/app/lib/fonts.ts

import localFont from 'next/font/local'

const Loomattic = localFont({
  src: '../../public/fonts/woff2/Loomattic-Regular.woff2',
  display: 'swap',
  variable: '--font-loomattic',
})

const Nunito = localFont({
  src: '../../public/fonts/woff2/Nunito-Regular.woff2',
  display: 'swap',
  variable: '--font-nunito',
})

export { Loomattic, Nunito }
