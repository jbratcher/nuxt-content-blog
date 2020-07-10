<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col class="py-0 px-6">
        <!-- Hero Section -->
        <TheSplash
          headerText="Blog"
          imageSource="/images/vbanner.jpg"
          subText="Thoughts on Nuxt Content"
        />

        <v-container :class="$breakpoint.mdAndUp ? 'px-12' : 'px-6'" fluid>
          <v-row>
            <v-col
              v-for="(article, index) in articles"
              :key="index"
              :class="$breakpoint.mdAndUp ? '' : 'mb-12'"
              cols="12"
              sm="6"
            >
              <v-card
                class="d-flex flex-column"
                height="100%"
                :flat="$breakpoint.smAndDown"
                :tile="$breakpoint.smAndDown"
              >
                <v-img
                  src="/images/vbanner.jpg"
                  lazy-src="https://lorempixel.com/400/200"
                  max-height="200px"
                />
                <v-container class="d-flex align-center pb-0">
                  <v-avatar>
                    <img :src="article.author.img" :alt="article.author.name" />
                  </v-avatar>
                  <span class="title ml-3">{{ article.author.name }}</span>
                </v-container>
                <v-card-title
                  :class="$breakpoint.mdAndUp ? 'display-1' : 'headline'"
                  >{{ article.title.substring(0, 70) }}</v-card-title
                >
                <v-card-subtitle
                  :class="$breakpoint.mdAndUp ? 'subtitle-1' : 'body-2'"
                  >{{ article.description }}</v-card-subtitle
                >
                <v-btn
                  class="mt-auto ml-3 mb-12 body-2"
                  color="primary"
                  :name="article.title"
                  nuxt
                  max-width="200px"
                  :to="`blog/${article.slug}`"
                  >Read more...</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: `Blog | Nuxt Netlify CMS Starter Kit`,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `A blog using Nuxt and Netlify CMS`
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      articles
    };
  }
};
</script>
<style lang="scss"></style>
