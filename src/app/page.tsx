import Buttons from '@/components/home/Buttons';
import Container from '@/components/utils/container';
import Description from '@/components/home/Description';
import Heading from '@/components/home/Heading';

import style from './home.module.scss';

export default function Home() {
  return (
    <main className={`${style.main} flex h-home pt-header`}>
      <Container className="size-full">
        <section className="flex flex-col h-full space-y-1 md:space-y-2">
          <div className="border-l-4 border-lightBlue flex h-header md:flex-1" />
          <div className="bg-yellow rounded-full size-1" />
          <Heading />
          <div className="bg-yellow rounded-full size-1" />
          <div className="bg-lightBlue rounded-full size-1" />
          <Description />
          <div className="bg-yellow h-4 rounded-full w-1" />
          <div className="bg-white rounded-full size-1" />
          <div className="border-l-4 border-lightBlue flex flex-1 px-4">
            <Buttons />
          </div>
        </section>
      </Container>
    </main>
  );
}
