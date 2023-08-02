import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useMemo, useState } from 'react';
import GroupsDropdownMenu from './menu/groups-menu';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { motion } from 'framer-motion';
import { drawerAtom } from '@/store/drawer-atom';
import { NavbarIcon } from '@/components/icons/navbar-icon';
import { useIsRTL } from '@/lib/locals';


const Search = dynamic(() => import('@/components/ui/search/search'));
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderWabapi = ({ layout }: { layout?: string }) => {
  const { t } = useTranslation('common');
  const { show, hideHeaderSearch } = useHeaderSearch();
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  //drawer
  const [_, setDrawerView] = useAtom(drawerAtom);
  const { isRTL } = useIsRTL();
  const isHomePage = useIsHomePage();
  //drawer
  function handleSidebar(view: string) {
    setDrawerView({ display: true, view });
  }
  const isMultilangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;
    const [color, setColor] = useState(false);
    const changeColor = () => {
      window.scrollY >= 50 ? setColor(true) : setColor(false);
    };
    typeof window !== "undefined" ? window.addEventListener('scroll', changeColor) : null;
  // useEffect(() => {
  //   if (!isHomePage) {
  //     hideHeaderSearch();2
  //   }
  // }, [isHomePage]);
  const isFlattenHeader = useMemo(
    () => !show && isHomePage && layout !== 'mode rn',
    [show, isHomePage, layout]

  );
  return (
    <header
      className={cn('site-header-with-search bg-indigo-600 h-14 sm:h-16 md:h-16 lg:h-22', {
        'lg:!h-auto': isFlattenHeader,
      })}
    >
      <div
        className={cn(
          'fixed  z-50 flex justify-between h-22 w-full transform-gpu px-4 py-5 transition-transform duration-300 md:h-16 lg:h-22 lg:px-8',
          {
            'lg:absolute lg:border-0 lg:bg-transparent lg:shadow-none':
              isFlattenHeader,
          },
          color ? 'bg-indigo-600 shadow-md' : 'bg-transparent'
        )}
      >
        {/* //drawer start*/}
        <div className="visible h-12 md:h-14 lg:hidden">
          <nav className="fixed z-10 flex h-12 w-full justify-between bg- py-1.5 px-2 ltr:left-0 rtl:right-0 md:h-14">
          <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => handleSidebar('MAIN_MENU_VIEW')}
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
        >
          <span className="sr-only">{t('text-burger-menu')}</span>
          <NavbarIcon className={`${isRTL && 'rotate-180 transform'}`} />
        </motion.button>
        </nav>
        </div>
          {/* drwer closed */}






        <div className="flex w-full lg:w-auto lg:ml-14" >
          <Logo
            className={`${
              !isMultilangEnable ? 'mx-auto lg:mx-0' : 'ltr:ml-0 rtl:mr-0'
            }`}
          />

          {/* {isMultilangEnable ? (
            <div className="ltr:ml-auto rtl:mr-auto lg:hidden">
              <LanguageSwitcher />
            </div>
          ) : (
            ''
          )} */}
        </div>
        {/* {isHomePage ? (
          <>
            {(show || layout === 'modern') && (
              <div className="mx-auto hidden w-full overflow-hidden px-10 lg:block xl:w-11/12 2xl:w-10/12">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}

            {displayMobileHeaderSearch && (
              <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}
          </>
        ) : null} */}
        <ul className="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
          <StaticMenu />
          <div className="flex items-center space-x-24 rtl:space-x-reverse">
            <a
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-28 items-center justify-center rounded border border-transparent bg-teal-400  py-0 text-sm leading-none text-blue outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
            >
              {t('text-contact-us')}
            </a>
            {/* <li>{isAuthorize ? <AuthorizedMenu /> : <JoinButton />}</li> */}
          </div>
          {isMultilangEnable ? (
            <div className="ms-auto lg:me-5 xl:me-8 2xl:me-10 hidden flex-shrink-0 lg:block">
              <LanguageSwitcher />
            </div>
          ) : (
            ''
          )}
        </ul>
      </div>
    </header>
  );
};

export default HeaderWabapi;