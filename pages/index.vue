<template>
  <v-container fluid>
    <head-title></head-title>
    <features></features>
    <about></about>
    <download></download>
    <contribute></contribute>
  </v-container>
</template>

<script>
  import HeadTitle from '~components/headTitle.vue'
  import Features from '~components/features.vue'
  import About from '~components/about.vue'
  import Download from '~components/download.vue'
  import Contribute from '~components/contribute.vue'

  export default {
    components: {
      HeadTitle,
      Features,
      About,
      Download,
      Contribute
    }
  }
</script>
