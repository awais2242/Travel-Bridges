import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ListIcon } from '@/components/icons/list-icon';
import { useCategories } from '@/framework/category';
import { getIcon } from '@/lib/get-icon';
import * as CategoryIcons from '@/components/icons/category';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';

function AddCategoryToList(catList: any[], variables: any) {
    const { categories, isLoading, error } = useCategories(variables);
    let length = categories.length;
    for (let index = 0; index < length; index++) {
        catList.push(categories[index])
    }

}


export default function CatDropDown() {

    let categorySectionOne = {
        type: "old-auriga",
        language: process.env.NEXT_PUBLIC_LANGUAGE,
        limit: 4,
    }
    let categorySectionTwo = {
        type: "hafeez-center-lahore",
        language: process.env.NEXT_PUBLIC_LANGUAGE,
        limit: 4,
    }


    let catList: any[] = [];
    AddCategoryToList(catList, categorySectionOne);
    AddCategoryToList(catList, categorySectionTwo);
    const router = useRouter();

    let { pathname, query } = router;
    const selectedQueries = query.category;
    const onCategoryClick = (slug: string, type: string) => {

        if (selectedQueries === slug) {
            const { category, ...rest } = query;
            console.log(rest)
            router.push(
                {
                    pathname: `/${type}${Routes.search}`,
                    query: { ...rest },
                },
                undefined,
                {
                    scroll: false,
                }
            );
            return;
        }

        router.push(
            {
                pathname: `/${type}${Routes.search}`,
                query: { category: slug },
            },
            undefined,
            {
                scroll: false,
            }
        );
    };

    return (
        <div >
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center bg-opacity-20 px-4 py-2 text-sm font-medium text-accent hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <ListIcon
                            width={28}
                            height={28}
                        />

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {/* <Menu.Item> */}
                            {

                                catList.map((item, i) => {
                                    return <Menu.Item key={i}>


                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-red-450 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                onClick={() => onCategoryClick(item?.slug!, item?.type?.slug)}

                                            >

                                                {/* {getIcon({
                                                    iconList: CategoryIcons,
                                                    iconName: item?.icon!,
                                                    className: 'w-7',
                                                })} */}

                                                <span className='pl-2'>
                                                    {item.name}

                                                </span>


                                            </button>
                                        )}



                                    </Menu.Item>

                                })
                            }



                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

