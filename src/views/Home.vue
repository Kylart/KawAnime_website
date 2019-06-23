<template lang="pug">
  div
    home-header
    features
    support
</template>

<script>
import HomeHeader from '@/components/home/header.vue'
import Features from '@/components/home/features.vue'
import Support from '@/components/home/support.vue'

export default {
  components: {
    HomeHeader,
    Features,
    Support
  }
}
</script>
