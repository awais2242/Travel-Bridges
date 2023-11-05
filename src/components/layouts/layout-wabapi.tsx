
import FooterNew from './footer-new-wabapi';
import HeaderWabapi from './header-wabapi';

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