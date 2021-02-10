export default {
  target: 'static',
  head: {
    titleTemplate: '%s - Z-Works',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Een bedrijfsvideo maakt impact. Op televisie, social media en je website. Eenmalige investering, eindeloos resultaat. Laat je bedrijf zien met een professionele bedrijfsfilm van Z-Works.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
    html: {
      minify: {
        removeRedundantAttributes: false,
      },
    },
  },
};
