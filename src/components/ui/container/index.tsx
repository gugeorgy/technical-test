/**
 * `Container` is a component that wraps its children with a div.
 * The div has a maximum width, automatic horizontal margins, and horizontal padding.
 * The 'props' parameter is used to configure the div, such as its class name, click event, etc.
 * The 'children' property is used to display the content of the div.
 *
 * @param {React.ComponentPropsWithoutRef<'div'>} props - The properties to configure the div.
 * @returns {JSX.Element} The Container component.
 */
export default function Container(
  props: React.ComponentPropsWithoutRef<'div'>,
) {
  const { className, ...otherProps } = props;

  return (
    <div
      className={`max-w-screen-md mx-auto px-12 sm:px-16 lg:px-0 ${className}`}
      {...otherProps}
    />
  );
}
