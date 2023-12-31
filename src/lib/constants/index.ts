export const CART_KEY = 'pick-cart';
export const TOKEN = 'token';
export const AUTH_TOKEN_KEY = 'auth_token';
export const AUTH_PERMISSIONS = 'auth_permissions';
export const LIMIT = 10;
export const SUPER_ADMIN = 'admin';
export const CUSTOMER = 'user';
export const CHECKOUT = 'ft-commerce-checkout';
export const SHOPS_LIMIT = 15;
export const RTL_LANGUAGES: ReadonlyArray<string> = ['ar', 'he'];
export const PRODUCT_INITIAL_FETCH_LIMIT = 30;
export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? "en";

export function getDirection(language: string | undefined) {
  if (!language) return 'ltr';
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}