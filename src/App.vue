<template lang="pug">
  v-app
    v-toolbar(app)
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn(
          v-for='anchor in anchors',
          :key='anchor.text',
          flat,
          @click='goTo(anchor.to)'
        ) {{ anchor.text }}

      v-toolbar-items.hidden-md-and-up
        v-btn(
          v-for='anchor in anchors',
          :key='anchor.text',
          flat, icon
          @click='goTo(anchor.to)'
        )
          v-icon {{ anchor.icon }}

    v-content
      router-view

    v-footer.pr-2.pl-2(dark, app, absolute)
      v-spacer
      span © 2016 - {{ (new Date()).getYear() + 1900 }} Kylart
</template>

<script>

export default {
  name: 'App',

  created () {
    this.$store.dispatch('getReleases')
  },

  data: () => ({
    anchors: [
      {
        text: 'Home',
        to: '#header',
        icon: 'home'
      },
      {
        text: 'Download',
        to: '#features',
        icon: 'file_download'
      },
      {
        text: 'Help',
        to: '#support',
        icon: 'help'
      }
    ]
  }),

  methods: {
    goTo (id) {
      this.$vuetify.goTo(id)
    }
  }
}
</script>

<style lang="stylus">
  *
    font-family Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
    // font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
</style>
