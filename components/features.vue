<template>
  <section id="features">
    <h1 class="title-head">KawAnime does many things.</h1>
    <v-layout row wrap class="features-container">
      <template v-for="(item, i) in features">
        <v-flex xs12 class="feature-container">
          <v-layout row wrap>
            <template v-if="i % 2 === 0">
              <v-flex xs12 md6 class="feature">
                <h2 class="feature-title">{{ item.title }}</h2>
                <p class="desc">{{ item.description }}</p>
              </v-flex>
              <v-flex hidden-sm-and-down md6 class="pic">
                <lazy-component>
                  <img :src="item.pic" class="img-large"/>
                </lazy-component>
              </v-flex>
              <v-flex xs12 hidden-md-and-up class="pic">
                <lazy-component>
                  <img :src="item.pic" class="img-small"/>
                </lazy-component>
              </v-flex>
            </template>
            <template v-else>
              <v-flex hidden-sm-and-down md6 class="pic">
                <lazy-component>
                  <img :src="item.pic" class="img-large"/>
                </lazy-component>
              </v-flex>
              <v-flex xs12 md6 class="feature">
                <h2 class="feature-title">{{ item.title }}</h2>
                <p class="desc">{{ item.description }}</p>
              </v-flex>
              <v-flex xs12 hidden-md-and-up class="pic">
                <lazy-component>
                  <img :src="item.pic" class="img-small"/>
                </lazy-component>
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </template>
    </v-layout>
  </section>
</template>

<style scoped>
  #features
  {
    margin-top: 8vh;
    margin-bottom: 6vh;
    padding-top: 5vh;
  }

  .title-head
  {
    text-align: center;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 40px;
    color: #526488;
    word-spacing: 3px;
  }

  .feature
  {
    margin-top: 6vh;
    text-align: center;
  }

  .features-container
  {
    padding: 0 20px;
  }

  .feature-container
  {
    margin-top: 3vh;
  }

  .feature-title
  {
    font-weight: 200;
    font-size: 26px;
    color: #526488;
    padding-bottom: 5px;
    word-spacing: 3px;
  }

  .desc
  {
    max-width: 90%;
    font-weight: 100;
    font-size: 17px;
    color: #526488;
    margin: 20px auto auto;
    line-height: 28px;
    word-spacing: 2px;
    text-align: justify;
    text-align-last: center;
    -moz-text-align-last: center;
    -ms-text-align-last: center;
    white-space: pre-wrap;
  }

  .pic
  {
    text-align: center;
  }

  .img-large
  {
    max-width: 95%;
  }

  .img-small
  {
    padding-top: 20px;
    max-width: 88%;
  }
</style>

<script>
  export default {
    data () {
      return {
        image: 'static/images/Hestia.gif',
        features: [
          {
            title: 'Be aware of the latest releases',
            description:
              'KawAnime lets you know the latest releases according to your preferred fansubs, ' +
              'and lets you download them easily with just a click.',
            pic: 'static/images/releases.gif'
          }, {
            title: 'Download any anime simply',
            description:
              'KawAnime allows anyone to download any anime (via torrent) as easy as it should be. ' +
              'No more looking for batch torrents.',
            pic: 'static/images/downloader.gif'
          }, {
            title: 'Manage your watch lists',
            description:
            'Anyone can manage local watch lists easily in KawAnime. Soon enough, ' +
            'it will even be possible to link those to your MyAnimeList account',
            pic: 'static/images/Hestia.gif'
          }, {
            title: 'Follow the anime season',
            description:
              'KawAnime offers a feature to follow the anime seasons simply, even adding anime to your watch lists on the go is easy!',
            pic: 'static/images/Hestia.gif'
          }, {
            title: 'Start watching your anime directly from KawAnime',
            description:
            'No need to open yet another software to start watching your animes. ' +
            'You can start (and even delete) your anime files from within KawAnime. It will open in your preferred app. ' +
            'This alongside a nice overview of the anime you are interested in watching!',
            pic: 'static/images/local.gif'
          }, {
            title: 'Don\'t forget what you watched',
            description:
              'KawAnime stores your watching history. Of course, you can delete entries on the go if you need to. \n ( ͡°ʖ ͡°)',
            pic: 'static/images/Hestia.gif'
          }
        ]
      }
    }
  }
</script>
