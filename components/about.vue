<template lang="pug">
  section#about
    h1.subtitle What is KawAnime?
    div.container
      h5.text
        | KawAnime is a desktop app with the purpose of having anyone able to easily download
        | tons of anime as much as being able to download one of the latest releases with just a click.
      h5.text KawAnime offers many other features to follow the anime world. It was made by anime fans and designed for them.
      h5.text.try-it Try it out, it is free!
      h5.details I mean... It's not like I #[strong want] you to download it or anything
</template>

<style scoped>
  #about
  {
    padding-top: 30px;
    min-height: 60vh;
  }

  .subtitle
  {
    text-align: center;
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 40px;
    color: #526488;
    word-spacing: 3px;
  }

  .container
  {
    width: 90%;
    margin: auto;
    padding-top: 10px;
    text-align: center;
  }

  .text
  {
    font-size: 20px;
    font-weight: 200;
    line-height: 35px;
    color: #526488;
    word-spacing: 2px;
    margin-top: 3vh;
  }

  .try-it
  {
    font-size: 25px;
    font-weight: 500;
    font-style: italic;
  }

  .details
  {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 100;
    color: #526488;
    font-style: italic;
  }

  .download
  {
    margin-top: 30px;
    text-align: center;
  }

  .download-btn
  {
    display: inline-block;
    width: 40vh;
    height: 7vh;
    font-size: 80%;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
</style>
