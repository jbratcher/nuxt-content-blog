<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col class="py-0 px-6">
        <!-- Hero Section -->
        <TheHero
          buttonOutline
          buttonText="Get Started"
          buttonTo="writing-content"
          dark
          headerText="Nuxt Content Blog"
          imageSource="/images/vbanner.jpg"
          subText="Quickly spin up a static site using Nuxt with Netlify CMS.
                  Push to deploy on Netlify."
        />
        <nuxt-content
          class="px-6"
          :class="$breakpoint.mdAndUp ? 'py-12' : 'py-6'"
          :document="hello"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const hello = await $content("hello").fetch();
    return {
      hello
    };
  }
};
</script>

<style></style>
