<template>
  <v-container class="py-0" fluid>
    <v-row>
      <v-col class="pa-0">
        <!-- Hero Section -->
        <TheBlogSplash
          :articleUpdatedAt="formatDate(article.updatedAt)"
          :authorName="article.author.name"
          :avatarSrc="article.author.img"
          :headerText="article.title"
          imageSource="/images/vbanner.jpg"
          :subText="article.description"
        />

        <article class="mb-12">
          <v-container
            class="py-6"
            :class="$breakpoint.mdAndUp ? 'px-12' : 'px-6'"
          >
            <v-row>
              <v-col>
                <v-card
                  class="mx-auto"
                  flat
                  :width="$breakpoint.mdAndUp ? '75vw' : '90vw'"
                >
                  <template>
                    <h2
                      class="font-weight-bold pt-6 pb-3"
                      :class="$breakpoint.mdAndUp ? 'title' : 'display-1'"
                    >
                      Table of Contents
                    </h2>
                    <ul class="mb-12 pl-0 table-of-contents">
                      <li
                        v-for="link of article.toc"
                        :key="link.id"
                        :class="{
                          toc2: link.depth === 2,
                          toc3: link.depth === 3
                        }"
                      >
                        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                      </li>
                    </ul>
                  </template>
                  <nuxt-content :document="article" />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </article>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: "default",
  head() {
    let article = this.article;
    return {
      title: `${article.title} | Nuxt Netlify CMS Starter Kit`,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `${article.description}`
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      prev,
      next
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
<style lang="scss" scoped>
.table-of-contents {
  list-style-type: none;
}
</style>
