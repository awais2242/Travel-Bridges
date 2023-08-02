import { Image } from '@/components/ui/image';
import { MapPin } from '@/components/icons/map-pin';
import { useTranslation } from 'next-i18next';
import { formatAddress } from '@/lib/format-address';
import { Routes } from '@/config/routes';
import Link from '@/components/ui/link';
import isEmpty from 'lodash/isEmpty';
import { productPlaceholder } from '@/lib/placeholders';
import ShopProductsOnlyImages from '@/components/products/shop-products-only-images';
import SectionBlock from '@/components/ui/section-block';
import { MobileIcon } from '@/components/icons/mobile-icon';
import { PhoneIcon } from '@/components/icons/phone-icon';


type ShopCardProps = {
  shop: any;
};

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const { t } = useTranslation();

  const isNew = false;

  return (
    <div className="relative flex flex-col border border-gray-300 p-5 space-y-5">
      {isNew && (
        <span className="absolute top-2 rounded bg-blue-500 px-2 py-1 text-xs text-light ltr:right-2 rtl:left-2">
          {t('common:text-new')}
        </span>
      )}
      <div>

        <div className='flex flex-col float-right space-y-4'>

          <div className='rounded-full bg-gray-100 text-muted hover:bg-red-450 hover:border-red-450 hover:text-white p-1 border tooltip'>
            <PhoneIcon className="h-3 w-3 shrink-0" />
            <span className=' tooltip-text'>
              {shop?.phone ? shop?.phone : t('common:text-no-phone')}
            </span>
          </div>

          <div className='rounded-full bg-gray-100 text-muted hover:bg-red-450 hover:border-red-450 hover:text-white p-1 border tooltip'>
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className=' tooltip-text p-5'>
              {!isEmpty(formatAddress(shop?.address))
                ? formatAddress(shop?.address)
                : t('common:text-no-address')}
            </span>
          </div>

        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300 mb-2">
          <Image
            alt={t('common:text-logo')}
            src={shop?.logo?.thumbnail ?? productPlaceholder}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <Link href={Routes.shop(shop.slug)}>
          <div className="flex flex-col ">
            <span className="mb-2 text-lg font-semibold text-heading hover:text-red-450">
              {shop?.name}
            </span>
            <span className="flex text-xs text-body h-5">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-muted ltr:mr-1 rtl:ml-1" />
              {!isEmpty(formatAddress(shop?.address))
                ? formatAddress(shop?.address)
                : t('common:text-no-address')}
            </span>
          </div>
        </Link>

      </div>

      <div className='py-5 '>

        <div className='pb-5 text-sm 
        after:content-[""]
        after:absolute
        after:w-[55%]
        after:h-[1px]
        after:bg-[#cac8c8]
        after:mx-auto
        after:mt-2
        after:right-3
        '>{t('text-popular-products')}</div>
        <div className='flex flex-row'>
          <ShopProductsOnlyImages variables={{ shop_id: shop?.id, limit: 3 }} limit={3} />

        </div>
      </div>

    </div>
  );
};

export default ShopCard;
