import LocalStorage from '@/utils/LocalStorage'
import CONSTANT from '@/config/Constant'

var state = {
  listHomepageService: [],
  listMinorService: [],
  listAllService: [],
  listAllBanner: [],
  contact: {},
  listAllPhotoGallery: [],
  preface: {},
  listAllEvent: [],
  listAllRoom: [],
  listAllEmployee: []
}

var getters = {
  listHomepageService: state => state.listHomepageService,
  listMinorService: state => state.listMinorService,
  listAllService: state => state.listAllService,
  listAllPhotoGallery: state => state.listAllPhotoGallery,
  listAllEvent: state => state.listAllEvent,
  listAllRoom: state => state.listAllRoom,
  listAllEmployee: state => state.listAllEmployee,
  listAllBanner: state => state.listAllBanner,
  contact: state => state.contact,
  preface: state => state.preface
}

var mutations = {
  SET_LIST_HOMEPAGE_SERVICE: (state, data) => { state.listHomepageService = data },
  SET_LIST_MINOR_SERVICE: (state, data) => { state.listMinorService = data },
  SET_LIST_ALL_SERVICE: (state, data) => { state.listAllService = data },
  SET_LIST_ALL_PHOTO_GALLERY: (state, data) => { state.listAllPhotoGallery = data },
  SET_LIST_ALL_EVENT: (state, data) => { state.listAllEvent = data },
  SET_LIST_ALL_ROOM: (state, data) => { state.listAllRoom = data },
  SET_LIST_ALL_EMPLOYEE: (state, data) => { state.listAllEmployee = data },
  SET_LIST_ALL_BANNER: (state, data) => { state.listAllBanner = data },
  SET_CONTACT: (state, data) => { state.contact = data },
  SET_PREFACE: (state, data) => { state.preface = data }
}

export default { state, getters, mutations }
