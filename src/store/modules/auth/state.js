import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var state = {
  resetToken: '',
  isLoggedInMinhPhu: LocalStorage.getItem(CONSTANT.IS_LOGGED) || !1,
  jwtMinhPhu: LocalStorage.getToken() || null,
  user: {}
}

var getters = {
  resetToken: state => state.resetToken,
  isLoggedInMinhPhu: state => state.isLoggedInMinhPhu,
  jwtMinhPhu: state => state.jwtMinhPhu,
  user: state => state.user
}

var mutations = {
  SET_RESET_TOKEN: (state, data) => { state.resetToken = data },
  SET_LOGGED_IN: (state, isLoggedInMinhPhu) => { state.isLoggedInMinhPhu = isLoggedInMinhPhu },
  SET_JWT: (state, jwtMinhPhu) => { state.jwtMinhPhu = jwtMinhPhu },
  SET_USER: (state, data) => { state.user = data }
}

export default { state, getters, mutations }
