import SectionBlock from './section-block';
import waveTop from '@/assets/images/wave-top.png';
import waveMid from '@/assets/images/wave-mid.png';
import waveBottom from '@/assets/images/wave-bot.png';
import homeImage from '@/assets/images/Group 14883.png';
import Image from 'next/image';
import Button from './button';

const WaveForm2 = () => {
  return (
        <div className="waveWrapper waveAnimation h-auto">
             <section>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-5 bg-indigo-600 sm:grid-cols-2">
              <div className="items-center justify-center">
                <div className="xl:ml-62 mx-8 mt-28 xs:pr-14 md:mt-40 lg:ml-48  lg:mt-28 lg:pr-16 xl:pr-20">
                  <h1 className="flex text-xl text-white antialiased md:text-2xl lg:text-3xl">
                    Grow Your Business
                  </h1>
                  <h1 className="text-xl text-teal-400 antialiased md:text-2xl lg:text-3xl">
                    On WhatsApp
                  </h1>
                  <p className="mt-6 text-sm text-white antialiased xl:pr-9">
                    Personalize communication And Sell More with TheWhatsApp
                    Business API Platform That Automatesmarketing, Sales,Service
                    And Support
                  </p>

                  <div className="my-20   flex h-9 text-sm">
                    <Button className="rounded bg-white px-2 text-indigo-950  shadow-md shadow-black hover:bg-teal-500 hover:text-white xs:px-8">
                      Buy now
                    </Button>
                    <Button className="ml-4 rounded bg-teal-400 px-2 text-indigo-950 shadow-md shadow-black hover:bg-teal-500 hover:text-white xs:px-4 ">
                      Book a demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-28 sm:h-2/6 md:h-3/6 md:max-h-[610px] lg:h-96 ">
                  <Image
                    src={homeImage}
                    alt="Banner"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
          <div className="waveWrapperInner top">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  'url(https://blog.stackfindover.com/wp-content/uploads/2020/11/wave-top.png) ',
              }}
            ></div>
          </div>
          <div className="waveWrapperInner mid">
            <div
              className="wave waveMid"
              style={{
                backgroundImage:
                  'url(https://blog.stackfindover.com/wp-content/uploads/2020/11/wave-mid.png) ',
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  ' url(https://blog.stackfindover.com/wp-content/uploads/2020/11/wave-bot.png) ',
              }}
            ></div>
          </div>
        </div>

  );
};
export default WaveForm2;
