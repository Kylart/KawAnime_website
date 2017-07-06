<template>
  <section id="about">
    <h1 class="subtitle">What is KawAnime?</h1>
    <div class="top">
      <h5 class="text">
        KawAnime is a side-project I started in the end of 2016. It is a desktop app which purpose was for me to
        be able to download easily
        tons of anime as much as being able to download one of the latest releases with just a click.
      </h5>
      <h5 class="text">
        I have a obsession of being able to do everything within the same window. So, with time, KawAnime ended up doing
        lots of things.
      </h5>
    </div>
    <div class="bottom" id="download">
      <h5 class="text">
        KawAnime allows anyone to access a lot of data concerning the anime world.
      </h5>
      <h5 class="text">
        Download and watch animes easily. Manage your watch lists and research anime on the go. Easy!
      </h5>
      <h5 class="text">
        KawAnime offers lots of features. Yet the best way to make your opinion of its usefulness would be to do
        the same thing you surely do for your animes.
      </h5>
      <h5 class="text try-it">Try it out, it is free!</h5>
      <h5 class="text">Not even a account registration thing to do!</h5>
    </div>
    <div class="text download">
      <el-button class="download-btn" type="primary">Download</el-button>
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

  .top
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

  .bottom
  {
    text-align: center;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    margin: 30px 25vh 0;
    padding-top: 5px;
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
    font-size: 25px;
  }
</style>
