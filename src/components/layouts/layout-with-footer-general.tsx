import useLayout from '@/lib/hooks/use-layout';
import FooterNew from './footer-new';
import Header from './header';
import HeaderGeneral from './header-general';
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';

const SiteGeneralLayoutWithFooter: React.FC = ({ children }) => {
  const { layout } = useLayout();
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      {/* {layout === 'minimal' ? <HeaderMinimal layout={layout} /> : <Header layout={layout} />} */}
      {layout === 'minimal' ? <HeaderMinimal layout={layout} /> : <HeaderGeneral layout='compact' />}
      {children}
      <MobileNavigation />
      <FooterNew />
    </div>
  );
};
export const getLayoutWithFooterGeneral = (page: React.ReactElement) => (
  <SiteGeneralLayoutWithFooter>{page}</SiteGeneralLayoutWithFooter>
);
export default SiteGeneralLayoutWithFooter;