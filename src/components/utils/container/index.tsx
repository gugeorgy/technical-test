import React from 'react';

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
