// Links.tsx

import style from './navbar.module.scss';

export default function Links() {
  const links = ['Discover', 'Features', 'Seasons'];
  return (
    <div
      className={`${style.menu} flex flex-1 flex-col gap-4 md:flex-row md:gap-8 items-center text-base`}
    >
      {links.map((link, index) => (
        <a
          key={link}
          href=""
          className={`${
            index === 0 ? style.active : ''
          } font-loomattic uppercase`}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
