import React from 'react';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Navbar from '../components/navbar';

import { Loomattic, Nunito } from '@/lib/fonts';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Kangurus - Technical Test',
  description: 'Technical Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${Loomattic.variable} ${Nunito.variable} font-sans`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
