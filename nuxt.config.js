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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        hid: leadinfo,
        innerHTML: `
        (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[]; l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n; l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);} }(window,document,"script","https://cdn.leadinfo.net/ping.js","leadinfo","LI-6038FD7646E63"));
        `,
        type: "text/javascript",
        charset: "utf-8",
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
  modules: [
    [
      "@netsells/nuxt-hotjar",
      {
        id: "2253881",
        sv: "6",
      },
    ],
  ],
};
