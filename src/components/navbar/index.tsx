'use client';

import React from 'react';
import Container from '@/components/ui/container';
import Modal from '@/components/modal';
import { User } from '@/lib/schemas';
import LoginPage from '../auth/signin';
import UserProfile from './UserProfile';
import MenuButton from './MenuButton';
import Logo from './Logo';
import Links from './Links';

/**
 * `NavbarProps` is a type that defines the properties for the Navbar component.
 * It has a 'user' property that represents the user information.
 *
 * @typedef {Object} NavbarProps
 * @property {User} user - The user information.
 */
type NavbarProps = {
  /**
   * The user information.
   */
  user: User;
};

/**
 * `Navbar` is a component that displays a navigation bar.
 * The navigation bar includes a logo, links, a menu button, and a user profile or login button.
 * The 'user' property is used to determine whether to display the user profile or login button.
 *
 * @param {NavbarProps} props - The properties to configure the navigation bar.
 * @returns {JSX.Element} The Navbar component.
 */
export default function Navbar({ user }: NavbarProps) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed h-header left-0 top-0 w-screen z-10 bg-darkBlue bg-opacity-50 backdrop-blur-sm">
      <Container>
        <div className="flex justify-between relative">
          <Logo />
          <nav
            className={`${
              isMenuOpen ? 'translate-y-1' : '-translate-y-full'
            } transition-all fixed bg-darkBlue flex flex-col gap-4 h-max left-0 md:bg-transparent md:flex-row md:h-header md:p-0 md:static p-4 top-0 transform md:translate-y-0 w-full z-10 md:z-0`}
          >
            <Links />
            {user ? (
              <UserProfile user={user} />
            ) : (
              <button
                type="button"
                className="text-lightBlue"
                onClick={() => {
                  setMenuOpen(false);
                  setModalOpen(true);
                }}
              >
                Log In
              </button>
            )}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              X
            </button>
          </nav>
          <MenuButton onOpen={() => setMenuOpen(true)} />
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <LoginPage />
      </Modal>
    </header>
  );
}
