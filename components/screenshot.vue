<template>
  <section id="screenshot">
    <img src="~static/images/screenshot.png">
    <h4 class="description">
      KawAnime is a software designed <strong>by</strong> otakus <strong>for</strong> the otaku community.
    </h4>
    <p class="details">Also, it can be a bit risky.</p>
  </section>
</template>

<style scoped>
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
    width: 90%;
    z-index: 5;
    margin-bottom: -2%;
  }
</style>
