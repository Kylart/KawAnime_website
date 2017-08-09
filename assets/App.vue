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

    v-navigation-drawer(temporary dark v-model="drawer").pb-0.hidden-sm-and-up
      v-list
        v-list-tile(to="/")
          v-list-tile-action
            img(src="static/images/icon.png" height="50")
          v-list-tile-title.kawanime KawAnime
        v-divider
        v-subheader
        template(v-for="item in items")
          v-list-tile(
            @click="drawer = !drawer"
            v-scroll-to="{ element: item.to, duration: 1500, easing: [.6, .80, .30, 1.2] }"
          )
            v-list-tile-action
              v-icon.white--text {{ item.action }}
            v-list-tile-title {{ item.title }}

    main(style="margin-top: 48px;")
      router-view

    v-footer.grey.darken-4
      v-spacer
      div.white--text © 2016 - {{ (new Date()).getYear() + 1900 }} Kylart
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],
    data () {
      return {
        drawer: false,
        items: [
          {to: '#title', title: 'Home', action: 'home'},
          {to: '#features', title: 'Features', action: 'done_all'},
          {to: '#about', title: 'About', action: 'more'},
          {to: '#download', title: 'Download', action: 'file_download'},
          {to: '#contribute', title: 'Contribute', action: 'help'},
          {to: '#contact', title: 'Contact', action: 'mail_outline'}
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

  .kawanime
  {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 200;
    font-size: 5vh;
    color: #35495e;
    letter-spacing: 1.5px;
  }
</style>

<style lang="stylus">
  @import './stylus/main.styl'
</style>
