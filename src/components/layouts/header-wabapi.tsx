import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useState } from 'react';

import LanguageSwitcher from '@/components/ui/language-switcher';
import { motion } from 'framer-motion';
import { drawerAtom } from '@/store/drawer-atom';
import { NavbarIcon } from '@/components/icons/navbar-icon';
import { useIsRTL } from '@/lib/locals';


const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderWabapi = ({ layout }: { layout?: string }) => {
  const { t } = useTranslation('common');
  const [isAuthorize] = useAtom(authorizationAtom);
  //drawer
  const [_, setDrawerView] = useAtom(drawerAtom);
  const { isRTL } = useIsRTL();
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

  return (
    <header
      className={cn('site-header-with-search h-14 md:h-16 lg:h-22', 
      )}
    >
      <div
        className={cn(
          'fixed  z-50 flex justify-between h-22 w-full transform-gpu px-4 py-5 transition-transform duration-300 md:h-22 lg:h-22 lg:px-8',
          color ? 'bg-indigo-600 shadow-md' : 'bg-indigo-600'
        )}
      >
        {/* //drawer start*/}
        <div className="visible h-12 md:h-14 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => handleSidebar('MAIN_MENU_VIEW')}
              className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
            >
              <span className="sr-only">{t('text-burger-menu')}</span>
              <NavbarIcon className={`${isRTL && 'rotate-180 transform'}`} />
            </motion.button>
        </div>
        {/* drawer closed */}

        <div className="flex w-full lg:w-auto lg:ml-14" >
          <Logo
            className={`${!isMultilangEnable ? 'mx-auto lg:mx-0' : 'ltr:ml-0 rtl:mr-0'
              }`}
          />

        </div>
        <div className='visible h-12 md:h-14 lg:hidden'>
          {isAuthorize ? <AuthorizedMenu minimal={true} /> : <JoinButton />}
        </div>
        
        <ul className="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
          <StaticMenu />
          <div className="flex items-center space-x-7 rtl:space-x-reverse">
            <li>{isAuthorize ? <AuthorizedMenu minimal={true} /> : <JoinButton />}</li>
            <a
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-28 items-center justify-center rounded border border-transparent bg-teal-400  py-0 text-sm leading-none text-indigo-950 hover:text-white outline-none transition duration-300 ease-in-out hover:bg-teal-500 focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
            >
              {t('text-contact-us')}
            </a>
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
