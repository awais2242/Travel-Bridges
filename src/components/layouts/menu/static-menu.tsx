import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

type StaticMenuProps = {
  className?: string;
}
const headerLinks = [
  { href: Routes.home, icon: null, label: 'nav-menu-home' },
  { href: Routes.support, icon: null, label: 'nav-menu-support' },
  { href: Routes.buy, label: 'nav-menu-buy' },
  { href: Routes.trial, label: 'nav-menu-trial' },
];

const StaticMenu : React.FC<StaticMenuProps> = ({  className }) => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label, icon }) => (
        <li key={`${href}${label}`} className='m-1 border-b-2 border-transparent hover:border-teal-400'>
          <Link
            href={href}
            className={cn(
              "flex items-center text-white font-normal no-underline  transition duration-200",
              className
            )}
          >
            {icon && <span className="ltr:mr-2 rtl:ml-2">{icon}</span>}
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};
export default StaticMenu;
