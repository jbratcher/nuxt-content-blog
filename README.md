<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/5mcyOOU.png" alt="Project logo"></a>
</p>

<h3 align="center">Nuxt Content Blog</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/jbratcher/nuxt-content-blog.svg)](https://github.com/jbratcher/nuxt-content-blog/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/jbratcher/nuxt-content-blog.svg)](https://github.com/jbratcher/nuxt-content-blog/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">A fully configured Nuxt PWA blog using Nuxt Content module for the CMS.

Use the power of Nuxt Content to create your new blog using markdown. Uses the Vuetify UI library. Supports one-click Netlify deployment. Optimized for performance and SEO. Production ready.
<br>

</p>

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Docker](#docker)

## About <a name = "about"></a>

This starter project was designed to bootstrap the development of a modern, headless CMS blog or static website. Using the power of Nuxt, you get a PWA that is pre-configured to maximize performance and SEO opportunities out of the box.

Vuetify is used for the UI library and this project features responsive fonts, theme caching, a global breakpoint fix and much more.

This project is also set to work with Netlify which offers a free starter plan for hosting personal projects, hobby sites, and experiments for free.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jbratcher/nuxt-content-blog)

Other features:

- Docker support
- Vuetify breakpoint fix
- Vuetify theme caching for performance
- Custom scroll directive for main nav

## Prerequisites

You will need to have Node and npm installed.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Deployment is dead simple using Netlify. Just one click for initial deployment and automatic deploys when you push new changes to Github.

## Deployment <a name = "deployment"></a>

The quickest way to get started is with Netlify's hyper-convenient **one-click Deploy To Netlify**, which will automatically create an instance of this project on your GitHub account and deploy it instantly to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jbratcher/nuxt-content-blog)

For local development:

1. Clone the repository locally and cd into the directory.

```bash
git clone https://github.com/jbratcher/nuxt-content-blog

cd nuxt-content-blog
```

2. Install dependencies.

```bash
yarn install
```

3. Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.

```bash
yarn dev
```

4. Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).

```bash
yarn build

# And to serve that deployment...
yarn start
```

5. Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

```bash
yarn generate
```

## Usage <a name = "usage"></a>

### Vuetify breakpoint fix

Vuetify currently has a bug where the breakpoint variable is lost on a page refresh. To prevent this we are using workaround in the form of a custom plugin, `breakpoint.js`. This plugin makes \$breakpoint globally available which persists on page refresh. See this [Vuetify issue](https://github.com/vuetifyjs/vuetify/issues/3436) for more details.

### Global Components

There are two main global components used for page intros, TheHero and TheSplash. TheHero is more prominent and contains a button prop that will link to a page or part of a page. TheSplash is used for displaying content only.

There is also a MenuLinks component that is used to display a list of navigation links.

### Google Custom Fonts

You can use any Google font by name. in `nuxt.config.js` simply replace the current font name with the new font name in the `webfontloader` options object. Also, do this for `variables.scss` to change the font used for Vuetify typography classes. Finally, do this for `global.scss`, in the `@font-face` property for `font-family` and `src`

Example:

```css
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto");
  font-display: swap;
}
```

## Docker <a name = "docker"></a>

There is basic docker support for those who prefer to develop this way. The full usage docs are in the Dockerfile.

```bash
# Build command
docker build -t nuxt:nginx .

# Serve command
docker run --name basic_nuxt --rm -d -p 3333:80 nuxt:nginx
```

This will serve the app on localhost:3333

### Start Creating

At this point you should be able to start customizing the application to your requirements.

### Performance Improvements

There are several improvements already coded into this repo allow us to keep the page speed score up while adding more dependencies like Vuetify.

Performance improvements come from minimizing bundle size by taking advantage of dynamic imports, tree-shaking, lazy-loading, and using async methods for external resources (i.e. pre-connecting to required origins).

For example, Vuetify requests the material design icon stylesheet without using `preload`. This makes the request [render blocking](https://web.dev/render-blocking-resources/#how-to-eliminate-render-blocking-stylesheets) and increases the time until the page is visible.

To solve this issue, we instead set the Vuetify options in `nuxt.config.js` to use no icons as a default setting.

`nuxt.config.js`

```javascript
defaultAssets: {
  icons: false
},
```

Instead, we will install the material design icons as a dependency.

`npm install --save @mdi/js`

This will allow us to dynamically import each icon we use into our components.

`MyComponent.vue`

```html
<template>
  <v-icon>{{ menuIcon }}</v-icon>
</template>

<script>
  import { mdiMenu } from "@mdi/js";
  export default {
    data() {
      return {
        menuIcon: mdiMenu
      };
    }
  };
</script>
```

This will allow us to only bundle the icons we use which is very effective with larger icons libraries like material design icons.
