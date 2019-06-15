import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLoaded: false,
    releasesUrl: 'https://api.github.com/repos/Kylart/KawAnime/releases/latest',
    availableAssets: []
  },
  mutations: {
    hasLoaded (state) {
      state.hasLoaded = true
    },
    setAssets (state, assets) {
      state.availableAssets = assets
    }
  },
  actions: {
    async getReleases ({ state, commit }) {
      const { data: { assets } } = await axios.get(state.releasesUrl)

      commit('setAssets', assets)
    }
  },
  getters: {
    getAsset (state) {
      return (ext) => {
        const entry = state.availableAssets.find(({ name }) => name.split('.').slice(-1)[0] === ext)

        return entry
          ? { name: entry.name, url: entry.browser_download_url }
          : {}
      }
    }
  }
})
