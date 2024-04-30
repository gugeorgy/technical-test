/**
 * `Heading` is a component that displays two headings.
 * The first heading is "Space" and the second heading is "Kangurus".
 *
 * @returns {JSX.Element} The Heading component.
 */
export default function Heading() {
  return (
    <div className="font-loomattic uppercase">
      <h2 className="sm:text-3xl text-3xl text-yellow">Space</h2>
      <h2 className="sm:text-6xl text-6xl text-lightBlue">Kangurus</h2>
    </div>
  );
}
