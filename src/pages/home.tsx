import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/settings/contact-form';
import { Image } from '@/components/ui/image';
import contactIllustration from '@/assets/contact-illustration.svg';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
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
import Carousel from '@/components/ui/carousel';
import { usePopularProducts } from '@/framework/product';
import ProductCard from '@/components/products/cards/card';
import PopularProductsGrid from '@/components/products/popular-products';
import Banner from '@/components/banners/banner';
import Categories from '@/components/categories/categories';
import ProductGridHome from '@/components/products/grids/home';
import Label from '@/components/ui/forms/label';
import SectionBlock from '@/components/ui/section-block';
import { PaymentsIcon } from '@/components/icons/payments';
import { PeopleIcon } from '@/components/icons/people';
import { TruckIcon } from '@/components/icons/truck';
import { ConfidenceIcon } from '@/components/icons/confidence';
import { CurrencyDollarIcon } from '@/components/icons/currency-dollar';
import SubscriptionWidget from '@/components/settings/subscribe-to-newsletter-new';
import { Routes } from '@/config/routes';
import { TYPES_PER_PAGE } from '@/framework/client/variables';
import { useTypes } from '@/framework/type';
import homeImage from '@/assets/images/Group 14883.png';

export const HomePage = () => {
  const { t } = useTranslation('common');
  const { settings }: any = useSettings();

  // const { types }: any = useTypes({
  //   limit: TYPES_PER_PAGE,
  // });
  // console.log("data", types);
  let variables = {
    type_slug: 'hafeez-center-lahore',
    limit: 5,
  };
  let productVariables = {
    // shop_id: "11",
    limit: 15,
    page: 1,
    orderBy: 'created_at',
    sortedBy: 'desc',
  };
  let sliders = {
    type: 'old-auriga',
  };
  let categorySectionOne = {
    type: 'old-auriga',
    language: process.env.NEXT_PUBLIC_LANGUAGE,
    // limit: 4,
  };
  let categorySectionTwo = {
    type: 'hafeez-center-lahore',
    language: process.env.NEXT_PUBLIC_LANGUAGE,
    limit: 8,
  };

  return (
    <>
      <Seo title={'Home'} url={'home'} />
      <main className="bg-light">
        <div className="mx-0">
          <div className="grid grid-cols-1 gap-5 2xl:grid-cols-3">    
              <div className="grid grid-cols-1 gap-5 bg-indigo-600 sm:grid-cols-2" >
                {/* <a href={Routes.coupons} className='flex items-center justify-center'>
                  <div className=' bg-gray-200 w-28 h-22 md:w-56 md:h-32 lg:w-72 lg:h-40 bg-offers bg-cover p-5'>
                  <h1 className='text-lg text-white'>Offers</h1>

                  </div>
                </a> */}
                <div className="flex flex-col items-center justify-center">
                  <h1 className="pt-40 text-2xl text-white antialiased lg:text-4xl">
                    Grow Your Business
                  </h1>
                  <h1 className="text-2xl text-teal-400 antialiased pr-8 mr-9 lg:text-3xl lg:mr-28">
                    On WhatsApp
                  </h1>
                  <p className="text-sm px-12 ml-4 mt-4 flex text-white antialiased sm:px-7 lg:px-36 lg:ml-6">
                    Personalize communication And Sell More with TheWhatsApp
                    Business API Platform That Automatesmarketing, Sales,Service
                    And Support
                  </p>
                  <div className='flex justify-center mr-10'>
                  <button className="bg-white mt-20 mb-20 py-0 mr-3 ml-7 px-5 rounded-md ">Buy now</button>
                  <button className="bg-teal-400 mb-20 mt-20 p-2 rounded-md lg:mr-24">Book a demo</button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative mb-20 h-3/4 max-h-[340px] w-4/6 md:max-h-[610px] lg:mb-7 sm:mb-1">
                    <Image
                      src={homeImage}
                      alt="Banner"
                      layout="responsive"
                      width={120}
                      height={125}
                    />
                  </div>
                </div>

                {/* <a href={Routes.coupons} className='flex items-center justify-center'>
                  <div className=' bg-gray-200 w-28 h-22 md:w-56 md:h-32 lg:w-72 lg:h-40 bg-offers bg-cover p-5'>
                    <h1 className='text-lg text-white'>Offers</h1>
                  </div>
                </a> */}
              </div>

              {/* <div className=' grid grid-cols-2 gap-5 2xl:grid-cols-1 '>

                <a href={Routes.searchBookWorld} className='flex items-center justify-center'>
                  <div className=' bg-gray-200 w-28 h-22 md:w-56 md:h-32 lg:w-72 lg:h-40 bg-books-world bg-cover p-5'>
                  <h1 className='text-lg text-white'>Books World</h1>

                  </div>
                </a>

                <a href={Routes.coupons} className='flex items-center justify-center'>
                  <div className=' bg-gray-200 w-28 h-22 md:w-56 md:h-32 lg:w-72 lg:h-40 bg-offers bg-cover p-5'>
                  <h1 className='text-lg text-white'>Offers</h1>

                  </div>
                </a>

                <a href={Routes.searchHafeezCenter} className='flex items-center justify-center'>
                  <div className=' bg-gray-200 w-28 h-22 md:w-56 md:h-32 lg:w-72 lg:h-40 bg-hafeez-center-lahore bg-cover p-5'>
                  <h1 className='text-lg text-white'>Hafeez Center</h1>

                  </div>
                </a>

              </div> */}
            
          </div>
        </div>

        <div className="flex justify-center items-center text-black text-4xl text-bold">Features</div>
        <div className='flex items-center justify-center'>
          Use <p className='text-teal-400 text-bolder'> Wabusinessapi </p>
          To Engage Your Prospects through the WhatsApp Business API
        </div>
              
        

        <div className=" mx-10 my-20 rounded-lg border pb-5 lg:pb-0">
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 divide-x pt-6 md:grid-cols-3 lg:pt-8 lg:pb-8 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 2xl:grid-cols-5">
            <div className="flex items-center justify-center pl-5">
              <div className=" ">
                <CurrencyDollarIcon width={30} />
              </div>
              <div className=" px-2">
                <h1 className="font-semibold text-heading">Free Delivery</h1>
                <p>
                  from $50
                  {/* {t('text-great-value')} */}
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-center pl-5">
              <div className=" ">
                <TruckIcon width={30} />
              </div>

              <div className="px-2">
                <h1 className="font-semibold text-heading">99% Customer</h1>
                <p>
                  Feedbacks
                  {/* {t('text-worldwide-shopping')} */}
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-center pl-5">
              <div className=" ">
                <PaymentsIcon width={30} />
              </div>

              <div className="px-2">
                <h1 className="font-semibold text-heading ">Safe payment</h1>
                <p>
                  for free return
                  {/* {t('text-safe-payment')} */}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center pl-5">
              <div className=" ">
                <ConfidenceIcon width={30} />
              </div>

              <div className="px-2">
                <h1 className="font-semibold text-heading">356 Days</h1>
                <p>
                  Secure System
                  {/* {t('text-shop-with-confidence')} */}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center pl-5">
              <div className=" ">
                <PeopleIcon width={30} />
              </div>
              <div className=" px-2">
                <h1 className="font-semibold text-heading">Only Best Brands</h1>
                <p>
                  Brands
                  {/* {t('text-help-center')} */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <SectionBlock
            title={t('text-clothing-categories')}
            className={'border-b bg-light'}
          >
            <Categories
              layout="standard"
              variables={categorySectionOne}
              title={t('text-clothing-categories')}
              is_link={true}
            />
          </SectionBlock>
        </div>

        <div className="py-10">
          <PopularProductsGrid variables={variables} limit={5} />
        </div>

        <div className="py-5">
          <SectionBlock
            title={t('text-technology-categories')}
            className={'border-b bg-light'}
          >
            <Categories
              layout="standard"
              variables={categorySectionTwo}
              title={t('text-technology-categories')}
              is_link={true}
            />
          </SectionBlock>

          <SectionBlock
            title={t('text-new-arrival')}
            className={'bg-light py-10'}
          >
            <ProductGridHome
              className=""
              variables={productVariables}
              column="five"
              gridClassName=" mx-6 md:mx-16"
              landingPage={true}
            />
          </SectionBlock>
        </div>
      </main>
    </>
  );
};
HomePage.getLayout = getLayoutWithFooter;
export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'landing'])),
    },
  };
};