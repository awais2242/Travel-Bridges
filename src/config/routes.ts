export const Routes = {
  home: '/',
  checkout: '/checkout',
  checkoutDigital: '/checkout/digital',
  checkoutGuest: '/checkout/guest',
  profile: '/profile',
  changePassword: '/change-password',
  orders: '/orders',
  order: (tracking_number: string) =>
    `/orders/${encodeURIComponent(tracking_number)}`,
  refunds: '/refunds',
  buy: '/buy',
  logout: '/logout',
  support: '/Support',
  orderReceived: '/order-received',
  products: '/products',
  product: (slug: string) => {
    // if (asPath) {
    //   return `/products/${encodeURIComponent(slug)}?type=${asPath}`;  
    // }
    return `/products/${encodeURIComponent(slug)}`;
  },
  privacy: '/privacy',
  terms: '/terms',
  trial: '/trial',
  help: '/help',
  contactUs: '/contact-us',
  shop: (slug: string) => `/shops/${encodeURIComponent(slug)}`,
  downloads: '/downloads',
  authors: '/authors',
  author: (slug: string) => `/authors/${encodeURIComponent(slug)}`,
  manufacturers: '/manufacturers',
  manufacturer: (slug: string) => `/manufacturers/${encodeURIComponent(slug)}`,
  search: '/search',
  wishlists: '/wishlists',
  questions: '/questions',
  reports: '/reports',
  searchOldAuriga: '/old-auriga/search',
  searchNewAuriga: '/new-auriga/search',
  searchHafeezCenter: '/hafeez-center-lahore/search',
  searchBookWorld: '/books-world/search',
};
