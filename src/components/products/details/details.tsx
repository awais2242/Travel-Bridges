import BackButton from '@/components/ui/back-button';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import usePrice from '@/lib/use-price';
import { ThumbsCarousel } from '@/components/ui/thumb-carousel';
import { useTranslation } from 'next-i18next';
import { getVariations } from '@/lib/get-variations';
import { Fragment, useEffect, useMemo, useRef } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import Truncate from '@/components/ui/truncate';
import { scroller, Element } from 'react-scroll';
import CategoryBadges from './category-badges';
import VariationPrice from './variation-price';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import type { Product } from '@/types';
import { useAtom } from 'jotai';
import VariationGroups from './variation-groups';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { stickyShortDetailsAtom } from '@/store/sticky-short-details-atom';
import { useAttributes } from './attributes.context';
import classNames from 'classnames';
import { displayImage } from '@/lib/display-product-preview-images';
import { HeartOutlineIcon } from '@/components/icons/heart-outline';
import { HeartFillIcon } from '@/components/icons/heart-fill';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useUser } from '@/framework/user';
import { useInWishlist, useToggleWishlist } from '@/framework/wishlist';
import { useIntersection } from 'react-use';
import { StarIcon } from '@/components/icons/star-icon';
import { Tab } from '@headlessui/react';
import ProductReviews from '@/components/reviews/product-reviews';
import Router from 'next/router';
import { useReviews } from '@/framework/review';


function FavoriteButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { isAuthorized } = useUser();
  const { toggleWishlist, isLoading: adding } = useToggleWishlist(productId);
  const { inWishlist, isLoading: checking } = useInWishlist({
    enabled: isAuthorized,
    product_id: productId,
  });

  const { openModal } = useModalAction();
  function toggle() {
    if (!isAuthorized) {
      openModal('LOGIN_VIEW');
      return;
    }
    toggleWishlist({ product_id: productId });
  }
  const isLoading = adding || checking;
  if (isLoading) {
    return (
      <div
        className={classNames(
          'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300',
          className
        )}
      >
        <Spinner simple={true} className="flex h-5 w-5" />
      </div>
    );
  }
  return (
    <button
      type="button"
      className={classNames(
        'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center transition-colors',
        {
          '!border-accent': inWishlist,
        },
        className
      )}
      onClick={toggle}
    >
      {inWishlist ? (
        <HeartFillIcon className="h-5 w-5 text-accent" />
      ) : (
        <HeartOutlineIcon className="h-5 w-5 text-accent" />
      )}
    </button>
  );
}
type Props = {
  product: Product;
  backBtn?: boolean;
  isModal?: boolean;
};
const Details: React.FC<Props> = ({
  product,
  backBtn = true,
  isModal = false,
}) => {
  const {
    id,
    name,
    image, //could only had image we need to think it also
    description,
    unit,
    categories,
    gallery,
    type,
    quantity,
    shop,
    slug,
    ratings,
    sku,
    product_type
  } = product ?? {};

  const { t } = useTranslation('common');
  const [_, setShowStickyShortDetails] = useAtom(stickyShortDetailsAtom);

  const router = useRouter();
  const { closeModal } = useModalAction();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      setShowStickyShortDetails(false);
      return;
    }
    if (intersection && !intersection.isIntersecting) {
      setShowStickyShortDetails(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection]);
  const { attributes } = useAttributes();

  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price,
    baseAmount: product?.price,
  });

  const navigate = (path: string) => {
    router.push(path);
    closeModal();
  };

  const variations = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );
  const isSelected = isVariationSelected(variations, attributes);
  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }

  const scrollDetails = () => {
    scroller.scrollTo('details', {
      smooth: true,
      offset: -80,
    });
  };

  const hasVariations = !isEmpty(variations);
  const previewImages = displayImage(selectedVariation?.image, gallery, image);

  const handleClick = (path: string) => {
    Router.push(path);

  };

  const { reviews, isLoading, paginatorInfo } = useReviews({
    product_id: product?.id,
    limit: 5,
    // page,
    // ...(!isEmpty(restQuery) && { ...restQuery }),
  });
  return (
    <article className="rounded-lg bg-light">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="mb-8 flex items-center justify-between lg:mb-10">
            {/* {backBtn && <BackButton />} */}
            {discount && (
              <div className="rounded bg-red-450 px-3 text-xs font-semibold leading-6 text-light ltr:ml-auto rtl:mr-auto">
                {discount}
              </div>
            )}
          </div>

          <div className="product-gallery h-full">
            <ThumbsCarousel
              aspectRatio='square'
              gallery={previewImages}
              hideThumbs={previewImages.length <= 1}
            />
          </div>
        </div>

        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-full" ref={intersectionRef}>
            <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse border-b pb-2">
              <h1
                className={classNames(
                  `text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl`,
                  {
                    'cursor-pointer transition-colors hover:text-accent':
                      isModal,
                  }
                )}
                {...(isModal && {
                  onClick: () => navigate(Routes.product(slug)),
                })}
              >
                {name}
              </h1>

              <span>
                <FavoriteButton
                  productId={id}
                  className={classNames({ 'mr-1': isModal })}
                />
              </span>
            </div>
            <div className="mt-7 pb-7  items-center justify-between border-b">

              {/* <span className="block text-sm font-normal text-body">
                {product_type}
              </span> */}

              {!!categories?.length && (
                <div className="w-full flex flex-row items-start">

                  <div className="flex flex-row flex-wrap">
                    {categories?.map((category: any) => (
                      <button
                        onClick={() => handleClick(`/${type?.slug}?category=${category.slug}`)}
                        key={category.id}
                        className="lowercase text-sm text-heading tracking-wider whitespace-nowrap py-1 bg-transparent  ltr:mr-2 rtl:ml-2 mb-2 transition-colors hover:border-accent focus:outline-none focus:bg-opacity-100"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <span className="block text-sm font-normal text-muted">
                {`SKU:${sku}`}
              </span>

              {/* {unit && !hasVariations && (
                <span className="block text-sm font-normal text-body">
                  {unit}
                </span>
              )} */}

              {isModal && (
                <div className="inline-flex shrink-0 items-center rounded border border-accent bg-accent px-3 py-1 text-sm text-white">
                  {ratings}
                  <StarIcon className="h-2.5 w-2.5 ltr:ml-1 rtl:mr-1" />
                </div>
              )}
            </div>

            {description && (
              <div className="mt-3 text-sm leading-7 text-body md:mt-4">
                <Truncate
                  character={150}
                  {...(!isModal && {
                    onClick: () => scrollDetails(),
                    compressText: 'common:text-see-more',
                  })}
                >
                  {description}
                </Truncate>
              </div>
            )}

            {hasVariations ? (
              <>
                <div className="my-5 flex items-center md:my-10">
                  <VariationPrice
                    selectedVariation={selectedVariation}
                    minPrice={product.min_price}
                    maxPrice={product.max_price}
                  />
                </div>
                <div>
                  <VariationGroups variations={variations} />
                </div>
              </>
            ) : (
              <span className="my-5 items-center md:my-10">
                {basePrice && (
                  <del className="text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base">
                    {basePrice}
                  </del>
                )}
                <br />
                <ins className="text-2xl font-semibold text-red-450 no-underline md:text-3xl">
                  {price}
                </ins>

              </span>
            )}

            <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
              <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px] rounded">
                <AddToCart
                  data={product}
                  variant="big"
                  variation={selectedVariation}
                  disabled={selectedVariation?.is_disable || !isSelected}
                />
              </div>

              {!hasVariations && (
                <>
                  {Number(quantity) > 0 ? (
                    <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                      {quantity} {t('text-pieces-available')}
                    </span>
                  ) : (
                    <div className="whitespace-nowrap text-base text-red-500 ltr:lg:ml-7 rtl:lg:mr-7">
                      {t('text-out-stock')}
                    </div>
                  )}
                </>
              )}
              {!isEmpty(selectedVariation) && (
                <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                  {selectedVariation?.is_disable ||
                    selectedVariation.quantity === 0
                    ? t('text-out-stock')
                    : `${selectedVariation.quantity} ${t(
                      'text-pieces-available'
                    )}`}
                </span>
              )}
            </div>
          </div>

          {/* {!!categories?.length && (
            <CategoryBadges
              categories={categories}
              basePath={`/${type?.slug}`}
              onClose={closeModal}
            />
          )} */}

          {shop?.name && (
            <div className="mt-2 flex items-center py-3">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                {t('common:text-sellers')}
              </span>

              <button
                onClick={() => navigate(Routes.shop(shop?.slug))}
                className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline"
              >
                {shop?.name}
              </button>
            </div>
          )}
        </div>
      </div>


      <div className=''>
        <Tab.Group>
          <Tab.List className='bg-gray-100 p-8'>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'text-red-450 p-2 mx-10 focus:outline-none uppercase' : ' text-black p-2 uppercase mx-10'
                  }
                >
                  Description
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'ml-4 text-red-450 p-2 focus:outline-none uppercase' : ' text-black p-2 uppercase ml-4'
                  }
                >
                  {t('text-reviews')} ({paginatorInfo?.total ?? 0})
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Element
                name="details"
                className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14"
              >
                <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
                  {t('text-details')}
                </h2>
                <p className="text-sm text-body">{description}</p>
              </Element>
            </Tab.Panel>
            <Tab.Panel>
              <ProductReviews
                productId={product?.id}
                productType={product?.type?.slug}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>


      {/* <Element
        name="details"
        className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14"
      >
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
          {t('text-details')}
        </h2>
        <p className="text-sm text-body">{description}</p>
      </Element> */}
    </article>
  );
};

export default Details;
