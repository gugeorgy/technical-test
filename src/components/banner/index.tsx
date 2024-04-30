import Image from 'next/image';
import React from 'react';

/**
 * `BannerProps` is a type that defines the properties for the Banner component.
 * It extends the properties of an 'img' element and adds 'src', 'width', and 'height' properties.
 *
 * @typedef {Object} BannerProps
 * @property {string} src - The source URL of the image.
 * @property {number | `${number}`} [width] - The width of the image. Can be a number or a string containing a number.
 * @property {number | `${number}`} [height] - The height of the image. Can be a number or a string containing a number.
 */
type BannerProps = React.ComponentPropsWithoutRef<'img'> & {
  src: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

/**
 * `Banner` is a component that displays an image banner.
 * It uses the Next.js Image component for optimized image loading.
 * The 'src', 'width', and 'height' properties are required, and all other properties of an 'img' element can be used.
 *
 * @param {BannerProps} props - The properties to configure the image banner.
 * @returns {JSX.Element} The Banner component.
 */
export default function Banner(props: BannerProps) {
  return <Image alt="banner" width={500} height={500} {...props} />;
}
