import cn from 'classnames';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import Search from '@/components/ui/search/search';
import type { Banner } from '@/types';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import { useIntersection } from 'react-use';
import { useEffect, useRef } from 'react';

interface BannerProps {
  banners: Banner[] | undefined;
  layout?: string;
}

const BannerWithSearch: React.FC<BannerProps> = ({ banners, layout }) => {
  const { showHeaderSearch, hideHeaderSearch } = useHeaderSearch();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      hideHeaderSearch();
      return;
    }
    if (intersection && !intersection.isIntersecting) {
      showHeaderSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection]);

  return (
    <>
      <div
        className={cn('relative hidden lg:block', {
          '!block': layout === 'minimal',
        })}
      >
        <div className="-z-1 overflow-hidden">
          <div className="relative">
            <Swiper
              id="banner"
              // loop={true}
              modules={[Navigation]}
              resizeObserver={true}
              allowTouchMove={false}
              slidesPerView={1}
            >
              {banners?.map((banner, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={cn('relative h-screen w-full', {
                      // 'max-h-140': layout === 'standard',
                      'max-h-[320px] md:max-h-[680px]': layout === 'minimal',
                    })}
                  >
                    <Image
                      className="h-full min-h-140 w-full"
                      src={banner.image?.original ?? productPlaceholder}
                      alt={banner.title ?? ''}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div
                      className={cn(
                        'absolute inset-0 mt-8 flex w-full flex-col  justify-center p-5  md:px-20 lg:space-y-10',
                        {
                          'item-left w-1/2 text-left': layout === 'standard',
                        },
                        {
                          'w-full items-center text-center':
                            layout !== 'standard',
                        },
                        {
                          'space-y-5 md:!space-y-8': layout === 'minimal',
                        }
                      )}
                    >
                      <h1
                        className={cn(
                          ' text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl',
                          {
                            '!text-accent': layout === 'minimal',
                          }
                        )}
                      >
                        {banner?.title}
                      </h1>
                      <p
                        className={cn(
                          'text-sm text-heading lg:text-base xl:text-lg'
                        )}
                      >
                        {banner?.description}
                      </p>
                      <div className="w-full max-w-3xl" ref={intersectionRef}>
                        <Search label="search" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div
        className={cn('relative lg:hidden', {
          hidden: layout !== 'standard',
        })}
      >
        <div className="-z-1 overflow-hidden">
          <div className="relative">
            <Swiper
              id="banner"
              // loop={true}
              modules={[Navigation]}
              resizeObserver={true}
              allowTouchMove={false}
              slidesPerView={1}
            >
              {banners?.map((banner, idx) => (
                <SwiperSlide key={idx}>
                  <div className={cn('relative w-full', {})}>
                    <Image
                      className="w-1/2"
                      src={banner.image?.original ?? productPlaceholder}
                      alt={banner.title ?? ''}
                      layout="responsive"
                      width={'100'}
                      height={'60'}
                      objectFit="cover"
                    />
                    <div
                      className={cn(
                        'item-left absolute inset-0 mt-8 flex w-3/5 flex-col	justify-center	 p-5 text-left text-xs  md:px-20 lg:space-y-10',
                        {
                          'space-y-5 md:!space-y-8': layout === 'minimal',
                        }
                      )}
                    >
                      <h1
                        className={cn(
                          ' text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl'
                        )}
                      >
                        {banner?.title}
                      </h1>
                      <p
                        className={cn(
                          'text-sm text-heading lg:text-base xl:text-lg'
                        )}
                      >
                        {banner?.description.length > 100
                          ? banner?.description.substring(1, 100)
                          : banner?.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWithSearch;
