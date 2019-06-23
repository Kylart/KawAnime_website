<template lang="pug">
  .main-container
    .bg-container
      transition(
        appear,
        appear-active-class='fade-top-enter-active'
      )
        .title-container
          .name(:style='titleSize.name') KawAnime
          .slogan(:style='titleSize.slogan') The ultimate otaku software

    transition(
      appear,
      appear-active-class='fade-bot-enter-active'
    )
      .screenshot-container
        img.screenshot(src='https://i.imgur.com/v3mKIbc.jpg')
        .sentence-container
          .cool-sentence(:style='sentenceSize.sentence') A tool to properly manage your anime life.
          .a-bit-risky(:style='sentenceSize.risky') though it can be a bit risky..

    v-layout(justify-center)
      v-btn(:href='downloadLink')
        span Download for {{ currentOs.name }}
</template>

<script>
export default {
  name: 'Header',

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

  data () {
    return {
      osIndex: 0,
      titleSizes: {
        xs: {
          name: '2rem',
          slogan: '0.75rem'
        },
        sm: {
          name: '2.5rem',
          slogan: '1rem'
        },
        md: {
          name: '3rem',
          slogan: '1.25rem'
        },
        lg: {
          name: '3.5rem',
          slogan: '1.5rem'
        },
        xl: {
          name: '4rem',
          slogan: '1.75rem'
        }
      }
    }
  },

  computed: {
    titleSize () {
      const size = this.titleSizes[this.$vuetify.breakpoint.name.slice(0, 2).toLowerCase()]

      return {
        name: { fontSize: size.name },
        slogan: { fontSize: size.slogan }
      }
    },
    sentenceSize () {
      return {
        sentence: { fontSize: `calc(${this.titleSize.name.fontSize} - 1rem)` },
        risky: { fontSize: `calc(${this.titleSize.slogan.fontSize} - 0.30rem)` }
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
  .fade-top-enter-active
    animation fade-top 1.25s ease

  @keyframes fade-top
    from
      opacity 0
      transform translateY(-30px)
    to
      opacity 1
      transform translateY(0)

  .fade-bot-enter-active
    animation fade-bot 1.25s ease-in

  @keyframes fade-bot
    from
      opacity 0
      transform translateY(30px)
    to
      opacity 1
      transform translateY(0)

  .main-container
    width 100%

  .bg-container
    // Container things
    min-height 85vh
    width 100%
    padding-top 10vh

    // Flex
    display flex
    justify-content center
    align-items flex-start

    // Background things
    background-image url('https://i.imgur.com/Dka7hIW.jpg')
    background-size cover
    background-position top left
    background-repeat no-repeat

  .title-container
    // global styling
    min-width 40%
    max-width 60%
    height 40%
    padding 16px
    border-radius 2px

    // Flex
    display flex
    flex-direction column
    justify-content center
    align-items center

    // color
    color rgba(255, 255, 255, 0.9)
    background-color rgba(30, 30, 30, 0.25)
    border-left solid 5px #a3bffa

    // Font
    letter-spacing 0.025em

  .screenshot-container
    width 100%
    text-align center

    .screenshot
      width 80%
      margin-top -40vh

  .sentence-container
    padding 1vh 10vw 0

    letter-spacing 0.025em

    .cool-sentence
      text-align center

    .a-bit-risky
      padding-top 20px
      text-align right
      font-style italic
</style>
