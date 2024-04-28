import React from 'react';

import './style.scss';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  size?: 'sm' | 'md' | 'lg';
};

export default function Button(props: ButtonProps) {
  const { size, className, ...otherProps } = props;

  return (
    // <button className={`diamond-${size}`} {...props}>
    //   <p className="flex items-center space-x-4">
    //     <span className="circle w-2 h-2 bg-white rounded-full inline-block" />
    //     {props.children}
    //     <span className="circle w-2 h-2 bg-white rounded-full inline-block" />
    //   </p>
    // </button>
    <button
      className={`px-4 py-2 border-2 ${className} rounded-md hover:bg-white hover:bg-opacity-30 transition-colors duration-300 ease-in-out`}
      {...otherProps}
    >
      {props.children}
    </button>
  );
}
