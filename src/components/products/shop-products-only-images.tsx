import { useProducts } from '@/framework/product';
import { PRODUCTS_PER_PAGE } from '@/framework/client/variables';
import { Grid } from '@/components/products/grid';
import { useRouter } from 'next/router';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import rangeMap from '@/lib/range-map';
import ProductLoader from '@/components/ui/loaders/product-loader';
// import { Link } from 'react-scroll';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';


interface Props {
  className?: string;
  variables: any;
  column?: any;
  gridClassName?: string;
  landingPage?: boolean;
  limit?: number;
}
export default function ShopProductsOnlyImages({
  className,
  variables,
  column,
  gridClassName,
  landingPage,
  limit = 3,
}: Props) {
  const { query } = useRouter();
  const { products, loadMore, isLoadingMore, isLoading, hasMore, error } =
    useProducts({
      ...variables,
      ...(query.category && { categories: query.category }),
      ...(query.text && { name: query.text }),
    });
  const productsItem: any = products;
  return (
    <div className='grid grid-cols-3 gap-5'>
      {isLoading && !products?.length
        ? rangeMap(limit, (i) => (
          <ProductLoader key={i} uniqueKey={`product-${i}`} />
        ))
        : productsItem?.map((product: any) => (

          <div key={product.id} className=' h-24 w-24 p-2 border'>
            <Link
              href={Routes.product(product?.slug)}
            >
              <Image
                src={product?.image?.thumbnail ?? productPlaceholder}
                alt={product?.name ?? 'Product Image'}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </Link>
          </div>

        ))}
    </div>
  );
}
