import React from 'react';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Navbar from '../components/navbar';

import { Loomattic, Nunito } from '@/lib/fonts';

import '@/styles/globals.scss';
import { cookies } from 'next/headers';
import { getPlayerInfo } from '@/lib/services';

/**
 * Metadata for the page.
 */
export const metadata: Metadata = {
  title: 'Kangurus - Technical Test',
  description: 'Technical Test',
};

/**
 * Props for the RootLayout component.
 */
type RootLayoutProps = {
  /**
   * The children to display inside the RootLayout.
   */
  children: React.ReactNode;
};

/**
 * A layout component that wraps the entire application.
 *
 * @param {RootLayoutProps} props - The props to pass to the component.
 */
export default async function RootLayout({ children }: RootLayoutProps) {
  // Fetch the player ID from the cookies.
  const playerIdCookie = cookies().get('playerId');
  const playerId = playerIdCookie?.value;

  // Fetch the user information using the player ID.
  const user = await getPlayerInfo(playerId);

  // Render the layout with the Navbar, children, and Footer.
  return (
    <html
      lang="en"
      className={`${Loomattic.variable} ${Nunito.variable} font-sans`}
    >
      <body className='antialiased'>
        <Navbar user={user} />
        {children}
        <Footer user={user} />
      </body>
    </html>
  );
}
