<template lang="pug">
  section#download
    v-layout(row align-center justify-space-around).layout
      v-flex(xs8 md4)
        v-btn(block large primary, :href="link").download-btn Download for {{ currentOs }}
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
        currentOs: '',
        link: ''
      }
    },
    computed: {
      version () {
        return this.$store.state.version
      },
      shortVersion () {
        try {
          return this.version.replace('v', '')
        } catch (e) {}
      },
      baseUri () {
        return `https://github.com/Kylart/KawAnime/releases/download/${this.version}/KawAnime`
      },
      osList () {
        return [
          {short: 'Win', name: 'Windows', link: `${this.baseUri}-Setup-${this.shortVersion}.exe`},
          {short: 'Mac', name: 'MacOS', link: `${this.baseUri}-${this.shortVersion}.dmg`},
          {short: 'X11', name: 'UNIX', link: `${this.baseUri}-${this.shortVersion}-x86_64.AppImage`},
          {short: 'Linux', name: 'Linux', link: `${this.baseUri}_${this.shortVersion}_amd64.deb`}
        ]
      }
    },
    methods: {
      getOs () {
        const os = navigator.appVersion

        for (let i = 0; i < 4; ++i) {
          const elem = this.osList[i]
          if (os.indexOf(elem.short) !== -1) {
            this.link = elem.link
            return elem.name
          }
        }
      }
    }
  }
</script>
