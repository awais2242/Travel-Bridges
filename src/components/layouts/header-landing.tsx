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
import GroupsDropdownMenu from './menu/groups-menu';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { ArrowRightIcon } from '@/components/icons/arrow-right';
import { useState } from 'react';

const CartCounterIconButton = dynamic(
  () => import('@/components/cart/cart-counter-icon-button'),
  { ssr: false }
);
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderLanding = ({ layout }: { layout: string }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isMultilangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 50 ? setColor(true) : setColor(false);
  };
  typeof window !== "undefined" ? window.addEventListener('scroll', changeColor) : null;

  return (
    <header className={cn('site-header-with-search h-14 md:h-16 lg:h-22')}>
      <div
        className={cn(
          'fixed z-50 flex h-14 w-full items-center justify-between px-4 py-5 transition-transform duration-300 md:h-16 lg:h-22 ltr:lg:pl-12 ltr:lg:pr-8 rtl:lg:pr-12 rtl:lg:pl-8',
          {
            'px-5 lg:!px-12 xl:px-16': layout === 'compact',
          },
          color ? 'bg-[#FE5729] shadow-md' : 'bg-[#FE5729]'
          // color ? 'bg-light shadow-md' : 'bg-light'
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          {/* <Logo className="mx-auto lg:mx-0" /> */}
          <Logo className={`${!isMultilangEnable ? 'mx-auto lg:mx-0' : 'ltr:ml-0 rtl:mr-0'}`} isLandingPage={true}/>

          {isMultilangEnable ? (
            <div className="lg:hidden ltr:ml-auto rtl:mr-auto">
              <LanguageSwitcher />
            </div>
          ) : (
            ''
          )}

          <ul className="hidden shrink-0 items-center space-x-7 ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto rtl:space-x-reverse lg:flex 2xl:space-x-10">
            <StaticMenu className='text-white uppercase font-bold hover:!text-dark' />
            <li className="hidden lg:inline-block xl:hidden">
              <Link
                href={`${router.asPath}search`}
                className="flex items-center font-normal text-heading no-underline transition duration-200"
              >
                {t('text-search')}
              </Link>
            </li>
          </ul>
        </div>

        {displayMobileHeaderSearch && (
          <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
            <SearchWithSuggestion
              label={t('text-search-label')}
              variant="minimal"
              seeMore={true}
            />
          </div>
        )}

        {layout === 'compact' && (
          <div className="mx-auto hidden w-full px-8 xl:flex xl:w-6/12 xl:px-10 xl:rtl:w-4/12 2xl:rtl:w-5/12">
            <SearchWithSuggestion
              label={t('text-search-label')}
              variant="minimal"
              seeMore={true}
            />
          </div>
        )}

        <div>
          <ul className="flex w-full items-center lg:w-auto">
            {/* <StaticMenu /> */}
            <li className="">
              <Link
                href={`${router.asPath}home`}
                className="flex items-center font-normal text-white no-underline transition duration-200 hover:!text-dark"
              >
                {t('text-continue-to-marketplace')}
                <ArrowRightIcon width={18} className='mx-2' />
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default HeaderLanding;
