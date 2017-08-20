<template lang="pug">
  div#title
    div
      div.bg
        div
          h1.kawanime KawAnime
          h2.subtitle The ultimate otaku software
      div#screenshot
        lazy-component
          img(src="http://i.imgur.com/TQAyUlD.png")
          h4.description KawAnime is a software designed #[strong by] otakus #[strong for] the otaku community.
          p.details Also, it can be a bit risky.
</template>

<style scoped>
  .bg
  {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    background-image: url('http://i.imgur.com/Dka7hIW.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 70vh;
    padding-bottom: 10vh;
  }

  .kawanime
  {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 200;
    font-size: 10vh;
    color: #35495e;
    letter-spacing: 3px;
  }

  .subtitle
  {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  #screenshot
  {
    text-align: center;
    margin-top: -25vh;
  }

  .description
  {
    font-weight: 200;
    font-size: 30px;
    color: #526488;
    word-spacing: 3px;
  }

  .details
  {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 100;
    color: #526488;
    text-align: right;
    padding-right: 10%;
    font-style: italic;
  }

  img
  {
    height: 50%;
    width: 75%;
    z-index: 5;
    margin-bottom: -2%;
  }
</style>
