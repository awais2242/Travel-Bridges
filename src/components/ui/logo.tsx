import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import { logoPlaceholder, logoPlaceholder3 } from '@/lib/placeholders';
import { logoPlaceholder2 } from '@/lib/placeholders';
import { settings } from '@/framework/static/seo';

// Create a custom interface for Logo props
interface LogoProps extends React.AnchorHTMLAttributes<{}> {
  isLandingPage?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  isLandingPage = false,
  ...props
}) => {
  // const {
  //   settings: { logo, siteTitle },
  // }: any = useSettings();
  return (
    <Link href="/" className={cn('inline-flex', className)} {...props}>
      <span className="relative h-12 w-24 overflow-hidden md:w-40">
        <Image
          src={logoPlaceholder3 }
          alt={'WABusiness Api'}
          layout="fill"
          objectFit="contain"
          loading="eager"
        />
      </span>
    </Link>
  );
};

export default Logo;
