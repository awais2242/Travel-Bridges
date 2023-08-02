import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import SearchWithSuggestion from '@/components/ui/search/search-with-suggestion';
import Link from '@/components/ui/link';
import GroupsTabMenu from './menu/groups-tab';
import LanguageSwitcher from '@/components/ui/language-switcher';
import Banner from '@/components/banners/banner';
import FeatureShopWithProducts from '@/components/layouts/shop/featured-shop';
import { Image } from '@/components/ui/image';
import bannerImageAlt from '@/assets/images/landing-banner-alt.png';

const LandingBody = ({ layout }: { layout: string }) => {
  const { t } = useTranslation('landing');
  let sliders = {
    type: 'landing-page'
  }
  let shops = [
    {
      id: '56',
      heading: 'Bridal Wear',
      limit: 5,
      count: 1,
      paragraph: "We specialize in providing elegant and exquisite bridal gowns for every bride's special day. Our collection features a diverse range of styles, from traditional to modern, to suit every taste and preference. We also offer personalized consultations and alterations to ensure the perfect fit. Discover the bridal dress of your dreams at our boutique and make your wedding day unforgettable."
    },
    {
      id: '11',
      heading: 'Desktops PCs',
      limit: 5, 
      count: 2,
      paragraph: "We offer a wide range of high-performance gaming computers that are designed to take your gaming experience to the next level. Our PCs are built with top-of-the-line components and are optimized for smooth gameplay and fast load times. Whether you're a casual gamer or a professional esports player, we have the perfect gaming PC for you. Shop with us today and get ready to dominate the competition!"
    },
    {
      id: '60',
      heading: 'Adventure Books',
      limit: 5,
      count: 3,
      paragraph: "Embark on thrilling journeys through the pages of our carefully curated selection of adventure books. From pulse-pounding action and suspense to epic tales of exploration and discovery, our books will transport you to new and exciting worlds. Lose yourself in the pages and let your imagination run wild. Start your adventure today!"
    }
  ]
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-light">
      {/* <Banner layout={layout} variables={sliders} /> */}
      <div className='relative h-full max-h-[340px] w-full md:max-h-[610px] lg:mb-7'>
        <Image
          src={bannerImageAlt}
          alt='Banner'
          layout="responsive"
          width={1500}
          height={610}
          className='w-full h-full'
        />
      </div>
      <div className='grid grid-cols-1 lg:mt-20'>
        <div className="container mx-auto px-6 py-8 text-center md:mt-20">
          <h1 className='text-3xl lg:text-[2.75rem] font-semibold leading-7 pt-4 pb-8'>{t('heading-hero')}</h1>
          <p className=''>{t('description-hero')}</p>

        </div>
        <div className='px-5 text-center'>
          <GroupsTabMenu />

        </div>
      </div>
      <div className='text-center pt-20'>
        <h1 className='text-3xl lg:text-[2.75rem] font-semibold leading-4 pt-4 pb-4'>{t('text-featured-shops')}</h1>
      </div>
      {
        shops.map((shop) => (
          <FeatureShopWithProducts
            key={shop.id}
            shopId={shop.id}
            heading={shop.heading}
            paragraph={shop.paragraph}
            count={shop.count}
            limit={shop.limit} />))
      }


    </div>
  );
};

export default LandingBody;
