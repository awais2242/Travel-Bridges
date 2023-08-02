import { getLayoutWithFooterGeneral } from '@/components/layouts/layout-with-footer-general';
import Order from '@/components/orders/order-view';
import Seo from '@/components/seo/seo';
export { getServerSideProps } from '@/framework/order.ssr';
export default function OrderPage() {
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Order />
    </>
  );
}

OrderPage.getLayout = getLayoutWithFooterGeneral;

// wallet_point only parent order - no children
