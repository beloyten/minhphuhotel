import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var actions = {
  setListHomepageService({ commit }, data) {
    commit('SET_LIST_HOMEPAGE_SERVICE', data)
  },
  setListMinorService({ commit }, data) {
    commit('SET_LIST_MINOR_SERVICE', data)
  }
}

export default { actions }
