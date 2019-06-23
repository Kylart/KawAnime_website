<template lang="pug">
  .main-container
    .sentence-container
      .cool-sentence(:style='sentenceSize.sentence') A tool to properly manage your anime life.
      .a-bit-risky(:style='sentenceSize.risky') though it can be a bit risky..

    v-layout(justify-center, mb-3)
      v-btn(:href='downloadLink', large, color='accent')
        span Download for {{ currentOs.name }}

    v-carousel(dark)
      v-carousel-item(
        v-for='(item, index) in items',
        :key='index'
      )
        v-container.elem-container(fluid, fill-height, pr-4, pl-4)
          v-layout(row, wrap, :reverse='index % 2 === 0')
            v-flex.image-container(xs6, sm7, lg8)
              v-img(:src='item.url', :lazy-src='item.url', height='100%', contain)
            v-flex.text-container(xs6, sm5, lg4)
              .text {{ item.text }}
</template>

<script>
export default {
  name: 'Features',

  mounted () {
    const os = navigator.appVersion

    for (let i = 0; i < 4; ++i) {
      const elem = this.osList[i]
      if (os.indexOf(elem.short) !== -1) {
        this.osIndex = i
        return elem.name
      }
    }
  },

  data: () => ({
    osIndex: 0,
    items: [
      {
        url: 'https://i.imgur.com/v3mKIbc.jpg',
        text: 'Stay up to date with anime releases'
      }, {
        url: 'https://i.imgur.com/RFOmtei.jpg',
        text: 'Download or Stream episodes on the go!'
      }, {
        url: 'https://i.imgur.com/z4enViU.jpg',
        text: 'Binge watch anime while streaming or not, don\'t ever think about having to search for the next episode you need to watch. Let the app handle it for you!'
      }, {
        url: 'https://i.imgur.com/9B6AxX9.png',
        text: 'Easy anime research. Get your information from your preferred source: MyAnimeList.net, Kitsu.io and Anilist.co are supported!'
      }, {
        url: 'https://i.imgur.com/kYbe1RL.jpg',
        text: 'Follow the anime world easily!'
      }, {
        url: 'https://i.imgur.com/bw3ianX.jpg',
        text: 'Check any season with Anichart or MyAnimeList, whenever you want!'
      }, {
        url: 'https://i.imgur.com/ZssBT0x.jpg',
        text: 'Play or delete local anime episodes with just a click.'
      }, {
        url: 'https://i.imgur.com/DDaDnp4.jpg',
        text: 'Manage local or hosted watch lists easily!'
      }, {
        url: 'https://i.imgur.com/6DyDf1D.jpg',
        text: 'Add anime to your lists without having to open a new tab!'
      }, {
        url: 'https://i.imgur.com/gGQRAGu.png',
        text: 'Auto track your progress, no need to do the manual work anymore!'
      }
    ],
    sentenceSizes: {
      xs: {
        sentence: '1rem',
        risky: '0.30rem'
      },
      sm: {
        sentence: '1.5rem',
        risky: '0.70rem'
      },
      md: {
        sentence: '2rem',
        risky: '0.95rem'
      },
      lg: {
        sentence: '2.5rem',
        risky: '1.2rem'
      },
      xl: {
        sentence: '3rem',
        risky: '1.45rem'
      }
    }
  }),

  computed: {
    sentenceSize () {
      const size = this.sentenceSizes[this.$vuetify.breakpoint.name.slice(0, 2).toLowerCase()]

      return {
        sentence: { fontSize: size.sentence },
        risky: { fontSize: size.risky }
      }
    },
    fontSize () {
      const viewport = this.$vuetify.breakpoint.name.slice(0, 2).toLowerCase()
      return {
        'font-size': {
          xs: '12px',
          sm: '16px',
          md: '22px',
          lg: '26px',
          xl: '28px'
        }[viewport]
      }
    },
    osList () {
      return [
        { short: 'Win', name: 'Windows', extension: 'exe' },
        { short: 'Mac', name: 'MacOS', extension: 'dmg' },
        { short: 'X11', name: 'UNIX', extension: 'AppImage' },
        { short: 'Linux', name: 'Linux', extension: 'deb' }
      ]
    },
    currentOs () {
      return this.osList[this.osIndex]
    },
    downloadLink () {
      return this.$store.getters['getAsset'](this.currentOs.extension).url
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-container
    padding 12px 0

  .sentence-container
    padding 1vh 10vw 2vh

    letter-spacing 0.025em

    .cool-sentence
      text-align center

    .a-bit-risky
      padding-top 20px
      text-align right
      font-style italic

  .elem-container
    background-color rgba(30, 30, 30, 0.9)
    color white

  .text-container, .image-container
    height 100%
    width 100%
    padding 28px

    display flex
    justify-content center
    align-items center

    .text
      text-align center
      line-height 2
</style>
