import Link from '@/components/ui/link';
import { siteSettings } from '@/config/site';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useLogout, useUser } from '@/framework/user';

type DashboardSidebarProps = {
  className?: string;
};

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className }) => {
  const { mutate: logout } = useLogout();
  const { me } = useUser();
  const { t } = useTranslation();
  const { pathname } = useRouter();
  return (
    <aside className={className}>
      <div className="mb-5 overflow-hidden rounded border border-border-200 bg-light px-10 py-8">
        <h1 className=' text-lg font-semibold capitalize'>{me?.role} {t('text-dashboard')}</h1>
        <h1>{me?.name}</h1>
      </div>
      <div className="overflow-hidden rounded border border-border-200 bg-light">
        <ul className="py-7">
          {siteSettings.dashboardSidebarMenu.common?.map((item: any, idx) => (
              <li className="py-1" key={idx}>
                <Link
                  href={item.href}
                  className={classNames(
                    'block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent',
                    {
                      '!border-teal-400 text-accent': pathname === item.href,
                    }
                  )}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          {me?.role == 'admin' && siteSettings.dashboardSidebarMenu.admin?.map((item: any, idx) => (
              <li className="py-1" key={idx}>
                <Link
                  href={item.href}
                  className={classNames(
                    'block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent',
                    {
                      '!border-teal-400 text-accent': pathname === item.href,
                    }
                  )}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))
          } 
          {me?.role == 'user' && siteSettings.dashboardSidebarMenu.user?.map((item: any, idx) => (
              <li className="py-1" key={idx}>
                <Link
                  href={item.href}
                  className={classNames(
                    'block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent',
                    {
                      '!border-teal-400 text-accent': pathname === item.href,
                    }
                  )}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))
          }
        </ul>
        {/* End of top part menu */}

        <ul className="border-t border-border-200 bg-light py-4">
          <li className="block py-2 px-11 ">
            <button
              onClick={() => logout()}
              className={classNames(
                'font-semibold text-heading transition-colors hover:text-accent focus:text-accent'
              )}
            >
              {t('profile-sidebar-logout')}
            </button>
          </li>
        </ul>
        {/* End of bottom part menu */}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
