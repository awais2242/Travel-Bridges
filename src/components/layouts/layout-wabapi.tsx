import useLayout from '@/lib/hooks/use-layout';
import FooterNew from './footer-new';
import Header from './header';
import HeaderWabapi from './header-wabapi';
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';

const SiteLayoutWithFooter: React.FC = ({ children }) => {
  
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      <HeaderWabapi layout='compact' />
      {children}
      <FooterNew />
    </div>
  );
};
export const getLayoutWithFooter = (page: React.ReactElement) => (
  <SiteLayoutWithFooter>{page}</SiteLayoutWithFooter>
);
export default SiteLayoutWithFooter;