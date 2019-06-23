<template lang="pug">
  .main-container
    .bg-container
      v-layout(justify-center, pt-4, pb-4)
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
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
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
    height 600px
    width 100%
    padding-top 60px

    background-image url('https://i.imgur.com/Dka7hIW.jpg')
    background-repeat no-repeat
    background-position top left
    background-size cover

    display flex
    justify-content center
    align-items flex-start

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
    margin-top -35vh

    .screenshot
      width 80%
      margin-top 32px
</style>
