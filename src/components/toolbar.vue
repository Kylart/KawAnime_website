<template lang="pug">
  .toolbar-container
    .toolbar-right
      template(v-for='button in buttons')
        .button.flex-centered(
          @click='goTo(button.to)'
        )
          .text {{ button.text }}
</template>

<script>
export default {
  name: 'Toolbar',

  data: () => ({
    buttons: [{
      text: 'Home',
      to: '/'
    }, {
      text: 'Features',
      to: '/features'
    }, {
      text: 'Download',
      to: '/download'
    }, {
      text: 'F.A.Q.',
      to: '/faq'
    }, {
      text: 'Help',
      to: '/help'
    }]
  }),

  methods: {
    goTo (path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>
  .toolbar-container {
    @apply fixed top-0 h-12 w-screen bg-indigo-800 px-8 flex justify-end shadow-lg
  }

  .toolbar-right {
    @apply w-2/5 flex justify-around items-center
  }

  .button {
    transition: all 0.3s ease;
    @apply h-full w-full px-2 cursor-pointer select-none
  }

  .button:hover {
    background-color: rgba(255, 255, 255, 0.3)
  }

  .text {
    @apply font-light text-xl tracking-wide text-white font-mono
  }
</style>
