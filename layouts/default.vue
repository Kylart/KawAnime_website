<template>
  <v-app>
    <v-toolbar fixed class="primary">
      <v-spacer class="hidden-xs-only"></v-spacer>
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-xs-only">
        <template v-for="item in items">
          <v-btn flat
                 class="white--text"
                 v-scroll-to="{ element: item.to, duration: 1500, easing: [.6, .80, .30, 1.2] }">
            {{ item.title }}
          </v-btn>
        </template>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main style="padding-top: 48px">
      <nuxt></nuxt>
    </main>
    <v-footer class="grey darken-4">
      <v-spacer></v-spacer>
      <div class="footer-text">© 2016 - {{ (new Date()).getYear() + 1900 }} Kylart</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
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
