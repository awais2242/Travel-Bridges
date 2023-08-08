// import Header from './header';
import HeaderWabapi from './header-wabapi';
import FooterNew from './footer-new-wabapi';
import MobileNavigation from './mobile-navigation';

export default function GeneralLayout({
  children,
  layout,
}: React.PropsWithChildren<{ layout?: string }>) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      {/* <Header layout={layout} /> */}
      <HeaderWabapi layout='compact' />
      {children}
      <MobileNavigation />
      <FooterNew />
    </div>
  );
}

export const getGeneralLayout = (page: React.ReactElement) => (
  <GeneralLayout layout={page.props.layout}>
    {page}
    <MobileNavigation />
  </GeneralLayout>
);
