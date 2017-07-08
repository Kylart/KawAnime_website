<template>
  <section id="contribute">
    <h3 class="title">Contribute & help</h3>
    <div class="description">
      There are several ways to help this project.
    </div>
    <v-layout row wrap>
      <v-flex xs6 class="description">
        Help us develop KawAnime
      </v-flex>
      <v-flex xs6 class="description">
        Donate
      </v-flex>
      <v-flex xs12  class="description">
        Report bugs or propose features
      </v-flex>
    </v-layout>
  </section>
</template>

<style scoped>
  #contribute
  {
    height: 100vh;
    text-align: center;
  }

  .title
  {
    text-align: center;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 40px;
    color: #526488;
    word-spacing: 3px;
    margin-bottom: 5vh;
  }

  .description
  {
    height: 150px;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 30px;
    color: #526488;
    word-spacing: 3px;
  }
</style>
