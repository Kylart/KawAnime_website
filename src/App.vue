<template lang="pug">
  main
    toolbar
    router-view
</template>

<script>
import Toolbar from '@/components/toolbar.vue'

export default {
  name: 'Layout',

  components: { Toolbar }
}
</script>

<style lang='stylus'>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100vh;
}

body, main {
  height 100%
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
