/**
 * SEO configuration for GenUI Demo.
 *
 * Used by generate-seo-assets.mjs from @johnqh/workflows to produce
 * per-route localized index.html files, sitemap.xml, and robots.txt.
 */

const APP_NAME = process.env.VITE_APP_NAME || 'GenUI Demo';

export default {
  supportedLanguages: ['en'],

  languageHreflangMap: {
    en: 'en',
  },

  primaryDomain: process.env.VITE_APP_DOMAIN || 'localhost',
  appName: APP_NAME,
  appDomain: process.env.VITE_APP_DOMAIN || 'localhost',
  // Canonical URLs have NO trailing slash (source of truth), including the
  // language root (/en). v2 of the generator defaults to trailing slashes, so
  // this flag must be present to preserve the no-slash convention shared with
  // seo_lib's runtime canonical and functions/_middleware.js. See sudobility/docs/SEO.md.
  trailingSlashUrls: false,
  robotsDisallowPaths: [],

  routes: [
    {
      key: 'demo',
      path: '',
      namespace: 'app',
      priority: '1.0',
      changefreq: 'weekly',
      indexable: true,
      meta: locale => ({
        title: locale.app.seo.demo.title,
        description: locale.app.seo.demo.description,
        keywords: locale.app.seo.demo.keywords,
      }),
    },
  ],
};
