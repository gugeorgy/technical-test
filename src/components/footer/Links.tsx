// Links.tsx
export default function Links() {
  const links = ['Home', 'Discover', 'Features', 'Seasons'];
  return (
    <div className="flex flex-row space-x-4 sm:flex-col sm:space-x-0">
      {links.map(link => (
        <a key={link} href="#" className="hover:text-yellow">
          {link}
        </a>
      ))}
    </div>
  );
}
