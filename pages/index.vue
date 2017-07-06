<template>
  <div>
    <head-title></head-title>
    <screenshot></screenshot>
    <features></features>
    <about></about>
    <download></download>
    <contribute></contribute>
  </div>
</template>

<script>
  import HeadTitle from '~components/headTitle.vue'
  import Screenshot from '~components/screenshot.vue'
  import Features from '~components/features.vue'
  import About from '~components/about.vue'
  import Download from '~components/download.vue'
  import Contribute from '~components/contribute.vue'

  export default {
    components: {
      HeadTitle,
      Screenshot,
      Features,
      About,
      Download,
      Contribute
    }
  }
</script>
