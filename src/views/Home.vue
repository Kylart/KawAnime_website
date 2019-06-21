<template lang="pug">
  .one-page-container
    .card
      transition(name='enter')
        .header(v-if='shows.title')
          .title KawAnime (かわニメ)
          .description The ultimate otaku software
      transition(name='enter')
        .screenshot(v-if='shows.image')
      transition(name='enter')
        .download-container(v-if='shows.image')
          button.download-btn(@click='download', target, class='focus:outline-none shadow hover:shadow-lg bg-indigo-500 hover:bg-indigo-400 border-b-4 border-r-2 border-indigo-600')
            svg.fill-current.h-6.mr-2(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 20 20')
              path(d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z')
            span Download
</template>

<script>
export default {
  name: 'Index',

  data: () => ({
    osIndex: 0,
    shows: {
      title: false,
      image: false,
      download: false
    }
  }),

  computed: {
    osList () {
      return [
        { short: 'Win', name: 'Windows', extension: 'exe' },
        { short: 'Mac', name: 'MacOS', extension: 'dmg' },
        { short: 'X11', name: 'UNIX', extension: 'AppImage' },
        { short: 'Linux', name: 'Linux', extension: 'deb' }
      ]
    },
    currentExt () {
      return this.osList[this.osIndex].extension
    },
    downloadLink () {
      return this.$store.getters['getAsset'](this.currentExt)
    }
  },

  mounted () {
    this.getOs()
    this.init()
  },

  methods: {
    init () {
      this.shows.title = true

      setTimeout(() => {
        this.shows.image = true
        this.$store.commit('hasLoaded')
      }, 750)
    },
    download () {
      window.open(this.downloadLink, '_blank')
    },
    getOs () {
      const os = navigator.appVersion

      for (let i = 0; i < 4; ++i) {
        const elem = this.osList[i]

        if (os.indexOf(elem.short) !== -1) {
          this.osIndex = i
          return elem.name
        }
      }
    }
  }
}
</script>

<style scoped>
  .enter-enter-active, .enter-leave-active {
    transition: all 1s;
  }

  .enter-enter, .enter-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .one-page-container {
    background-image: url('../assets/images/index-bg.jpg');
    /* Toolbar */
    height: calc(100% - 48px);
    @apply w-full bg-no-repeat bg-cover pr-32 flex items-center justify-end overflow-hidden
  }

  .card {
    height: 100%;
    @apply w-3/5 pt-4 pb-2 ml-16 flex flex-col justify-between items-center
  }

  .title {
    @apply font-mono font-semibold text-5xl tracking-wide text-white mb-3
  }

  .description {
    @apply font-mono font-semibold text-xl tracking-wide text-white
  }

  .header {
    background-color: rgba(30, 30, 30, 0.25);
    @apply w-full text-center p-4 mb-4 rounded-sm border-l-8 border-indigo-300
  }

  .screenshot {
    background-image: url('../assets/images/screenshot.jpg');
    @apply h-full w-full bg-cover bg-no-repeat
  }

  .download-container {
    min-width: 15rem;
    @apply p-4 w-1/4 h-20 text-center
  }

  .download-btn {
    transition: all 0.3s ease;
    @apply h-full w-full px-2 rounded text-xl tracking-wide text-white uppercase flex justify-around items-center
  }

  .download-btn > span {
    @apply w-3/4
  }

  .download-btn > svg {
    @apply w-1/4
  }
</style>
