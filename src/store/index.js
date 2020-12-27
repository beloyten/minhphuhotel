import Vue from 'vue'
import Vuex from 'vuex'

import CommonModule from './modules/common/index'
import AuthModule from './modules/auth/index'
import UserModule from './modules/user/index'
import ServiceModule from './modules/service/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    CommonModule,
    AuthModule,
    UserModule,
    ServiceModule
  }
})

export default store
