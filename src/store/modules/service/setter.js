import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var actions = {
  setListHomepageService({ commit }, data) {
    commit('SET_LIST_HOMEPAGE_SERVICE', data)
  },
  setListMinorService({ commit }, data) {
    commit('SET_LIST_MINOR_SERVICE', data)
  },
  setListAllService({ commit }, data) {
    commit('SET_LIST_ALL_SERVICE', data)
  },
  setListAllPhotoGallery({ commit }, data) {
    commit('SET_LIST_ALL_PHOTO_GALLERY', data)
  },
  setListAllEvent({ commit }, data) {
    commit('SET_LIST_ALL_EVENT', data)
  },
  setListAllRoom({ commit }, data) {
    commit('SET_LIST_ALL_ROOM', data)
  },
  setListAllEmployee({ commit }, data) {
    commit('SET_LIST_ALL_EMPLOYEE', data)
  },
  setListAllBanner({ commit }, data) {
    commit('SET_LIST_ALL_BANNER', data)
  },
  setContact({ commit }, data) {
    commit('SET_CONTACT', data)
  },
  setPreface({ commit }, data) {
    commit('SET_PREFACE', data)
  }
}

export default { actions }
