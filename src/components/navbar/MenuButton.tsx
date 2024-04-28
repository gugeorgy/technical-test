// MenuButton.tsx
export default function MenuButton() {
  return (
    <div className="flex items-center justify-center relative md:hidden size-header">
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
