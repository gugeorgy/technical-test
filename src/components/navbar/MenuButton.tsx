/**
 * `MenuButtonProps` is a type that defines the properties for the MenuButton component.
 * It has an 'onOpen' property that is a function to open the menu.
 *
 * @typedef {Object} MenuButtonProps
 * @property {() => void} onOpen - The function to open the menu.
 */
type MenuButtonProps = {
  onOpen: () => void;
};

/**
 * `MenuButton` is a component that displays a menu button.
 * The menu button is only visible on small screens.
 * The 'onOpen' property is a function to open the menu.
 *
 * @param {MenuButtonProps} props - The properties to configure the menu button.
 * @returns {JSX.Element} The MenuButton component.
 */
export default function MenuButton({ onOpen }: MenuButtonProps) {
  return (
    <div
      onClick={onOpen}
      className="flex items-center justify-center relative md:hidden size-header"
    >
      <button
        type="button"
        className="absolute right-0 text-2xl text-lightBlue top-2/4 transform translate-x-2/4 -translate-y-2/4"
        aria-label="menu"
      >
        ☰
      </button>
    </div>
  );
}
