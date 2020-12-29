
import CONFIG from '@/config/Config'
import { Get, Post, Delete } from '@/utils/RequestService'

var apiUrl = CONFIG.API_POINT
var service = {
  login: data => Post(`${apiUrl}/login`, data),
  changePassword: data => Post(`${apiUrl}/admin/change-password`, data)
}

export default service
