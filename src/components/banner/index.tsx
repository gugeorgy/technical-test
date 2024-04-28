import Image from 'next/image';
import React from 'react';

type BannerProps = React.ComponentPropsWithoutRef<'img'> & {
  src: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

export default function Banner(props: BannerProps) {
  return <Image alt="banner" width={500} height={500} {...props} />;
}
