<template lang="pug">
  #support.main-container
    .title-container How to contribute ?

    v-container(grid-list-lg, fluid)
      v-layout(row, wrap, justify-center, align-center)
        v-flex(
          v-for='item in supportItems',
          :key='item.link',
          xs12, md4, xl2
        )
          v-card(dark).elem
            v-card-title.text-uppercase.elem-title
              span {{ item.title }}

            v-divider(dark)

            v-card-text.text {{ item.text }}

            v-divider

            v-card-actions
              v-spacer
              template(v-if='item.integratedUrl')
                a(:href='item.link')
                  img(:src='item.integratedUrl', width='150px')
              template(v-else)
                v-btn(:href='item.link')
                  v-icon open_in_new
                  span.pl-2 {{ item.buttonText }}
              v-spacer
</template>

<script>
export default {
  name: 'Support',

  data: () => ({
    supportItems: [
      {
        title: 'Help develop the app',
        link: 'https://github.com/Kylart/KawAnime',
        text: 'All the code is open source and available at Github.\nDon\'t hesitate to fork and PR!',
        buttonText: 'Check the repo'
      },
      {
        title: 'Donate with Paypal',
        link: 'https://paypal.me/KawAnime',
        text: 'If you don\'t know how to code or don\'t have the time but still want to help, you can donate some money on Paypal',
        buttonText: 'Donate'
      },
      {
        title: 'Patreon',
        integratedUrl: 'https://c5.patreon.com/external/logo/become_a_patron_button@2x.png',
        link: 'https://www.patreon.com/bePatron?u=7535010',
        text: 'Patrons help a lot, I cannot monetize the app in any way for obvious legal reasons. :('
      },
      {
        title: 'Discord',
        link: 'https://discord.gg/sdArN2Z',
        text: 'Join our Discord server and come talk with us about anime or share your ideas!',
        buttonText: 'Join'
      },
      {
        title: 'Contact me',
        link: 'mailto:kylart.dev@gmail.com',
        text: 'Got any question or request? Feel free to send me an email. I read all of them, promise!',
        buttonText: 'Contact'
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
  .main-container
    width 100%
    margin-top 16px

  .title-container
    width 100%
    text-align center
    padding 8px 16px

    font-size 24px

  .elem
    text-align center

    .elem-title
      display flex
      justify-content center

      font-weight bold
      letter-spacing 0.25em
      white-space pre
</style>
