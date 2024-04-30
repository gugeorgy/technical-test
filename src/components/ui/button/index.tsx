import React from 'react';

/**
 * `Button` is a component that displays a button.
 * The button has a border, rounded corners, and a hover effect.
 * The 'props' parameter is used to configure the button, such as its class name, click event, etc.
 * The 'children' property is used to display the content of the button.
 *
 * @param {React.ComponentPropsWithoutRef<'button'>} props - The properties to configure the button.
 * @returns {JSX.Element} The Button component.
 */
export default function Button(
  props: React.ComponentPropsWithoutRef<'button'>,
) {
  const { className, ...otherProps } = props;

  return (
    <button
      className={`px-4 py-2 border-2 font-loomattic ${className} rounded-md hover:bg-white hover:bg-opacity-30 transition-colors duration-300 ease-in-out`}
      {...otherProps}
    >
      {props.children}
    </button>
  );
}
