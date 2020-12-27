import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var state = {
  listHomepageService: []
}

var getters = {
  listHomepageService: state => state.listHomepageService
}

var mutations = {
  SET_LIST_HOMEPAGE_SERVICE: (state, data) => { state.listHomepageService = data }
}

export default { state, getters, mutations }
