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
// import { useSettings } from '@/framework/settings';
// export { getStaticProps } from '@/framework/general.ssr';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
import homeImage from '@/assets/images/Group 14883.png';
import Button from '@/components/ui/button';
export const LandingPage = () => {
  // const { settings }: any = useSettings();
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
              {/* <a href={Routes.coupons} className='flex items-center justify-center'>
                  <div className=' bg-gray-200 w-28 h-22 md:w-56 md:h-32 lg:w-72 lg:h-40 bg-offers bg-cover p-5'>
                  <h1 className='text-lg text-white'>Offers</h1>

                  </div>
                </a> */}
              <div className="flex flex-col items-center justify-center">
                <h1 className="pt-40 text-2xl text-white antialiased lg:text-4xl">
                  Grow Your Business
                </h1>
                <h1 className="mr-9 pr-8 text-2xl text-teal-400 antialiased lg:mr-28 lg:text-3xl">
                  On WhatsApp
                </h1>
                <p className="ml-4 mt-4 flex px-12 text-sm text-white antialiased sm:px-7 lg:ml-6 lg:px-36">
                  Personalize communication And Sell More with TheWhatsApp
                  Business API Platform That Automatesmarketing, Sales,Service
                  And Support
                </p>
                <div className="mr-10 flex justify-center">
                  <Button className="mt-20 mb-20 mr-3 ml-7 rounded-md bg-white py-0 px-5 ">
                    Buy now
                  </Button>
                  <Button className="mb-20 mt-20 rounded-md bg-teal-400 p-2 lg:mr-24">
                    Book a demo
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-20 h-3/4 max-h-[340px] w-4/6 pb-10 sm:mb-1 md:max-h-[610px] lg:mb-7">
                  <Image
                    src={homeImage}
                    alt="Banner"
                    layout="responsive"
                    width={120}
                    height={125}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-bold flex items-center justify-center text-4xl text-black">
            Features
          </div>
          <div className="flex items-center justify-center">
            Use <p className="text-teal-400 text-bolder"> Wabusinessapi </p>
            To Engage Your Prospects through the WhatsApp Business API
          </div> */}
          <div className="my-10 flex flex-col items-center justify-center">
          <p className="text-3xl px-6 mx-6 lg:text-4xl">
            Why build a customized marketing solution with
          </p>
          <p className="text-bold text-3xl mr-10 lg:text-4xl">Wabusinessapi?</p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mt-20">
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

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mt-20 ">
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


        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mt-20">
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
        <div className="text-bold flex items-center justify-center text-4xl text-black">
            Features
          </div>
          <div className="flex items-center justify-center">
            Use <p className="text-teal-400 text-bolder"> Wabusinessapi </p>
            To Engage Your Prospects through the WhatsApp Business API
          </div>
        </section>
      </main>
    </>
  );
};
LandingPage.getLayout = getLayoutWithFooter;
export default LandingPage;
