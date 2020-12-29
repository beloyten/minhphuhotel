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
  },
  getAllService(ctx) {
    return new Promise(async resolve => {
      var res = await API.getAllService()
      if(res && res.data) {
        ctx.dispatch('setListAllService', res.data)
      }
      resolve(res)
    })
  },
  createBanner(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.createBanner(data)
      resolve(res)
    })
  },
  deleteBanner(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.deleteBanner(data)
      resolve(res)
    })
  },
  updateBanner(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.updateBanner(data)
      resolve(res)
    })
  },
  getAllBanner(ctx) {
    return new Promise(async resolve => {
      var res = await API.getAllBanner()
      if(res && res.data) {
        ctx.dispatch('setListAllBanner', res.data)
      }
      resolve(res)
    })
  },
  getContact(ctx) {
    return new Promise(async resolve => {
      var res = await API.getContact()
      if(res && res.data) {
        ctx.dispatch('setContact', res.data)
      }
      resolve(res)
    })
  },
  updateContact(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.updateContact(data)
      resolve(res)
    })
  },
  bookService(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.bookService(data)
      resolve(res)
    })
  },
  addPhotoToGallery(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.addPhotoToGallery(data)
      resolve(res)
    })
  },
  addPhotoToGallery(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.addPhotoToGallery(data)
      resolve(res)
    })
  },
  deleteImageGallery(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.deleteImageGallery(data)
      resolve(res)
    })
  },
  getAllPhotoInGallery(ctx) {
    return new Promise(async resolve => {
      var res = await API.getAllPhotoInGallery()
      console.log(res)
      if(res && res.data && res.data.content) {
        ctx.dispatch('setListAllPhotoGallery', res.data.content)
      }
      resolve(res)
    })
  },
  editPreface(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.editPreface(data)
      resolve(res)
    })
  },
  getPreface(ctx) {
    return new Promise(async resolve => {
      var res = await API.getPreface()
      if(res && res.data) {
        ctx.dispatch('setPreface', res.data)
      }
      resolve(res)
    })
  },
  getAllEvent(ctx) {
    return new Promise(async resolve => {
      var res = await API.getAllEvent()
      if(res && res.data) {
        ctx.dispatch('setListAllEvent', res.data)
      }
      resolve(res)
    })
  },
  createRoom(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.createRoom(data)
      resolve(res)
    })
  },
  deleteRoom(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.deleteRoom(data)
      resolve(res)
    })
  },
  updateRoom(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.updateRoom(data)
      resolve(res)
    })
  },
  getAllRoom(ctx) {
    return new Promise(async resolve => {
      var res = await API.getAllRoom()
      if(res && res.data) {
        ctx.dispatch('setListAllRoom', res.data)
      }
      resolve(res)
    })
  },
  getOneRoom(ctx, id) {
    return new Promise(async resolve => {
      var res = await API.getOneRoom(id)
      resolve(res)
    })
  },
  createEmployee(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.createEmployee(data)
      resolve(res)
    })
  },
  deleteEmployee(ctx, id) {
    return new Promise(async resolve => {
      var res = await API.deleteEmployee(id)
      resolve(res)
    })
  },
  updateEmployee(ctx, data) {
    return new Promise(async resolve => {
      var res = await API.updateEmployee(data)
      resolve(res)
    })
  },
  getAllEmployee(ctx) {
    return new Promise(async resolve => {
      var res = await API.getAllEmployee()
      if(res && res.data) {
        ctx.dispatch('setListAllEmployee', res.data)
      }
      resolve(res)
    })
  }
}

export default { actions }