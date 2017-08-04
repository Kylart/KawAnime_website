<template>
  <section id="download">
    <v-layout row align-center justify-space-around class="layout">
      <v-flex xs8 md4>
        <v-btn block large primary class="download-btn">Download for {{ currentOs }}</v-btn>
      </v-flex>
    </v-layout>
  </section>
</template>

<style scoped>
  #download
  {
    height: 30vh;
    margin-bottom: 5vh;
  }

  .layout
  {
    height: 100%;
  }

  .download-btn
  {
    height: 7vh;
  }
</style>

<script>
  export default {
    mounted () {
      this.currentOs = this.getOs() || null
    },
    data () {
      return {
        osList: [
          {short: 'Win', name: 'Windows'},
          {short: 'Mac', name: 'MacOS'},
          {short: 'X11', name: 'UNIX'},
          {short: 'Linux', name: 'Linux'}
        ],
        currentOs: ''
      }
    },
    methods: {
      getOs () {
        const os = navigator.appVersion

        for (let i = 0; i < 4; ++i) {
          const elem = this.osList[i]
          if (os.indexOf(elem.short) !== -1) {
            return elem.name
          }
        }
      }
    }
  }
</script>
