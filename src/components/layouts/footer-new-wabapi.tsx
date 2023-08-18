import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import LinesTop from '@/assets/images/Group 14805.png';
import { Image } from '@/components/ui/image';

const FooterNew = () => {
  const { t } = useTranslation('common');
  const footerDescription = siteSettings.footer.description;
  return (
    <>
      <div className="relative  w-full flex-col border-gray-300 bg-background-footer bg-cover bg-no-repeat">
        <div className="container mx-auto ">
          {/* Top */}
          <div className="absolute  top-0 left-0  z-20 -translate-x-1/3 -translate-y-10 transform overflow-hidden">
            <Image src={LinesTop} alt="footerIamge" width={250} height={200} />
          </div>
          <div className="relative grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))]  px-5 pt-36 md:grid-cols-3 md:px-10 lg:px-20 lg:pt-10 lg:pb-16  xl:grid-cols-4 xl:px-16">
            <div className="flex flex-col">
              <div className="mb-[2px]  flex h-16 items-start">
                <Logo />
              </div>
            </div>

            {siteSettings.footer.menus.map((menu, idx) => (
              <div className="flex flex-col" key={`${menu.title}-${idx}`}>
                <h3 className="mt-3 mb-4  text-teal-400 lg:mb-7">
                  {t(menu.title)}
                </h3>

                <ul className="space-y-3">
                  {menu.links.map((link, index) => (
                    <li key={`${link.href}-${index}`}>
                      <Link     
                        href={link.href}
                        className="text-sm text-white transition-colors hover:text-slate-300"         
                      >
                        {t(link.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pb-6 mt-6  grid grid-cols-1 items-center justify-center  md:mx-20  md:grid-cols-5  lg:mx-40 lg:mt-0  xl:mx-80">
            {footerDescription?.slice(0,-1)?.map((method, idx) => (
              <>
                <Link
                  className="flex items-center justify-center my-2 text-sm text-teal-400 md:mb-0 md:pr-4 md:border-r-2"
                  key={`${method.url}-${idx}`}
                  href={method.url}
                >
                  {t(method.title)}
                </Link>  
              </>
            ))}
            <Link
              className="flex items-center justify-center my-2 text-sm text-teal-400 md:mb-0"
              key={`${footerDescription[footerDescription.length-1]?.url}-5`}
              href={footerDescription[footerDescription.length-1]?.url}
            >
              {t(footerDescription[footerDescription.length-1]?.title)}
            </Link>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex w-full flex-col items-center bg-slate-950 py-3 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
          <span className="mx-auto flex text-xs text-white ">
            {t('text-copyright')} &copy; {new Date().getFullYear()} &nbsp;
            <Link
              className="text-xs text-white transition-colors hover:text-accent"
              href={siteSettings.footer.copyright.href}
            >
              {siteSettings.footer.copyright.name}.
            </Link>{' '}
            <div className="ml-3 text-xs">
              
              {t('text-rights-reserved')}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
