/* eslint-disable no-unused-expressions */
import API from '@/api/ServiceService'
import LocalStorage from '@/utils/LocalStorage'
import router from '@/router'
import store from '@/store'
var actions = {
  getAllHomepageService (ctx) {
    return new Promise(async resolve => {
        var res = await API.getAllHomepageService()
        if(res && res.data) {
          ctx.dispatch('setListHomepageService', res.data)
        }
        resolve(res)
    })
  },
  updateService (ctx, data) {
    return new Promise(async resolve => {
      var res = await API.updateService(data)
      resolve(res)
    })
  },
  getOnePost (ctx, data) {
    return new Promise(async resolve => {
      var res = await API.getOnePost(data)
      resolve(res)
    })
  },
  getAllMinorService (ctx) {
    return new Promise(async resolve => {
        var res = await API.getAllMinorService()
        if(res && res.data) {
          ctx.dispatch('setListMinorService', res.data)
        }
        resolve(res)
    })
  },
  createService (ctx, data) {
    return new Promise(async resolve => {
      var res = await API.createService(data)
      resolve(res)
    })
  },
  deleteService (ctx, data) {
    return new Promise(async resolve => {
      var res = await API.deleteService(data)
      resolve(res)
    })
  }
}

export default { actions }
