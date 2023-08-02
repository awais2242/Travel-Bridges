import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import { PlusIcon } from '@/components/icons/plus-icon';
import { ProductType } from '@/framework/utils/constants';

type NeonProps = {
  product: any;
  className?: string;
};

const Neon: React.FC<NeonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { name, image, quantity, min_price, max_price, product_type } =
    product ?? {};
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });
  const { price: minPrice } = usePrice({
    amount: min_price,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price,
  });

  const { openModal } = useModalAction();

  function handleProductQuickView() {
    return openModal('PRODUCT_DETAILS', product.slug);
  }
  return (
    <article
      className={cn(
        'product-card cart-type-neon h-full transform overflow-hidden hover:rounded border border-border-100 bg-light transition-all duration-200 hover:-translate-y-0.5 shadow-500 hover:shadow-xl',
        className
      )}
    >
      <div
        className="relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64"
        onClick={handleProductQuickView}
      >
        <span className="sr-only">{t('text-product-image')}</span>
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="product-image"
        />
        {discount && (
          <div className="absolute top-3 rounded bg-red-450 px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4">
            {discount}
          </div>
        )}
      </div>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        {product_type.toLowerCase() === 'variable' ? (
          <div className="mb-2 flex flex-row">
            <span className="text-xs font-semibold text-red-450 md:text-base">
              {minPrice}
            </span>
            <span> - </span>
            <span className="text-xs font-semibold text-red-450 md:text-base">
              {maxPrice}
            </span>
          </div>
        ) : (
          <div className="mb-2 grid grid-cols-1 text-center">
            <p className="text-sm font-semibold text-red-450 md:text-base">
              {price}
            </p>
            <p>
              {!basePrice ? <>&nbsp;</> : <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {basePrice}
              </del>}
              {/* {basePrice && (
              <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {basePrice}
              </del>
            )} */}
            </p>
          </div>
        )}
        {/* End of product price */}

        <h3
          className="mb-4 cursor-pointer truncate text-xs text-body md:text-sm"
          onClick={handleProductQuickView}
        >
          {name}
        </h3>
        {/* End of product title */}

        {product_type.toLowerCase() === 'variable' ? (
          <>
            <>&nbsp;</>
            {Number(quantity) > 0 && (
              <button
                onClick={handleProductQuickView}
                className="group flex h-7 w-full items-center border-2  justify-between font-semibold rounded-none bg-none text-xs text-red-450 transition-colors hover:border-red-450 hover:bg-red-450 hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:text-sm"
              >
                <span className="flex-1">{t('text-add-to-cart')}</span>
                {/* <span className="grid h-7 w-7 place-items-center bg-gray-200 transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600 ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl md:h-9 md:w-9">
                  <PlusIcon className="h-4 w-4 stroke-2" />
                </span> */}
              </button>
            )}
          </>
        ) : (
          <>
            {(Number(quantity) > 0 || product_type.toLowerCase() == ProductType.Bundle) && (
              <AddToCart variant="neon" data={product} />
            )}
          </>
        )}

        {(Number(quantity) <= 0 && product_type.toLowerCase() != ProductType.Bundle) && (
          <div className="rounded bg-red-500 px-2 py-1.5 text-center text-xs text-light sm:py-2.5">
            {t('text-out-stock')}
          </div>
        )}
        {/* End of add to cart */}
      </header>
    </article>
  );
};

export default Neon;
