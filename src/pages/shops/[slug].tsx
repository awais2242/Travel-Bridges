import { Image } from '@/components/ui/image';
import { useWindowSize } from '@/lib/use-window-size';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import ShopSidebar from '@/components/shops/sidebar';
import ShopInfoBar from '@/components/shops/info-bar';
import { productPlaceholder } from '@/lib/placeholders';
import ProductsGrid from '@/components/products/grid';
import { getLayoutWithFooterGeneral } from '@/components/layouts/layout-with-footer-general';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { NextPageWithLayout } from '@/types';
import { InferGetStaticPropsType } from 'next';
import { getStaticPaths, getStaticProps } from '@/framework/shop.ssr';
import { Grid } from '@/components/products/grid';
import SearchCount from '@/components/search-view/search-count';
import SidebarFilter from '@/components/search-view/sidebar-filter';
import Sorting from '@/components/search-view/sorting';
import { PRODUCTS_PER_SHOP_PAGE } from '@/framework/client/variables';
import { useProducts } from '@/framework/product';
import PopularProductsGrid from '@/components/products/popular-products';
import SectionBlock from '@/components/ui/section-block';


export { getStaticPaths, getStaticProps };

const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);

const ShopPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ shop, variables }) => {
  const router = useRouter();
  const { query } = useRouter();
  const { width } = useWindowSize();
  const { t } = useTranslation('common');

  const isGerman = router.locale === 'de';
  const isBook = router.asPath.includes('/book');
  const { searchType, ...restQuery }: any = query;
  const {
    products,
    isLoading,
    paginatorInfo,
    error,
    loadMore,
    isLoadingMore,
    hasMore,
  } = useProducts({
    shop_id: variables?.shop_id,
    limit: PRODUCTS_PER_SHOP_PAGE,
    orderBy: 'created_at',
    sortedBy: 'DESC',
    ...(searchType && { type: searchType }),
    ...restQuery,
  });

  return (
    // <div className="flex flex-col bg-gray-100 lg:flex-col lg:items-start lg:p-8">
    <div className="flex flex-col bg-light lg:items-center lg:p-8">

      <ShopInfoBar shop={shop} className=" top-24 lg:top-28 p-7" />

      <PopularProductsGrid variables={variables} limit={4} />

      <SectionBlock title={t('text-products')} className={"bg-light py-7 capitalize"}>

        <div className="flex w-full flex-col">

          <div className="w-full">
            <div className="mb-7 flex flex-col items-center justify-between md:flex-row">

              <SearchCount
                from={paginatorInfo?.firstItem ?? 0}
                to={paginatorInfo?.lastItem ?? 0}
                total={paginatorInfo?.total ?? 0}
              />
              <div className="mt-4 max-w-xs md:mt-0">
                <Sorting variant="dropdown" />
              </div>
            </div>
            <Grid
              products={products as any}
              loadMore={loadMore}
              isLoading={isLoading}
              isLoadingMore={isLoadingMore}
              hasMore={hasMore}
              error={error}
              column="five"
            />
          </div>
        </div>
      </SectionBlock>
      {/* {width > 1023 && <CartCounterButton />} */}
    </div>
  );
};

ShopPage.getLayout = getLayoutWithFooterGeneral;
export default ShopPage;
