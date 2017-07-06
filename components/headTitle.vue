<template>
  <section id="title" class="container">
    <div>
      <h1 class="title">
        KawAnime
      </h1>
      <h2 class="subtitle">
        The ultimate otaku software
      </h2>
    </div>
  </section>
</template>

<style scoped>
  #title
  {
    position: relative;
    background-image: url('~static/images/title_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 15vh;
    z-index: -5;
  }

  .container
  {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .title
  {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 200;
    font-size: 12vh;
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
</style>
