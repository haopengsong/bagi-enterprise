/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */

/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'xChat V4.0.0',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'xChat',
  },
  Meta: {
    Description: 'Launch xGLM to unlock the full potential of AI',
    SiteName: 'xChat - The Generative Large lang Model for everyone',
    ThemeColor: '#32383E',
    TwitterSite: '@',
  },
  URIs: {
        Home: 'https://www.bing.com',
    CardImage: 'https://www.bing.com',
    OpenRepo: 'https://www.bing.com',
    OpenProject: 'https://www.bing.com',
    SupportInvite: 'https://www.bing.com',
    PrivacyPolicy: 'https://www.bing.com',
  },
} as const ;