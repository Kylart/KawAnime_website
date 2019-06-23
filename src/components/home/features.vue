<template lang="pug">
  .main-container
    v-carousel(dark)
      v-carousel-item(
        v-for='(item, index) in items',
        :key='index'
      )
        v-container.elem-container(fluid, fill-height, pr-4, pl-4)
          v-layout(row, wrap, :reverse='index % 2 === 0')
            v-flex.image-container(xs6, sm7, md8, lg9)
              v-img(:src='item.url', :lazy-src='item.url', height='100%', contain)
            v-flex.text-container(xs6, sm5, md4, lg3)
              .text {{ item.text }}
</template>

<script>
export default {
  name: 'Features',

  data: () => ({
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
    ]
  }),

  computed: {
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
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-container
    padding 5vh 0

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
