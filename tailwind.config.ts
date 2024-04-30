import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#34febc',
        darkBlue: '#030d12',
        yellow: '#ffde00',
        white: '#ffffff',
      },
      spacing: {
        header: '4rem',
        footer: '10rem',
        'footer-sm': '14rem',
        'logo-md': '6rem',
        'logo-sm': '4rem',
        home: 'calc(100vh - 14rem)',
        'home-sm': 'calc(100vh - 9rem)',
        'home-short': 'max-content',
        userProfile: '3.5rem',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      scale: {
        140: '1.4',
        120: '1.2',
      },
      fontFamily: {
        loomattic: ['var(--font-loomattic)', 'sans'],
        nunito: ['var(--font-nunito)', 'sans'],
      },
    }
  },
  plugins: [],
};

export default config;
