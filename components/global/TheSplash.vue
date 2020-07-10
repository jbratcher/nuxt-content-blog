<template>
  <v-container class="pa-0 white--text" fluid>
    <v-row>
      <v-col class="pa-0">
        <v-parallax
          dark
          :src="imageSource"
          lazy-src="https://picsum.photos/id/0/10/6"
        >
          <v-row align="center" justify="center">
            <v-col
              class="text-center"
              :class="$breakpoint.mdAndUp ? 'pa-12' : 'pa-6'"
              cols="12"
            >
              <h1
                :class="
                  $breakpoint.mdAndUp ? 'headline mb-12' : 'display-1 mb-6'
                "
              >
                {{ headerText }}
              </h1>
              <p
                class="mb-12"
                :class="$breakpoint.mdAndUp ? 'subtitle-1' : 'title'"
              >
                {{ subText }}
              </p>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TheSplash",
  props: {
    imageSource: {
      type: String,
      default: ""
    },
    headerText: {
      type: String,
      default: ""
    },
    subText: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.v-parallax {
  width: 100vw;
  > .v-parallax__image-container {
    filter: brightness(0.2);
  }
}
</style>
