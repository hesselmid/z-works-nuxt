export default {
  target: "static",
  head: {
    titleTemplate: "%s - Z-Works",
    htmlAttrs: {
      lang: "nl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Een bedrijfsvideo maakt impact. Op televisie, social media en je website. Eenmalige investering, eindeloos resultaat. Laat je bedrijf zien met een professionele bedrijfsfilm van Z-Works.",
      },
      {
        name: "google-site-verification",
        content: "LZgGPqTpyccWLs25eOrUBjXZho3UQOPUaruuXa0r-Vo",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://player.vimeo.com",
      },
      {
        rel: "preconnect",
        href: "https://i.vimeocdn.com",
      },
      {
        rel: "preconnect",
        href: "https://f.vimeocdn.com",
      },
    ],
  },
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics",
    "@nuxt/image",
  ],
  build: {
    html: {
      minify: {
        removeRedundantAttributes: false,
      },
    },
    transpile: ["vue2-smooth-scroll"],
  },
  plugins: ["~/plugins/vue2-smooth-scroll.js", "~/plugins/vimeo.client.js"],
  googleAnalytics: {
    id: "UA-136136233-11",
  },
};
