'use client';

import { usePathname } from 'next/navigation';
import style from './navbar.module.scss';

/**
 * `Links` is a component that displays a list of links.
 * The links are "Home", "Discover", "Features", and "Seasons".
 * The current link is highlighted with a yellow color.
 *
 * @returns {JSX.Element} The Links component.
 */
export default function Links() {
  const links = ['Home', 'Discover', 'Features', 'Seasons'];

  const pathname = usePathname();

  return (
    <div
      className={`${style.menu} flex flex-1 flex-col gap-4 md:flex-row md:gap-8 items-center text-base`}
    >
      {links.map((link, index) => (
        <a
          key={link}
          href={`/${link === 'Home' ? '' : link.toLowerCase()}`}
          className={`hover:text-yellow ${
            pathname === '/' + link.toLowerCase()
              ? style.active
              : pathname === '/' && link === 'Home'
              ? style.active
              : ''
          } font-loomattic uppercase`}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
