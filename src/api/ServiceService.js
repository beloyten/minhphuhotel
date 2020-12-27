
import CONFIG from '@/config/Config'
import { Get, Post, Put, Delete } from '@/utils/RequestService'

var apiUrl = CONFIG.API_POINT
var service = {
  getAllHomepageService: () => Get(`${apiUrl}/all/get-all-homepage-service`),
  updateService: data => Put(`${apiUrl}/admin/edit-post`, data),
  getOnePost: id => Get(`${apiUrl}/all/get-one-post/${id}`),
  getAllMinorService: () => Get(`${apiUrl}/all/get-minor-service`),
  createService: data => Post(`${apiUrl}/admin/create-post`, data),
  deleteService: data => Delete(`${apiUrl}/admin/delete-post`, data),
}

export default service