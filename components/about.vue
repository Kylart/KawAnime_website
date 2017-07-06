<template>
  <section id="about">
    <h1 class="subtitle">What is KawAnime?</h1>
    <div class="container">
      <h5 class="text">
        KawAnime is a desktop app with the purpose of having anyone able to easily download
        tons of anime as much as being able to download one of the latest releases with just a click.
      </h5>
      <h5 class="text">
        KawAnime offers many features to follow the anime world. It was made by anime fans and designed for them.
      </h5>
      <h5 class="text try-it">Try it out, it is free!</h5>
    </div>

    <div class="text download">
      <el-button class="download-btn">Download</el-button>
    </div>
  </section>
</template>

<style scoped>
  #about
  {
    padding-top: 30px;
    height: 100vh;
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
    width: 70%;
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
  }

  .try-it
  {
    font-size: 25px;
    font-weight: 600;
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
