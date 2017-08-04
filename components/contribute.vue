<template>
  <section id="contribute">
    <h3 class="head">Contribute & help</h3>
    <div class="description subtitle">
      There are several ways to help this project.
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6 class="description opt">
        Help develop KawAnime
        <br>
        <a href="https://github.com/Kylart/KawAnime" target="_blank">
          <img src="static/images/programming.gif" class="gif"/>
        </a>
      </v-flex>
      <v-flex xs12 md6 class="description opt">
        Report bugs or propose features
        <br>
        <a href="https://github.com/Kylart/KawAnime/issues" target="_blank">
          <img src="static/images/idea.gif" class="gif"/>
        </a>
      </v-flex>
      <v-flex xs12 class="description opt">
        Donate
        <v-layout row wrap>
          <v-flex xs12 md7>
            <img src="static/images/Hestia.gif" class="gif"/>
          </v-flex>
          <v-flex xs12 md2>
            <img src="static/images/patreon.png" class="pp-links"/>
            <br>
            <img src="static/images/paypal.png" class="pp-links"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
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
