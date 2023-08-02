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
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { ArrowRightIcon } from '@/components/icons/arrow-right';
import { useTypes } from '@/framework/type';
import useHomepage from '@/lib/hooks/use-homepage';
import type { Type } from '@/types';
import { TYPES_PER_PAGE, LANDING_PAGE_SHOP_ID, SHOPS_PER_PAGE } from '@/framework/client/variables';
import { Tab } from '@headlessui/react';
import { Image } from '@/components/ui/image';
import shopImage from '@/assets/images/shop-image.jpg';
import { useShops, useFeaturedShops } from '@/framework/shop';
import { SHOPS_LIMIT } from '@/lib/constants';
import { productPlaceholder } from '@/lib/placeholders';
import TruncateParagraph from '@/components/ui/truncate-paragraph';

interface GroupsMenuProps {
  className?: string;
  variant?: 'colored' | 'minimal';
}

const GroupsMenu: React.FC<GroupsMenuProps> = ({
  className,
  variant = 'minimal',
}) => {
  const router = useRouter();
  const { featuredShops, error } = useFeaturedShops({
    is_active: 1,
  });

  return (
    <div className='py-5 lg:px-16 xl:px-20 2xl:px-24'>

      <Tab.Group>
        {/* <Tab.List className=" p-3 "> */}
        {/* <Tab.List className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 !place-content-center space-x-1 pb-20"> */}
        <Tab.List className=" flex flex-col items-start justify-start lg:flex-row lg:items-center lg:justify-center pl-3 lg:p-0 mb-32">
          {featuredShops?.map(({ id, name, slug, icon }) => (
            <>
              {slug != LANDING_PAGE_SHOP_ID ?
                <Tab key={id} as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */

                    <div>
                      <span className='text-md mb-1'>{'>'}</span>
                      <button
                        className={
                          selected ? 'text-red-450 pl-1 pr-10 !focus:outline-none' : ' text-red-450 pl-1 pr-10'
                        }
                      >
                        {name}
                      </button>
                    </div>

                  )}
                </Tab> : <></>
              }
            </>
          ))}
        </Tab.List>

        <Tab.Panels className="">
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"  >
            {featuredShops[0]?.limited_shops?.map((shop) => (

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-0 p-5 text-left border border-border-100 shadow-500' key={shop?.id}>
                <div className='relative flex items-center h-56 w-56 rounded-full bg-gray-300'>
                  <Image
                    src={shop?.logo?.thumbnail ?? productPlaceholder}
                    alt={shop?.name}
                    layout="fill"
                    // width={200} height={200}
                    objectFit="cover"
                    className='w-full h-full object-cover rounded-full'
                  />

                </div>
                <div className='grid grid-cols-1 content-center'>
                  <a href={"/shop/" + shop?.slug}>
                    <h1 className='text-lg font-bold'>{shop?.name}</h1>

                  </a>
                  <p className='h-32'>
                    {/* {shop?.description} */}
                    <TruncateParagraph
                      character={150}
                    >
                      {shop?.description}
                    </TruncateParagraph>
                  </p>
                  <Link href={"/shops/" + shop?.slug} className='text-red-450 font-thin flex'>Visit Shop <ArrowRightIcon width={18} className='mx-2' /></Link>

                </div>

              </div>


            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"  >
            {featuredShops[1]?.limited_shops?.map((shop) => (

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-0 p-5 text-left border border-border-100 shadow-500' key={shop?.id}>
                <div className='relative flex items-center h-56 w-56 border rounded-full bg-gray-300'>
                  <Image
                    src={shop?.logo?.thumbnail ?? productPlaceholder}
                    alt={shop?.name}
                    layout="fill"
                    // width={200} height={200}
                    objectFit="cover"
                    className='w-full h-full object-cover rounded-full'
                  />

                </div>
                <div className='grid grid-cols-1 content-center'>
                  <a href={"/shop/" + shop?.slug}>
                    <h1 className='text-lg font-bold'>{shop?.name}</h1>

                  </a>
                  <p className=' h-32'>
                    {/* {shop?.description} */}
                    <TruncateParagraph
                      character={150}
                    >
                      {shop?.description}
                    </TruncateParagraph>
                  </p>
                  <Link href={"/shops/" + shop?.slug} className='text-red-450 font-thin flex'>Visit Shop <ArrowRightIcon width={18} className='mx-2' /></Link>

                </div>

              </div>


            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"  >
            {featuredShops[2]?.limited_shops?.map((shop) => (

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-0 p-5 text-left border border-border-100 shadow-500' key={shop?.id}>
                <div className='relative flex items-center h-56 w-56 border rounded-full bg-gray-300'>
                  <Image
                    src={shop?.logo?.thumbnail ?? productPlaceholder}
                    alt={shop?.name}
                    layout="fill"
                    // width={200} height={200}
                    objectFit="cover"
                    className='w-full h-full object-cover rounded-full'
                  />

                </div>
                <div className='grid grid-cols-1 content-center'>
                  <a href={"/shop/" + shop?.slug}>
                    <h1 className='text-lg font-bold'>{shop?.name}</h1>

                  </a>
                  <p className=' h-32'>
                    {/* {shop?.description} */}
                    <TruncateParagraph
                      character={150}
                    >
                      {shop?.description}
                    </TruncateParagraph>
                  </p>
                  <Link href={"/shops/" + shop?.slug} className='text-red-450 font-thin flex'>Visit Shop <ArrowRightIcon width={18} className='mx-2' /></Link>

                </div>

              </div>


            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"  >
            {featuredShops[3]?.limited_shops?.map((shop) => (

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-0 p-5 text-left border border-border-100 shadow-500' key={shop?.id}>
                <div className='relative flex items-center h-56 w-56 border rounded-full bg-gray-300'>
                  <Image
                    src={shop?.logo?.thumbnail ?? productPlaceholder}
                    alt={shop?.name}
                    layout="fill"
                    // width={200} height={200}
                    objectFit="cover"
                    className='w-full h-full object-cover rounded-full'
                  />

                </div>
                <div className='grid grid-cols-1 content-center'>
                  <a href={"/shop/" + shop?.slug}>
                    <h1 className='text-lg font-bold'>{shop?.name}</h1>

                  </a>
                  <p className='h-32 '>
                    {/* {shop?.description} */}
                    <TruncateParagraph
                      character={150}
                    >
                      {shop?.description}
                    </TruncateParagraph>
                  </p>
                  <Link href={"/shops/" + shop?.slug} className='text-red-450 font-thin flex'>Visit Shop <ArrowRightIcon width={18} className='mx-2' /></Link>

                </div>

              </div>


            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"  >
            {featuredShops[4]?.limited_shops?.map((shop) => (

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-0 p-5 text-left border border-border-100 shadow-500' key={shop?.id}>
                <div className='relative flex items-center h-56 w-56 border rounded-full bg-gray-300'>
                  <Image
                    src={shop?.logo?.thumbnail ?? productPlaceholder}
                    alt={shop?.name}
                    layout="fill"
                    // width={200} height={200}
                    objectFit="cover"
                    className='w-full h-full object-cover rounded-full'
                  />

                </div>
                <div className='grid grid-cols-1 content-center'>
                  <a href={"/shop/" + shop?.slug}>
                    <h1 className='text-lg font-bold'>{shop?.name}</h1>

                  </a>
                  <p className=' h-32'>
                    {/* {shop?.description} */}
                    <TruncateParagraph
                      character={150}
                    >
                      {shop?.description}
                    </TruncateParagraph>
                  </p>
                  <Link href={"/shops/" + shop?.slug} className='text-red-450 font-thin flex'>Visit Shop <ArrowRightIcon width={18} className='mx-2' /></Link>

                </div>

              </div>


            ))}
          </Tab.Panel>
        </Tab.Panels>

      </Tab.Group>

    </div>
  );
};

type GroupsTabMenuProps = {
  variant?: 'colored' | 'minimal';
};

const GroupsTabMenu: React.FC<GroupsTabMenuProps> = ({ variant }) => {
  // const { types }: any = useTypes({
  //   limit: TYPES_PER_PAGE,
  // });
  //FIXME: remove this
  const { homePage }: any = useHomepage();
  return (
    <GroupsMenu variant={variant} />
  );
};

export default GroupsTabMenu;
