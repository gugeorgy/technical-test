// Navbar.tsx
import React from 'react';
import Container from '@/components/utils/container';
import UserProfile from './UserProfile';
import Logo from './Logo';
import Links from './Links';
import MenuButton from './MenuButton';

export default function Navbar() {
  return (
    <header className="fixed h-header left-0 top-0 w-screen z-10">
      <Container>
        <div className="flex justify-between relative">
          <Logo />
          <nav className="absolute bg-darkBlue flex flex-col gap-4 h-max left-0 md:bg-transparent md:flex-row md:h-header md:p-0 md:static p-4 top-0 transform -translate-y-full md:translate-y-0 w-full z-10 md:z-0">
            <Links />
            <UserProfile />
          </nav>
          <MenuButton />
        </div>
      </Container>
    </header>
  );
}
