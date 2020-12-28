
import CONFIG from '@/config/Config'
import { Get, Post, Put, Delete } from '@/utils/RequestService'

var apiUrl = CONFIG.API_POINT
var service = {
  //post
  getAllHomepageService: () => Get(`${apiUrl}/all/get-all-homepage-service`),
  updateService: data => Put(`${apiUrl}/admin/edit-post`, data),
  getOnePost: id => Get(`${apiUrl}/all/get-one-post/${id}`),
  getAllMinorService: () => Get(`${apiUrl}/all/get-minor-service`),
  createService: data => Post(`${apiUrl}/admin/create-post`, data), // EVENT, SERVICE
  deleteService: data => Delete(`${apiUrl}/admin/delete-post`, data),
  getAllService: () => Get(`${apiUrl}/all/get-all-service`), // lấy tất cả service, dùng ở danh sách dịch vụ landing page
  //banner
  createBanner: data => Post(`${apiUrl}/admin/create-banner`, data),
  deleteBanner: data => Delete(`${apiUrl}/admin/delete-banner`, data),
  getAllBanner: () => Get(`${apiUrl}/all/get-all-banner`), 

  //contact Controller
  getContact: () => Get(`${apiUrl}/all/get-contact`), 
  updateContact: data => Put(`${apiUrl}/admin/edit-contact`, data),  //k can truyen id

  //booking
  bookService: data => Post(`${apiUrl}/all/send-email`, data), // use in landing page's booking func

  //gallery
  addPhotoToGallery: data => Post(`${apiUrl}/admin/gallery/add-to-gallery`, data),
  deleteBanner: data => Delete(`${apiUrl}/admin/gallery/delete-pic`, data), 
  getAllPhotoInGallery: () =>  Get(`${apiUrl}/all/gallery/get-all-pic`),
  
  //preface
  editPreface: data => Put(`${apiUrl}/all/edit-preface`, data),
  getPreface: () =>  get(`${apiUrl}/all/get-preface`),

  //event
  getAllEvent: () =>  get(`${apiUrl}/all/get-all-event`),
        //add and get one dung của post truyền type "EVENT"
  //ROOM
  createRoom: data => Post(`${apiUrl}/admin/create-room`, data), // EVENT, SERVICE
  deleteService: data => Delete(`${apiUrl}/admin/delete-room`, data),
  updateRoom: data => Put(`${apiUrl}/admin/edit-room`, data),
  getAllMinorService: () => Get(`${apiUrl}/all/get-all-room`),
  getOneRoom: id => Get(`${apiUrl}/all/get-one-post/${id}`),

  //Employee
  createEmployee: data => Post(`${apiUrl}/admin/add-employee`, data), // EVENT, SERVICE
  deleteEmployee: id => Delete(`${apiUrl}/admin/delete-employee`, id),
  updateRoom: data => Put(`${apiUrl}/admin/edit-employee`, data),
  getAllEmployee: () => Get(`${apiUrl}/all/get-all-employee`),
  
}

export default service