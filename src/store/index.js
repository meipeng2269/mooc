import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    changeCount (state, step) {
      state.count += step
    }
  },
  actions: {
    changeCount (ctx, step) {
      setTimeout(() => {
        ctx.commit('changeCount', step)
      }, 3000)
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  },
  modules: {
  }
})
