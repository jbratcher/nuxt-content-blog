<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar
      app
      :color="navBelowFold ? 'primary' : 'transparent'"
      dark
      elevate-on-scroll
      :height="navHeight"
      hide-on-scroll
      ref="nav"
      :scroll-threshold="$breakpoint.mdAndUp ? '450' : '0'"
      shrink-on-scroll
      tile
      v-scroll="handleScroll"
    >
      <v-toolbar-title
        class="align-self-center pb-0"
        :class="$breakpoint.mdAndUp ? 'pl-5' : 'pl-0'"
        >{{ appTitle }}</v-toolbar-title
      >
      <v-spacer />
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
        aria-label="menuopen"
        name="menuopen"
        x-large
      >
        <i aria-hidden="true" class="v-icon notranslate theme--dark">
          <v-icon>{{ menuIcon }}</v-icon>
        </i>
      </v-app-bar-nav-icon>
      <MenuLinks
        :general-links="generalLinks"
        list-class="d-md-flex hidden-sm-and-down"
      />
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      color="rgba(0,0,0,0.8)"
      dark
      fixed
      right
    >
      <MenuLinks :general-links="generalLinks" list-class="mobile" />
    </v-navigation-drawer>
    <!-- Nuxt content -->
    <v-main class="pa-0">
      <nuxt />
    </v-main>
    <!-- Footer Area -->
    <v-footer class="d-flex flex-column align-center py-12 text-center">
      <h2 class="mb-6" :class="$breakpoint.mdAndUp ? 'title' : 'headline'">
        {{ appTitle }}
      </h2>
      <p
        :class="{
          'body-1': $breakpoint.mdAndUp,
          'subtitle-1': $breakpoint.smAndDown
        }"
      >
        {{ appDescription }}
      </p>
      <nav>
        <ul class="d-flex flex-wrap py-3">
          <li v-for="(link, i) in footerLinks" :key="i + link.title">
            <v-btn :name="link.title" text rounded>{{ link.title }}</v-btn>
          </li>
        </ul>
      </nav>
      <v-container>
        <v-row>
          <v-col>
            {{ new Date().getFullYear() }}&nbsp;-&nbsp;
            <strong>{{ appTitle }}</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiHome, mdiMenu, mdiPost } from "@mdi/js";
export default {
  data() {
    return {
      appTitle: process.env.title,
      appDescription: process.env.description,
      drawer: false,
      // add footer links here
      footerLinks: [
        {
          title: "Home",
          to: "/"
        },
        {
          title: "Blog",
          to: "/blog"
        }
      ],
      // add main nav links here
      // material design icons https://materialdesignicons.com/
      generalLinks: [
        {
          icon: mdiHome,
          title: "Home",
          to: "/"
        },
        {
          icon: mdiPost,
          title: "Blog",
          to: "/blog"
        }
      ],
      menuIcon: mdiMenu,
      miniVariant: false,
      navBelowFold: false
    };
  },
  computed: {
    formattedAppTitle() {
      if (this.appTitle.length > 10) {
        return this.appTitle.substring(0, 10) + "...";
      } else {
        return this.appTitle;
      }
    },
    navHeight() {
      let height = "80px";
      switch (this.$breakpoint.name) {
        case "xs":
          height = "60px";
          break;
        case "sm":
          height = "60px";
          break;
        case "md":
          height = "60px";
          break;
        case "lg":
          height = "80px";
          break;
        case "xl":
          height = "90px";
          break;
      }
      return height;
    }
  },
  methods: {
    handleScroll: function(event) {
      if (window.pageYOffset > 150) {
        this.navBelowFold = true;
      } else {
        this.navBelowFold = false;
      }
    }
  }
};
</script>

<style lang="scss"></style>
