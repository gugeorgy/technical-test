import Container from '../utils/container';
import Banner from '../banner';
import Button from '../utils/button';
import Image from 'next/image';
import Links from './Links';
import FollowUs from './FollowUs';

export default function Footer() {
  return (
    <footer className="bg-darkBlue sm:h-footer text-white text-xs w-screen">
      <Container className="relative">
        <div className="grid h-full sm:grid-cols-3">
          <div className="flex flex-col font-loomattic h-max items-center mt-4 order-2 sm:items-start sm:order-1 sm:space-y-4 uppercase">
            <Links />
            <button type="button" className="text-yellow hover:underline">
              Log out
            </button>
          </div>
          <div className="relative h-24 order-1 sm:order-2">
            <div className="absolute flex flex-col items-center space-y-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
              <div className="size-logo-sm">
                <Banner
                  src="/sk-banner.png"
                  alt="banner"
                  className="size-logo-sm"
                />
              </div>
              <Button className="border-lightBlue font-loomattic text-lightBlue">
                Wishlist On
              </Button>
            </div>
          </div>
          <div className="order-3">
            <div className="flex flex-col items-center mt-4 space-y-2 sm:items-end sm:space-y-8">
              <FollowUs />
              <p className="overflow-auto text-justify text-xxs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/sk-kangaroo.png"
          alt="Space Kangaroo"
          width={400}
          height={400}
          className="absolute top-0 right-0 transform translate-x-1/5 -translate-y-full"
        />
      </Container>
    </footer>
  );
}
