import colors from "vuetify/es5/util/colors";
import * as strUtil from "./utils/str-utils.js";

// format package name for title display
const title = strUtil.titleCase(
  process.env.npm_package_name.replace(/-/g, " ")
);

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** env variables used in vue components
   https://nuxtjs.org/api/configuration-env
   */
  env: {
    title: title || "",
    description: process.env.npm_package_description || ""
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: title || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** PWA configuration
   ** https://pwa.nuxtjs.org
   */
  pwa: {
    manifest: {
      icons: [
        {
          src: "/images/pwa-install.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/images/pwa-splash.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
  },
  /*
   ** Configure the generation of your universal web application to a static web application
   ** https://nuxtjs.org/api/configuration-generate/
   */
  generate: {
    fallback: true
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/global.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/breakpoint",
    "~/plugins/directives",
    "~/plugins/vuetify-theme-cache"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@aceforth/nuxt-optimized-images", "@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "nuxt-webfontloader"
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    },
    nestedProperties: ["author.name"]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Nuxt Optimized Images Config
   ** https://github.com/aceforth/nuxt-optimized-images
   */
  optimizedImages: {
    optimizeImages: true
  },
  /*
  // nuxt-webfontloader
  // handles efficient loading of web fonts
  */
  webfontloader: {
    // use custom instead of google property to prevent flash of invisible text(foit)
    custom: {
      families: ["Roboto"],
      urls: ["https://fonts.googleapis.com/css?family=Roboto&display=swap"]
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   **
   ** define additional themes
   ** colors object https://vuetifyjs.com/en/styles/colors
   */
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      icons: false
    },
    theme: {
      options: {
        minifyTheme: function(css) {
          return process.env.NODE_ENV === "production"
            ? css.replace(/[\r\n|\r|\n]/g, "")
            : css;
        }
      },
      light: true,
      themes: {
        light: {
          primary: colors.blueGrey.darken4,
          accent: colors.blue.lighten1,
          secondary: colors.lightBlue.darken3,
          info: colors.blueGrey.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.blue.base
        }
      }
    }
  }
};
