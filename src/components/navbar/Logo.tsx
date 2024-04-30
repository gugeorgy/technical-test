import React from 'react';
import Banner from '@/components/banner';

/**
 * `Logo` is a component that displays a banner image.
 * The banner image is positioned relative to the top left corner of the parent element.
 *
 * @returns {JSX.Element} The Logo component.
 */
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
