import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var state = {
  listHomepageService: [],
  listMinorService: []
}

var getters = {
  listHomepageService: state => state.listHomepageService,
  listMinorService: state => state.listMinorService
}

var mutations = {
  SET_LIST_HOMEPAGE_SERVICE: (state, data) => { state.listHomepageService = data },
  SET_LIST_MINOR_SERVICE: (state, data) => { state.listMinorService = data }
}

export default { state, getters, mutations }
