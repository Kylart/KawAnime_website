<template lang="pug">
  v-app
    v-content
      router-view
</template>

<script>

export default {
  name: 'App',

  created () {
    this.$store.dispatch('getReleases')
  }
}
</script>

<style lang="stylus">
  *
    font-family Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
    // font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
</style>
