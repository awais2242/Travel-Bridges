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
import { motion } from 'framer-motion';
import { useCart } from '@/store/quick-cart/cart.context';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { drawerAtom } from '@/store/drawer-atom';
import { useIsRTL } from '@/lib/locals';
import { NavbarIcon } from '@/components/icons/navbar-icon';
import { HomeIcon } from '@/components/icons/home-icon';
import { ShoppingBagIcon } from '@/components/icons/shopping-bag-icon';
import { UserIcon } from '@/components/icons/user-icon';
import { UserPlusIcon } from '@/components/icons/user-plus';
import CartCounterButton from '@/components/cart/new-cart-btn';
import { useState } from 'react';
import CatDropDown from '@/components/categories/category-dropdown';


const CartCounterIconButton = dynamic(
    () => import('@/components/cart/cart-counter-icon-button'),
    { ssr: false }
);
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
    ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderGeneral = ({ layout }: { layout: string }) => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
    const [isAuthorize] = useAtom(authorizationAtom);
    const isMultilangEnable =
        process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
        !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;

    const { openModal } = useModalAction();
    const [_, setDrawerView] = useAtom(drawerAtom);
    const { isRTL } = useIsRTL();

    const { totalUniqueItems } = useCart();

    function handleSidebar(view: string) {
        setDrawerView({ display: true, view });
    }

    function handleJoin() {
        return openModal('LOGIN_VIEW');
    }
    const [color, setShadow] = useState(false);
    const addShadow = () => {
        window.scrollY >= 50 ? setShadow(true) : setShadow(false);
    };
    typeof window !== "undefined" ? window.addEventListener('scroll', addShadow) : null;



    return (
        <header className={cn('site-header-with-search h-14 md:h-16 lg:h-22')}>
            <div
                className={cn(
                    'fixed z-50 flex h-14 w-full items-center justify-between bg-light px-4 py-5 transition-transform duration-300 md:h-16 lg:h-22 ltr:lg:pl-12 ltr:lg:pr-8 rtl:lg:pr-12 rtl:lg:pl-8',
                    {
                        'px-5 lg:!px-12 xl:px-16': layout === 'compact',
                    },
                    color ? 'shadow-md' : ''
                )}
            >
                <div className='flex min-w-full lg:min-w-[87%]'>
                    <div className=" hidden lg:flex w-full items-center lg:w-auto">
                        {/* <Logo className="mx-auto lg:mx-0" /> */}
                        <Logo className={`${!isMultilangEnable ? 'mx-auto lg:mx-0' : 'ltr:ml-0 rtl:mr-0'}`} />

                        {isMultilangEnable ? (
                            <div className="lg:hidden ltr:ml-auto rtl:mr-auto">
                                <LanguageSwitcher />
                            </div>
                        ) : (
                            ''
                        )}

                        {/* <div className='flex w-full items-center lg:w-auto'>

                            <motion.button
                                whileTap={{ scale: 0.88 }}
                                onClick={() => handleSidebar('MAIN_MENU_VIEW')}
                                className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
                            >
                                <span className="sr-only">{t('text-burger-menu')}</span>
                                <NavbarIcon className={`${isRTL && 'rotate-180 transform'}`} />
                            </motion.button>
                        </div> */}
                        <div className='flex w-full items-center lg:w-auto'>
                            <CatDropDown />
                        </div>



                        {/* <div className="visible h-12 md:h-14">
                        <nav className="z-10 flex h-12 w-full justify-between bg-light py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-14">

                            <motion.button
                                whileTap={{ scale: 0.88 }}
                                onClick={() => handleSidebar('cart')}
                                className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
                            >
                                <span className="sr-only">{t('text-cart')}</span>
                                <ShoppingBagIcon />
                                {totalUniqueItems > 0 && (
                                    <span className="absolute top-0 mt-0.5 rounded-full bg-accent py-1 px-1.5 text-10px font-semibold leading-none text-light ltr:right-0 ltr:-mr-0.5 rtl:left-0 rtl:-ml-0.5">
                                        {totalUniqueItems}
                                    </span>
                                )}
                            </motion.button>

                            {isAuthorize ? (
                                <motion.button
                                    whileTap={{ scale: 0.88 }}
                                    onClick={() => handleSidebar('AUTH_MENU_VIEW')}
                                    className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
                                >
                                    <span className="sr-only">{t('text-user')}</span>
                                    <UserIcon />
                                </motion.button>
                            ) : (
                                <motion.button
                                    whileTap={{ scale: 0.88 }}
                                    onClick={handleJoin}
                                    className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
                                >
                                    <span className="sr-only">{t('text-user')}</span>
                                    <UserIcon />
                                </motion.button>
                            )}
                        </nav>
                    </div> */}


                        <ul className="hidden shrink-0 items-center space-x-7 ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto rtl:space-x-reverse lg:flex 2xl:space-x-10">
                            <StaticMenu className='uppercase font-bold' />
                        </ul>
                    </div>

                    {layout === 'compact' && (
                        <div className="m-auto w-full px-8 xl:flex xl:w-6/12 xl:px-10 xl:rtl:w-4/12 2xl:rtl:w-5/12">
                            <SearchWithSuggestion
                                label={t('text-search-label')}
                                variant="minimal"
                                seeMore={true}
                            />
                        </div>
                    )}


                </div>


                <div>
                    {isAuthorize ? (
                        <motion.button
                            whileTap={{ scale: 0.88 }}
                            onClick={() => handleSidebar('AUTH_MENU_VIEW')}
                            className="hidden lg:flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
                        >
                            <span className="sr-only">{t('text-user')}</span>
                            <UserIcon />
                        </motion.button>
                    ) : (
                        <motion.button
                            whileTap={{ scale: 0.88 }}
                            onClick={handleJoin}
                            className="hidden lg:flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
                        >
                            <span className="sr-only">{t('text-user')}</span>
                            <UserPlusIcon  width={22} height={24}/>
                        </motion.button>
                    )}
                </div>


                <div className='hidden lg:block'>
                    <CartCounterButton />

                </div>


            </div>
        </header>
    );
};

export default HeaderGeneral;
