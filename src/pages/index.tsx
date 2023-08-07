import Headertwo from '@/components/layouts/header-wabapi';
import MobileNavigation from '@/components/layouts/mobile-navigation';
import HomePage from './home';
export { getStaticProps } from '@/framework/general.ssr';
import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/settings/contact-form';
import { Image } from '@/components/ui/image';
import contactIllustration from '@/assets/contact-illustration.svg';
// import { getLayoutWithFooter } from '@/components/layouts/layout-with-footer-landing';
import LandingBody from '@/components/layouts/landing-body';
import { formatAddress } from '@/lib/format-address';
import { getIcon } from '@/lib/get-icon';
import isEmpty from 'lodash/isEmpty';
import * as socialIcons from '@/components/icons/social';
import Seo from '@/components/seo/seo';
import { useSettings } from '@/framework/settings';
// export { getStaticProps } from '@/framework/general.ssr';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
import homeImage from '@/assets/images/Group 14883.png';
import circle from '@/assets/images/Ellipse 1974.png';
import dotsRectangle from '@/assets/images/Group 14810.png';
import CurveLines from '@/assets/images/Group 14898.png';
import Button from '@/components/ui/button';
import {ArrowNextIcon} from '@/components/icons/arrow-next';
export const LandingPage = () => {
  const { settings }: any = useSettings();
  return (
    <>
      {/* <LandingBody layout={'compact'}/> */}
      {/* <Headertwo/> */}
      {/* <HomePage/> */}
      {/* <MobileNavigation/> */}
      <Seo title={'Home'} url={'home'} />
      <main className="bg-light">
        <section>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-5 bg-indigo-600 sm:grid-cols-2">
              <div className="items-center justify-center">
                <div className="mx-8 mt-28 xs:pr-14 md:mt-40 lg:ml-48 lg:mt-28  lg:pr-16 xl:ml-72 xl:pr-20">
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
                

                {/* <div className="my-20 ml-8 mr-48 grid grid-cols-1 items-center justify-center xs:grid-cols-2 sm:ml-8  sm:mr-16 lg:ml-48  lg:mr-16 xl:ml-72  xl:mr-32 "> */}
                  <div className='flex   h-9 text-sm my-20' >
                  <Button className="px-2 xs:px-8 text-indigo-950 rounded  bg-white shadow-md shadow-black hover:bg-teal-500 hover:text-white">
                    Buy now
                  </Button>
                  <Button className="px-2 xs:px-4 ml-4 text-indigo-950 rounded bg-teal-400 shadow-md shadow-black hover:bg-teal-500 hover:text-white ">
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

          <div className="my-10 flex flex-col items-center justify-center">
            <p className="mx-6 px-6 text-3xl lg:text-4xl">
              Why build a customized marketing solution with
            </p>
            <p className="text-bold mr-10 text-3xl lg:text-4xl">
              Wabusinessapi?
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="rounded-tl-3xl rounded-br-3xl border-teal-400 px-8 py-6 text-teal-400 shadow-lg shadow-teal-400 outline lg:ml-60">
                Optimized Campagins
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-tl-3xl rounded-br-3xl border-teal-400 px-8 py-6 text-teal-400 shadow-lg shadow-teal-400 outline lg:mr-60">
                Short Time-to-Value
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2 ">
            <div className="flex items-center justify-center">
              <div className="rounded-tl-3xl rounded-br-3xl border-teal-400 px-8 py-6 text-teal-400 shadow-lg shadow-teal-400 outline ">
                Campaigns At Scale
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-tl-3xl rounded-br-3xl border-teal-400 px-10 py-6 text-teal-400 shadow-lg shadow-teal-400 outline ">
                Trusted Platform
              </div>
            </div>
          </div>

          <div className="mt-20 mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="rounded-tl-3xl rounded-br-3xl border-teal-400 px-8 py-6 text-teal-400 shadow-lg shadow-teal-400 outline lg:ml-60">
                Campaigns At Scale
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-tl-3xl rounded-br-3xl border-teal-400 px-10 py-6 text-teal-400 shadow-lg shadow-teal-400 outline lg:mr-60">
                Trusted Platform
              </div>
            </div>
          </div>

      
          <div className='relative top-56 z-20'>
            <Image
              src={dotsRectangle}
              alt="DottedRectangle"
              width={170}
              height={220}
            
            />
            </div>
           
          <div className="grid grid-cols-1 my-20 items-center justify-center md:grid-cols-2  bg-slate-950 ">
            <div className="flex  text-base my-20 mx-44  space-x-2 ">
            
            <Image
              src={circle}
              alt="Circle"
              width={50}
              height={50}
              className='relative top-10 left-40 md:top-16 md:left-40 z-20'
            />
            
             <div className='relative  bottom-16 right-10 md:top-16 md:left-40 z-20'>
            <Image
              src={circle}
              alt="Circle"
              width={50}
              height={50}
            
            />
            </div>
            <span className="mr-1 text-2xl text-white">Join</span>
            <span className="mr-1 text-2xl text-white">The</span>
            <span className="text-2xl text-teal-400">WaBusinessapi</span>

              
            </div>
            <div className=" relative flex h-10 items-center justify-center text-sm pb-10 md:pb-0 ">
              <Button className="rounded bg-teal-400 px-6 py-3 text-indigo-950 shadow-sm shadow-teal-400 hover:bg-teal-500 hover:text-white">
                Get started
              </Button>
              <Button className="rounded ml-4 bg-white px-6 py-2 text-indigo-950 shadow-sm shadow-teal-400 hover:bg-teal-500 hover:text-white ">
                sign up free
                <ArrowNextIcon></ArrowNextIcon>
              </Button>
              <div className='absolute  top-0 right-0  z-20 transform translate-x-1/3 -translate-y-64 md:translate-x-1/3 md:-translate-y-36 '>
            <Image
              src={CurveLines}
              alt='footerIamge'
              width={250}
              height={200}
            />
        </div>
            </div>
            
          </div>
          
       
        </section>
      </main>
    </>
  );
};
LandingPage.getLayout = getLayoutWithFooter;
export default LandingPage;
