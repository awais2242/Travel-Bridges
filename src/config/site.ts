import { Routes } from '@/config/routes';

export const siteSettings = {
  name: 'FTCommerce',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'FTCommerce',
    href: '/grocery',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Krypton',
      furniture: 'Radon',
      bag: 'Oganesson',
      makeup: 'Neon',
      book: 'Xenon',
      medicine: 'Helium',
      default: 'Argon',
    },
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.refunds, label: 'text-my-refunds' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
    { href: Routes.changePassword, label: 'profile-sidebar-password' },
  ],
  // dashboardSidebarMenu: [

  // ],
  dashboardSidebarMenu: {
    common: [
      {
        href: Routes.profile,
        label: 'profile-sidebar-profile',
      },
      {
        href: Routes.changePassword,
        label: 'profile-sidebar-password',
      },
    ],
    admin: [
      {
        href: Routes.admin.userList,
        label: 'profile-sidebar-user-list',
      },
    ],
    user: [
      {
        href: Routes.help,
        label: 'profile-sidebar-help',
      },
    ],
    logout: {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  },
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'Wabusinessapi',
      href: 'https://vemporiums.com/',
    },
    address: '2429 River Drive, Suite 35 Cottonhall, CA 2296 United Kingdom',
    email: 'dummy@dummy.com',
    phone: '+1 256-698-0694',
    menus: [
      {
        title: 'text-company',
        links: [
          {
            name: 'text-about-us',
            href: '/',
          },
          {
            name: 'text-whywabusinessapi',
            href: '/',
          },
          {
            name: 'text-public-policy',
            href: '/',
          },
        ],
      },
      {
        title: 'text-solution',
        links: [
          {
            name: 'text-customer-data-platform',
            href: '/',
          },
          {
            name: 'text-sms-marketing',
            href: '/',
          },
          {
            name: 'text-contact-center',
            href: '/',
          },
        ],
      },
      {
        title: 'text-resources',
        links: [
          {
            name: 'text-blog',
            href: Routes.privacy,
          },
          {
            name: 'text-apidocs',
            href: Routes.terms,
          },
          {
            name: 'text-help-center',
            href: '/',
          },
        ],
      },
    ],
    payment_methods: [
      {
        img: '/payment/master.png',
        url: '/',
      },
      {
        img: '/payment/skrill.png',
        url: '/',
      },
      {
        img: '/payment/paypal.png',
        url: '/',
      },
      {
        img: '/payment/visa.png',
        url: '/',
      },
      {
        img: '/payment/discover.png',
        url: '/',
      },
    ],
    description: [
      {
        title: 'text-privacy-policy',
        url: '/',
      },
      {
        title: 'text-legal',
        url: '/',
      },
      {
        title: 'text-wabusinessapi',
        url: '/',
      },
      {
        title: 'text-press-media',
        url: '/',
      },
      {
        title: 'text-investors',
        url: '/',
      },
    ],
  },
};
