export { getStaticProps } from '@/framework/general.ssr';
import { Image } from '@/components/ui/image';
import Seo from '@/components/seo/seo';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
import aboutImage from '@/assets/images/Group 14987.png';
import visionImage from '@/assets/images/Group 14978.png';
import { about } from '@/framework/static/about';
import blendGroup from '@/assets/images/Blend Group 1.png';
import Card from '@/components/ui/cards/card';
import SectionBlock from '@/components/ui/section-block';
export const AboutUs = () => {
  return (
    <>
      <Seo title={'About'} url={'about'} />
      <main className="bg-light">
        <section>
          <div className="grid grid-cols-1">
            <div className="relative grid grid-cols-1 gap-5 bg-gradient-to-r  from-indigo-400 to-teal-200 sm:grid-cols-2">
              <div className="absolute  top-14 left-0  z-20 -translate-x-1/3 -translate-y-10 transform overflow-hidden">
                <Image
                  src={blendGroup}
                  alt="footerIamge"
                  width={270}
                  height={230}
                />
              </div>
              <div className="items-center justify-center">
                <div className="pt-64 pl-10 pr-4 sm:pl-20  sm:pb-10  lg:pl-52 lg:pt-36 lg:pr-2 xl:pr-10">
                  <p className="test-xs">About Wabusiness-Api</p>
                  <div className='flex flex-col'>
                  <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Wabusiness-Api</h1>
                  <h1 className="flex text-xl font-semibold antialiased md:text-2xl lg:text-3xl">
                    {about.aboutHeading}
                  </h1>
                  </div>
                  <p className="mt-6 text-md text-slate-900 antialiased ">
                    {about.aboutDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center sm:pt-40 md:pt-48 lg:pr-36 lg:pt-20">
                <div className="relative mb-4 w-80 sm:mb-28 sm:h-2/6  md:h-3/6 md:max-h-[610px] md:w-96 lg:h-3/6   xl:h-96 xl:w-full 2xl:h-2/6">
                  <Image
                    src={aboutImage}
                    alt="Banner"
                    width={650}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* {//////////////////////////////////////////////////////} */}

          <div className=" grid grid-cols-1 lg:grid-cols-2">
            <div className="pl-20 flex flex-col items-center justify-center pt-20  sm:pt-10 lg:pt-20  ">
              <div className="  w-80 sm:h-5/6 sm:w-96   md:w-96 lg:h-2/6 lg:w-full xl:h-96 xl:w-full lg:ml-20 xl:ml-36">
                <Image
                  src={visionImage}
                  alt="Banner"
                  width={650}
                  height={550}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="pl-4 pb-8 pr-10   sm:pb-10  lg:pr-24 xl:pr-72 lg:pt-36 lg:pl-2 ">
                <div className='pl-4 flex flex-col sm:items-center sm:justify-center lg:items-start lg:pl-0 '>
                  <p className="text-xl font-semibold py-2">Our Vision</p>
                  <h1 className="flex lg:pr-6 text-2xl font-bold   antialiased md:text-2xl lg:text-3xl">
                    {about.vision}
                  </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 px-4 lg:px-0">
                  <div className='sm:px-2 lg:px-0'>
                    <p className="text-xl pt-14 pb-2 font-bold text-teal-400 ">
                      Who We Are
                    </p>
                    <p className="text-md text-slate-600 antialiased ">
                      {about.whoWeAre}
                    </p>
                  </div>
                  <div className='sm:px-2 lg:px-0'>
                    <p className="text-xl pt-14 pb-2 font-bold text-teal-400">
                      Our Mission
                    </p>
                    <p className=" text-md text-slate-600 antialiased ">
                      {about.ourMission}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionBlock title="" className={'bg-light py-10 '}>
            <div className="flex flex-col items-center justify-center text-4xl font-bold">
              What We Offer
            </div>

            <div className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2   lg:mt-20 lg:gap-x-16 lg:gap-y-8">
              {about.policy?.map((card, index) => (
                <Card
                  className="items-center justify-center rounded-tl-4xl text-center shadow-500 shadow-black rounded-br-4xl bg-gradient-to-r  from-indigo-400   to-teal-100     lg:h-48  lg:w-96 "
                  key={`${index}`}
                >
                  <div className=" font-bold text-xl">{card.title}</div>
                  <div className='text-md '>{card.paragraph}</div>
                </Card>
              ))}
            </div>
          </SectionBlock>
        </section>
      </main>
    </>
  );
};
AboutUs.getLayout = getLayoutWithFooter;
export default AboutUs;
