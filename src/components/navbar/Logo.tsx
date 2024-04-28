import React from 'react';
import Banner from '@/components/banner';

import style from './navbar.module.scss';

export default function Logo() {
  return (
    <div className="relative size-header">
      <Banner
        src="/sk-banner.png"
        alt="banner"
        className="w-logo-md h-auto scale-150 absolute top-0 left-0 transform -translate-x-1/2 translate-y-1/4"
      />
    </div>
  );
}
