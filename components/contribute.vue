<template lang="pug">
  section#contribute
    h3.head Contribute & help
    .description.subtitle
      | There are several ways to help this project.
    v-layout(row, wrap)
      v-flex.description.opt(xs12, md6)
        | Help develop KawAnime
        br
        a(href='https://github.com/Kylart/KawAnime', target='_blank')
          lazy-component
            img.gif(src='https://media.giphy.com/media/3owvKqQC5JvrZ152ik/giphy.gif')
      v-flex.description.opt(xs12, md6)
        | Report bugs or propose features
        br
        a(href='https://github.com/Kylart/KawAnime/issues', target='_blank')
          lazy-component
            img.gif(src='https://media.giphy.com/media/l3fzUIUsIzBzab79e/giphy.gif')
      v-flex.description.opt(xs12)
        | Donate
        v-layout(row, wrap)
          v-flex(xs12, md7)
            lazy-component
              img.gif(src='https://media.giphy.com/media/l3fzLKYzWnoQHo4Fi/giphy.gif')
          v-flex(xs12, md2)
            a(href='https://www.patreon.com/kylart', target='_blank')
              lazy-component
                img.pp-links(src='static/images/patreon.png')
            br
            a(href='https://www.paypal.me/KawAnime')
              lazy-component
                img.pp-links(src='static/images/paypal.png')
</template>

<style scoped>
  #contribute
  {
    text-align: center;
  }

  .head
  {
    text-align: center;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 40px;
    color: #526488;
    word-spacing: 3px;
    margin-bottom: 5vh;
  }

  .description.subtitle
  {
    font-size: 36px;
  }

  .description
  {
    margin-bottom: 25px;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 30px;
    color: #526488;
    word-spacing: 3px;
  }

  .opt
  {
    min-height: 50vh;
    margin-bottom: 20px;
  }

  .gif
  {
    margin-top: 15px;
    max-width: 50%;
    max-height: 40vh;
  }

  .pp-links
  {
    margin-top: 4vh;
    max-height: 15vh;
  }
</style>
