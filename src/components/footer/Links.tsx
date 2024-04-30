'use client';

import { User } from '@/lib/schemas';
import { logoutUser } from '@/lib/services';
import { usePathname } from 'next/navigation';

/**
 * `LinksProps` is a type that defines the properties for the Links component.
 * It has a 'user' property that represents the user information.
 *
 * @typedef {Object} LinksProps
 * @property {User} user - The user information.
 */
type LinksProps = {
  /**
   * The user information.
   */
  user: User;
};

/**
 * `Links` is a component that displays a list of links and a logout button if the user is logged in.
 * The 'user' property is used to determine whether to display the logout button.
 *
 * @param {LinksProps} props - The properties to configure the links.
 * @returns {JSX.Element} The Links component.
 */
export default function Links({ user }: LinksProps) {
  const links = ['Home', 'Discover', 'Features', 'Seasons'];
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row space-x-4 sm:flex-col sm:space-x-0">
        {links.map(link => {
          const href = `/${link === 'Home' ? '' : link.toLowerCase()}`;
          const isActive =
            pathname === '/' + link.toLowerCase() ||
            (pathname === '/' && link === 'Home');

          return (
            <a
              key={link}
              href={href}
              className={`hover:text-yellow ${
                isActive ? 'text-yellow' : ''
              }`}
            >
              {link}
            </a>
          );
        })}
      </div>
      {user && (
        <button
          type="button"
          className="text-yellow hover:underline"
          onClick={logoutUser}
        >
          Log out
        </button>
      )}
    </>
  );
}
