<template>
  <div>
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
    <section id="screenshot">
      <img src="~static/images/screenshot.png">
      <h4 class="description">
        KawAnime is a software designed <strong>by</strong> otakus <strong>for</strong> the otaku community.
      </h4>
      <p class="details">Also, it can be a bit risky.</p>
    </section>
    <section id="features">
      <h1 class="subtitle">KawAnime does many things.</h1>
      <el-row class="features-container">
        <template v-for="(item, i) in features">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="feature-container">
            <el-row>
              <template v-if="i % 2 === 0">
                <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" class="feature">
                  <h2 class="feature-title">{{ item.title }}</h2>
                  <p class="feature-desc">{{ item.description }}</p>
                </el-col>
                <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                  <img src="https://i.ytimg.com/vi/NmLwkh8EEUY/maxresdefault.jpg" class="feature-img"/>
                </el-col>
              </template>
              <template v-else>
                <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                  <img src="https://i.ytimg.com/vi/NmLwkh8EEUY/maxresdefault.jpg" class="feature-img"/>
                </el-col>
                <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" class="feature">
                  <h2 class="feature-title">{{ item.title }}</h2>
                  <p class="feature-desc">{{ item.description }}</p>
                </el-col>
              </template>
            </el-row>
          </el-col>
        </template>
      </el-row>
    </section>
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
    <section id="contribute">

    </section>
  </div>
</template>

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

<style>
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
    font-size: 100px;
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

  #title
  {
    position: relative;
    background-image: url('~static/images/title_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 15vh;
    z-index: -5;
  }

  #screenshot
  {
    text-align: center;
    margin-top: -25vh;
  }

  #screenshot img
  {
    height: 50%;
    width: 75%;
    z-index: 4;
    margin-bottom: -2%;
  }

  #features
  {
    margin-top: 8vh;
    padding-top: 5vh;
  }

  #features .subtitle
  {
    text-align: center;
    font-weight: 200;
    letter-spacing: 2px;
  }

  .feature
  {
    margin-top: 8vh;
    text-align: center;
  }

  .features-container
  {
    padding: 50px;
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

  .feature-desc
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

  .feature-img
  {
    max-width: 95%;
  }

  #about
  {
    padding-top: 30px;
    height: 70vh;
  }

  #about .subtitle
  {
    text-align: center;
    font-weight: 200;
    letter-spacing: 2px;
  }

  #about .top
  {
    width: 70%;
    margin: auto;
    padding-top: 10px;
    text-align: center;
  }

  #about .text
  {
    font-size: 20px;
    font-weight: 200;
    line-height: 35px;
    color: #526488;
    word-spacing: 2px;
  }

  #about .bottom
  {
    text-align: center;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    margin: 30px 25vh 0;
    padding-top: 5px;
  }

  #about .try-it
  {
    font-size: 25px;
    font-weight: 600;
    font-style: italic;
  }

  #about .download
  {
    margin-top: 30px;
    text-align: center;
  }

  #about .download-btn
  {
    display: inline-block;
    width: 40vh;
    height: 7vh;
    font-size: 25px;
  }

  #contribute
  {
    height: 10000px;
  }
</style>
