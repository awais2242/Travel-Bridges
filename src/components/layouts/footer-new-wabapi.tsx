import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import LinesTop from '@/assets/images/Group 14805.png';
import { Image } from '@/components/ui/image';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { TwitterIcon } from '../icons/twitter';
const FooterNew = () => {
  const { t } = useTranslation('common');
  return (
    <>
    
      <div className="relative flex w-full flex-col border-t border-gray-300 bg-background-footer bg-cover bg-no-repeat">
        {/* Top */}
        <div className='absolute  top-0 left-0  z-20 transform -translate-x-1/3 -translate-y-10 '>
        <Image
          src={LinesTop}
          alt='footerIamge'
          width={250}
          height={200}
        />
        </div>
        <div className="relative grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))]  px-5 pt-36 md:grid-cols-3 md:px-10 lg:px-20 lg:pt-10 lg:pb-16 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  xl:px-16 xl:ml-10 2xl:grid-cols-5">
       
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
        
        <div className="mb-2 mt-6 flex grid grid-cols-1 flex-row items-center justify-center  md:mx-40 md:grid-cols-5  lg:mx-64 lg:mt-0  xl:mx-80">
          {siteSettings.footer.description.map((method, idx) => (
            <Link
              className="mb-4  mt-4 flex items-center justify-center text-sm text-teal-400 md:mb-0"
              key={`${method.url}-${idx}`}
              href={method.url}
            >
              {t(method.title)}
              {idx < siteSettings.footer.description.length - 1 && (
                <div className="md:border-white-500 md:mx-auto md:h-4 md:w-0 md:border  "></div>
              )}
            </Link>
          ))}
        </div>
        {/* Bottom */}
        <div className="flex w-full flex-col items-center bg-slate-950 pt-2 pb-2 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
          <span className="mx-auto flex text-sm text-white ">
            {t('text-copyright')} &copy; {new Date().getFullYear()}{' '}
            <Link
              className="text-sm text-white transition-colors hover:text-accent"
              href={siteSettings.footer.copyright.href}
            >
              {siteSettings.footer.copyright.name}.
            </Link>{' '}
            <div className="ml-3 text-sm">
              &copy;{t('text-2021')}
              {t('text-rights-reserved')}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
