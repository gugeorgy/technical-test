import localFont from 'next/font/local'

/**
 * `Loomattic` is a local font loaded from a .woff2 file.
 * It uses font-display: swap to avoid invisible text during loading.
 * The font is accessible via the CSS variable --font-loomattic.
 */
const Loomattic = localFont({
  src: '../../public/fonts/woff2/Loomattic-Regular.woff2',
  display: 'swap',
  variable: '--font-loomattic',
})

/**
 * `Nunito` is a local font loaded from a .woff2 file.
 * It uses font-display: swap to avoid invisible text during loading.
 * The font is accessible via the CSS variable --font-nunito.
 */
const Nunito = localFont({
  src: '../../public/fonts/woff2/Nunito-Regular.woff2',
  display: 'swap',
  variable: '--font-nunito',
})

export { Loomattic, Nunito }
