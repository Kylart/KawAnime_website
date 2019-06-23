<template lang="pug">
  v-app
    v-toolbar.hidden-sm-and-down(app)
      v-spacer
      v-toolbar-items
        v-btn(
          v-for='anchor in anchors',
          :key='anchor.text',
          flat,
          @click='goTo(anchor.to)'
        ) {{ anchor.text }}

    v-content
      router-view

    v-footer.pr-2.pl-2(dark, app)
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
        to: '#header'
      },
      {
        text: 'Download',
        to: '#features'
      },
      {
        text: 'Help',
        to: '#support'
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
