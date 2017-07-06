<template>
  <section id="features">
    <h1 class="title">KawAnime does many things.</h1>
    <el-row class="features-container">
      <template v-for="(item, i) in features">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="feature-container">
          <el-row>
            <template v-if="i % 2 === 0">
              <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13" class="feature">
                <h2 class="feature-title">{{ item.title }}</h2>
                <p class="desc">{{ item.description }}</p>
              </el-col>
              <el-col :xs="0" :sm="0" :md="11" :lg="11" :xl="11" class="pic">
                <img src="https://i.ytimg.com/vi/NmLwkh8EEUY/maxresdefault.jpg" class="img-large"/>
              </el-col>
              <el-col :xs="24" :sm="24" :md="0" :lg="0" :xl="0" class="pic">
                <img src="https://i.ytimg.com/vi/NmLwkh8EEUY/maxresdefault.jpg" class="img-small"/>
              </el-col>
            </template>
            <template v-else>
              <el-col :xs="0" :sm="0" :md="11" :lg="11" :xl="11" class="pic">
                <img src="https://i.ytimg.com/vi/NmLwkh8EEUY/maxresdefault.jpg" class="img-large"/>
              </el-col>
              <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13" class="feature">
                <h2 class="feature-title">{{ item.title }}</h2>
                <p class="desc">{{ item.description }}</p>
              </el-col>
              <el-col :xs="24" :sm="24" :md="0" :lg="0" :xl="0" class="pic">
                <img src="https://i.ytimg.com/vi/NmLwkh8EEUY/maxresdefault.jpg" class="img-small"/>
              </el-col>
            </template>
          </el-row>
        </el-col>
      </template>
    </el-row>
  </section>
</template>

<style scoped>
  #features
  {
    margin-top: 8vh;
    padding-top: 5vh;
  }

  .title
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
    margin-top: 8vh;
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
    width: 70%;
    font-weight: 100;
    font-size: 17px;
    color: #526488;
    margin: auto;
    margin-top: 20px;
    line-height: 28px;
    word-spacing: 2px;
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
    max-width: 60%;
  }
</style>

<script>
  export default {
    data () {
      return {
        features: [
          {
            title: 'Be aware the latest releases.',
            description:
              'KawAnime lets you know the latest releases according to your preferred fansubs, directly from nyaa.',
            image: ''
          }, {
            title: 'Download any anime simply.',
            description:
              'KawAnime allows anyone to download any anime (via torrent) as easy as it should be. No more looking for batch torrents.',
            image: ''
          }, {
            title: 'Manage your watch lists',
            description:
            'Anyone can manage local watch lists easily in KawAnime. Soon enough, ' +
            'it will even be possible to link those to you MyAnimeList account',
            image: ''
          }, {
            title: 'Follow the anime world.',
            description: 'Don\'t ever be unaware of a news in the anime world!',
            image: ''
          }, {
            title: 'Follow the anime season.',
            description:
              'KawAnime offers a feature to follow the anime season simply, even adding anime to your watch lists on the go is easy!',
            image: ''
          }, {
            title: 'Start watching your anime directly from KawAnime',
            description:
            'No need to open yet another software to start watching your animes. ' +
            'You can start (and even delete) your anime files from within KawAnime. It will in your preferred app. ' +
            'This alongside a nice overview of the anime you are interested in watching!',
            image: ''
          }, {
            title: 'Don\'t forget what you watched.',
            description:
              'KawAnime stores your watching history. Of course, you can delete entries on the go if you need to. ( ͡° ͜ʖ ͡°)',
            image: ''
          }
        ]
      }
    }
  }
</script>
