import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/settings/contact-form';
import { Image } from '@/components/ui/image';
import contactIllustration from '@/assets/contact-illustration.svg';
import { getLayoutWithFooter } from '@/components/layouts/layout-with-footer-landing';
import LandingBody from '@/components/layouts/landing-body';
import { formatAddress } from '@/lib/format-address';
import { getIcon } from '@/lib/get-icon';
import isEmpty from 'lodash/isEmpty';
import * as socialIcons from '@/components/icons/social';
import Seo from '@/components/seo/seo';
import { useSettings } from '@/framework/settings';
// export { getStaticProps } from '@/framework/general.ssr';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const LandingPage = () => {
  const { t } = useTranslation('common');
  const { settings } : any = useSettings();
  return (
    <>
      <Seo title={'Landing'} url={'Landing'} />
      <LandingBody layout={'compact'} />
    </>
  );
};
LandingPage.getLayout = getLayoutWithFooter;
export default LandingPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'landing'])),
    },
  };
};