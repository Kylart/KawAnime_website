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
      <arrow-down v-if="scrollDown" @click.native="scrollDown = false"></arrow-down>
    </section>
    <section id="features" class="container">
      <h1>Hello</h1>
    </section>
  </div>
</template>

<script>
  import ArrowDown from '~components/ArrowDown.vue'

  export default {
    data () {
      return {
        scrollDown: true
      }
    },
    components: {
      ArrowDown
    }
  }
</script>

<style>
  .container
  {
    min-height: 80vh;
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
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle
  {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  #title
  {
    position: relative;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
