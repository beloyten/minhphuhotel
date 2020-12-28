import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import DashboardLayout from '@/views/layout/DashboardLayout'
import AuthLayout from '@/views/layout/AuthLayout'

// Pages
import NotfoundComponent from '@/views/404'

Vue.use(Router)

const routes = [
  {
    path: '/admin',
    component: AuthLayout,
    hidden: true,
    redirect: { title: 'Đăng nhập', requiresAuth: false },
    children: [
      {
        name: 'Đăng nhập',
        path: '',
        component: () => import("@/views/admin/auth/Login.vue")
      }
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'Trang chủ', requiresAuth: false },
    children: [
      {
        name: 'Trang chủ',
        path: '',
        component: () => import("@/views/guest/landingPage/LandingPage.vue")
      }
    ]
  },
  {
    path: '/contact',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'Liên hệ', requiresAuth: false },
    children: [
      {
        name: 'Liên hệ',
        path: '',
        component: () => import("@/views/guest/contact/Contact.vue")
      }
    ]
  },
  {
    path: '/list-room',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'Danh sách phòng', requiresAuth: false },
    children: [
      {
        name: 'Danh sách phòng',
        path: '',
        component: () => import("@/views/guest/room/ListRoom.vue")
      }
    ]
  },
  {
    path: '/post-detail',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'Dịch vụ', requiresAuth: false },
    children: [
      {
        name: 'Dịch vụ',
        path: '',
        component: () => import("@/views/guest/detailPost/DetailPost.vue")
      }
    ]
  },
  {
    path: '/service',
    component: DashboardLayout,
    meta: { title: 'Dịch vụ', requiresAuth: true },
    children: [
      {
        name: 'Dịch vụ',
        path: '',
        component: () => import("@/views/admin/service/Service.vue")
      }
    ]
  },
  {
    path: '/event',
    component: DashboardLayout,
    meta: { title: 'Sự kiện', requiresAuth: true },
    children: [
      {
        name: 'Sự kiện',
        path: '',
        component: () => import("@/views/admin/event/Event.vue")
      }
    ]
  },
  {
    path: '/room',
    component: DashboardLayout,
    meta: { title: 'Quản lý phòng', requiresAuth: true },
    children: [
      {
        name: 'Quản lý phòng',
        path: '',
        component: () => import("@/views/admin/room/Room.vue")
      }
    ]
  },
  {
    path: '/gallery',
    component: DashboardLayout,
    meta: { title: 'Thư viện ảnh', requiresAuth: true },
    children: [
      {
        name: 'Thư viện ảnh',
        path: '',
        component: () => import("@/views/admin/gallery/Gallery.vue")
      }
    ]
  },
  {
    path: '/setting',
    component: DashboardLayout,
    meta: { title: 'Setting', requiresAuth: true },
    children: [
      {
        name: 'Setting',
        path: '',
        component: () => import("@/views/admin/setting/Setting.vue")
      }
    ]
  },
  {
    path: '/404',
    // component: NotfoundComponent,
    component: DashboardLayout,
    hidden: true,
    name: 'PageNotFound',
    redirect: { name: '404' },
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: '404',
        component: NotfoundComponent,
        meta: { title: '404 Page'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true, meta: { requiresAuth: false } }
]

// Router catch exception
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location)
    .catch(() => console.log('Routing is not changed'))
}
export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  linkActiveClass: "active",
  routes: routes
})
