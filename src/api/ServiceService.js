
import CONFIG from '@/config/Config'
import { Get, Post, Put, Delete } from '@/utils/RequestService'

var apiUrl = CONFIG.API_POINT
var service = {
  getAllHomepageService: () => Get(`${apiUrl}/all/get-all-homepage-service`),
  updateService: data => Put(`${apiUrl}/admin/edit-post`, data),
  getOnePost: id => Get(`${apiUrl}/all/get-one-post/${id}`)
}

export default service