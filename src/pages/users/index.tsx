import { useRouter } from 'next/router';
import Card from '@/components/ui/cards/card';
// import Layout from '@/components/layouts/admin';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
import Search from '@/components/ui/search/search';
import UserList from '@/components/users/user-list';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { SortOrder } from '@/types';
import { useState } from 'react';
import { useUsersQuery } from '@/framework/user';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import CategoryTypeFilter from '@/components/product/category-type-filter';
import cn from 'classnames';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import { ArrowUpIcon } from '@/components/icons/arrow-up';
// import { adminOnly } from '@/utils/auth-utils';
import DashboardLayout from '@/layouts/_dashboard';
import { Role } from '@/framework/utils/constants'

const adminOnly = Role.Admin;
export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [orderBy, setOrder] = useState('created_at');
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((v) => !v);
  };

  const { users, isLoading, paginatorInfo, error } = useUsersQuery({
    // language: locale,
    limit: 20,
    page,
    // type,
    // categories: category,
    // name: searchTerm,
    orderBy,
    sortedBy,
  });

  if (isLoading) return <Spinner text={t('common:text-loading')} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    setPage(1);
  }

  function handlePagination(current: any) {
    setPage(current);
  }

  return (
    <div className='grid grid-cols-1 w-full'>
      <div className="mb-6 flex flex-col rounded border border-border-200 bg-light px-10 py-8">
        <div className="flex w-full flex-col items-center md:flex-row">
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h1 className="text-lg font-semibold text-heading">
              {t('common:text-user-list')}
            </h1>
          </div>

          <div className="flex w-full flex-col items-center ms-auto md:w-3/4">
            <Search label='user-search' onSearch={handleSearch} variant='minimal'/>
          </div>

          {/* <button
            className="mt-5 flex items-center whitespace-nowrap text-base font-semibold text-accent md:mt-0 md:ms-5"
            onClick={toggleVisible}
          >
            {t('common:text-filter')}{' '}
            {visible ? (
              <ArrowUpIcon className="ms-2" />
            ) : (
              <ArrowDownIcon className="ms-2" />
            )}
          </button> */}
        </div>

        {/* <div
          className={cn('flex w-full transition', {
            'visible h-auto': visible,
            'invisible h-0': !visible,
          })}
        >
          <div className="mt-5 flex w-full flex-col border-t border-gray-200 pt-5 md:mt-8 md:flex-row md:items-center md:pt-8">
            <CategoryTypeFilter
              className="w-full"
              onCategoryFilter={({ slug }: { slug: string }) => {
                setPage(1);
                setCategory(slug);
              }}
              onTypeFilter={({ slug }: { slug: string }) => {
                setType(slug);
                setPage(1);
              }}
            />
          </div>
        </div> */}
      </div>
      <UserList
        users={users}
        paginatorInfo={paginatorInfo}
        onPagination={handlePagination}
        onOrder={setOrder}
        onSort={setColumn}
      />
    </div>
  );
}

UsersPage.authenticationRequired = true;
UsersPage.Layout = getLayoutWithFooter;
UsersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['table', 'common', 'form'])),
  },
});
