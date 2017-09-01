import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      version: null
    },

    actions: {
      async init ({commit}) {
        try {
          const {data} = await axios.get('https://api.github.com/repos/Kylart/Kawanime/releases')
          commit('setVersion', data[0].name)
        } catch (e) {}
      }
    },

    mutations: {
      setVersion (state, data) {
        state.version = data
      }
    },

    getters: {}
  })
}
