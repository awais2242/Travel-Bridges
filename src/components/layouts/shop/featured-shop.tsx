import Scrollbar from '@/components/ui/scrollbar';
import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import { Fragment } from 'react';
import { getIcon } from '@/lib/get-icon';
import { CaretDown } from '@/components/icons/caret-down';
import * as groupIcons from '@/components/icons/groups';
import { useRouter } from 'next/router';
import Link from '@/components/ui/link';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import { useTypes } from '@/framework/type';
import useHomepage from '@/lib/hooks/use-homepage';
import type { Type } from '@/types';
import { TYPES_PER_PAGE, LANDING_PAGE_SHOP_ID } from '@/framework/client/variables';
import { Tab } from '@headlessui/react';
import { Image } from '@/components/ui/image';
import shopImage from '@/assets/images/shop-image.jpg';
import airpodImage from '@/assets/images/airpod-reflect.png';
import bridalImage from '@/assets/images/bridal.png';
import bookImage from '@/assets/images/books.png';
import { LANDING_PRODUCTS_PER_PAGE } from '@/framework/client/variables';

import ProductGridHome from '@/components/products/grids/home';

interface GroupsMenuProps {
    className?: string;
    shopId?: string;
    limit?: number;
    groups?: Type[];
    defaultGroup?: Type;
    heading?: string;
    paragraph?: string;
    count?: number;
}

const FeatureShopWithProducts: React.FC<GroupsMenuProps> = ({
    className,
    groups,
    defaultGroup,
    shopId,
    limit,
    heading,
    paragraph,
    count,
}) => {
    const router = useRouter();
    const selectedMenu = groups?.find((type) => router.asPath.includes(type?.slug)) ?? defaultGroup;
    let variables = {
        shop_id: shopId,
        limit: limit,
        page: 1,
    };
    return (
        <>
            <div className='px-8 xl:py-16 2xl:py-20 my-20 bg-sea-green-grey after:-mt-8 after:xl:mt-9 after:2xl:mt-12 after:bg-sea-green-grey after:border-2 after:border-sea-green-grey after:rounded-[0.3125rem] after:contents-[""] after:h-[56px] after:left-[5%] after:absolute after:rotate-45 after:w-[56px] after:z-1 '>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='p-10 col-span-2'>
                        <h1 className='text-5xl'>{heading}</h1>
                        <p>
                            {paragraph}
                        </p>
                    </div>
                    {/* <div className='md:max-w-[420px] xl:max-w-[490px] 2xl:max-w-[590px] absolute -right-0 xl:-mt-44 2xl:-mt-72 hidden md:block'>
                        <Image
                        src={airpodImage}
                        alt='airpod'
                        />
                    </div> */}
                    {/* <div className='md:max-h-[420px] xl:max-h-[390px] 2xl:max-h-[490px] absolute -right-0 xl:-mt-44 hidden md:block'>
                        <Image
                        src={bridalImage}
                        alt='airpod'
                        height={520}
                        width={350}
                        />
                    </div> */}
                    {count === 2 && (
                        <div className='md:max-w-[420px] xl:max-w-[490px] 2xl:max-w-[590px] absolute -right-0 xl:-mt-44 2xl:-mt-72 hidden md:block'>
                            <Image
                                src={airpodImage}
                                alt='airpod'
                            />
                        </div>
                    )}
                    {count === 1 && (
                        <div className='h-[32.5rem] w-[21.875rem] md:max-h-[420px] xl:max-h-[390px] 2xl:max-h-[490px] absolute -right-0 lg:mr-20 md:-mt-28 md:-mr-20 xl:-mt-44 hidden md:block'>
                            <Image
                                src={bridalImage}
                                alt='airpod'
                                // height={520}
                                // width={350}
                                className='md:object-scale-down lg:object-fill'
                            />
                        </div>
                    )}
                    {count === 3 && (
                        <div className='md:w-[28.125rem] md:h-[30.625rem] lg:h-[32.5rem] lg:w-[31.25rem] md:max-h-[420px] xl:max-h-[390px] 2xl:max-h-[490px] absolute -right-0 lg:mr-20 md:-mt-28 md:-mr-16 xl:-mt-44 hidden md:block'>
                            <Image
                                src={bookImage}
                                alt='airpod'
                                // height={520}
                                // width={480}
                                className='md:object-scale-down lg:object-fill'
                            />
                        </div>
                    )}


                </div>
            </div>
            <main className="py-12">
                <ProductGridHome
                    landingPage={true}
                    className="lg:px-4 py-8 lg:p-8 "
                    variables={variables}
                    column='five'
                    limit={LANDING_PRODUCTS_PER_PAGE}
                    gridClassName=" mx-16 md:mx-26 lg:mx-36" />
            </main>
        </>
    );
};


export default FeatureShopWithProducts;
