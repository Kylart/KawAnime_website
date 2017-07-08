<template>
  <section id="download">

  </section>
</template>

<style scoped>
  #download
  {
    height: 50vh;
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
