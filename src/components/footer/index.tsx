import { BiLogoSteam } from 'react-icons/bi';

import Container from '../ui/container';
import Banner from '../banner';
import Button from '../ui/button';
import Image from 'next/image';
import Links from './Links';
import FollowUs from './FollowUs';
import { User } from '@/lib/schemas';

/**
 * `FooterProps` is a type that defines the properties for the Footer component.
 * It has a 'user' property that represents the user information.
 *
 * @typedef {Object} FooterProps
 * @property {User} user - The user information.
 */
type FooterProps = {
  /**
   * The user information.
   */
  user: User;
};

/**
 * `Footer` is a component that displays a footer with links, a banner, a button, and a follow us section.
 * The 'user' property is passed to the Links component.
 *
 * @param {FooterProps} props - The properties to configure the footer.
 * @returns {JSX.Element} The Footer component.
 */
export default function Footer({ user }: FooterProps) {
  return (
    <footer className="w-screen text-xs text-white bg-darkBlue sm:h-footer">
      <Container className="relative">
        <div className="grid h-full sm:grid-cols-3">
          <div className="flex flex-col items-center mt-4 uppercase font-loomattic h-max order-2 sm:items-start sm:order-1 sm:space-y-4">
            <Links user={user} />
          </div>
          <div className="relative h-24 order-1 sm:order-2">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col items-center space-y-2">
              <div className="size-logo-sm">
                <Banner
                  src="/sk-banner.png"
                  alt="banner"
                  className="size-logo-sm"
                />
              </div>
              <Button className="flex items-center space-x-2 text-lightBlue border-lightBlue">
                <span>Wishlist on</span>
                <BiLogoSteam />
              </Button>
            </div>
          </div>
          <div className="order-3">
            <div className="flex flex-col items-center mt-4 space-y-2 sm:items-end sm:space-y-8">
              <FollowUs />
              <p className="text-justify text-xxs overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/sk-kangaroo.png"
          alt="Space Kangaroo"
          width={400}
          height={400}
          className="absolute top-0 right-0 transform translate-x-1/5 -translate-y-full -z-10"
        />
      </Container>
    </footer>
  );
}
