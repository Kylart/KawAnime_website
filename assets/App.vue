<template lang="pug">
  v-app(toolbar)
    v-toolbar(fixed).primary
      v-spacer.hidden-xs-only
      v-toolbar-side-icon(@click.stop="drawer = !drawer").hidden-sm-and-up
      v-toolbar-items.hidden-xs-only
        template(v-for="item in items")
          v-btn(
            flat
            v-scroll-to="{ element: item.to, duration: 1500, easing: [.6, .80, .30, 1.2] }"
          ).white--text {{ item.title }}
      v-spacer.hidden-xs-only

    v-navigation-drawer(temporary dark v-model=drawer).pb-0.hidden-sm-and-up
      v-list
        v-list-tile(to="/")
          v-list-tile-action
            img(src="static/images/icon.png" height="50")
          v-list-tile-title.title KawAnime

    main
      router-view

    v-footer.grey.darken-4
      v-spacer
      div.footer-text © 2016 - {{ (new Date()).getYear() + 1900 }} Kylart
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],
    data () {
      return {
        drawer: false,
        items: [
          {to: '#title', title: 'Home'},
          {to: '#features', title: 'Features'},
          {to: '#about', title: 'About'},
          {to: '#download', title: 'Download'},
          {to: '#contribute', title: 'Contribute'},
          {to: '#contact', title: 'Contact'}
        ]
      }
    }
  }
</script>

<style>
  html
  {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after
  {
    box-sizing: border-box;
    margin: 0;
  }

  .footer-text
  {
    color: white;
  }
</style>

<style lang="stylus">
  @import './stylus/main.styl'
</style>
