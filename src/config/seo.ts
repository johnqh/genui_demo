export const SEO_CONFIG = {
  appName: 'GenUI Demo',
  appDomain: 'genui-demo.sudobility.com',
  companyName: 'Sudobility',
  baseUrl: 'https://genui-demo.sudobility.com',
  defaultOgImage: 'https://genui-demo.sudobility.com/logo.png',
  twitterHandle: undefined,
  supportedLanguages: ['en'] as string[],
  defaultLanguage: 'en' as const,
} as const;

/**
 * Returns true when the current hostname indicates a non-production environment
 * (localhost, preview deployments, staging). SEOHead uses this to auto-set
 * `noindex` so dev/staging pages are never accidentally indexed.
 */
export function isNonProductionHost(): boolean {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname;
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.includes('preview') ||
    hostname.includes('staging') ||
    hostname.includes('dev') ||
    hostname.endsWith('.pages.dev') ||
    hostname.endsWith('.vercel.app')
  );
}
