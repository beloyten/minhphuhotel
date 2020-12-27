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
    redirect: { title: 'Login', requiresAuth: false },
    children: [
      {
        name: 'Login',
        path: '',
        component: () => import("@/views/admin/auth/Login.vue")
      }
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'LandingPage', requiresAuth: false },
    children: [
      {
        name: 'LandingPage',
        path: '',
        component: () => import("@/views/guest/landingPage/LandingPage.vue")
      }
    ]
  },
  {
    path: '/contact',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'Contact', requiresAuth: false },
    children: [
      {
        name: 'Contact',
        path: '',
        component: () => import("@/views/guest/contact/Contact.vue")
      }
    ]
  },
  {
    path: '/list-room',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'ListRoom', requiresAuth: false },
    children: [
      {
        name: 'ListRoom',
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
    meta: { title: 'Service', requiresAuth: true },
    children: [
      {
        name: 'Service',
        path: '',
        component: () => import("@/views/admin/service/Service.vue")
      }
    ]
  },
  {
    path: '/event',
    component: DashboardLayout,
    meta: { title: 'Event', requiresAuth: true },
    children: [
      {
        name: 'Event',
        path: '',
        component: () => import("@/views/admin/event/Event.vue")
      }
    ]
  },
  {
    path: '/room',
    component: DashboardLayout,
    meta: { title: 'Room', requiresAuth: true },
    children: [
      {
        name: 'Room',
        path: '',
        component: () => import("@/views/admin/room/Room.vue")
      }
    ]
  },
  {
    path: '/banner',
    component: DashboardLayout,
    meta: { title: 'Banner', requiresAuth: true },
    children: [
      {
        name: 'Banner',
        path: '',
        component: () => import("@/views/admin/banner/Banner.vue")
      }
    ]
  },
  {
    path: '/email-config',
    component: DashboardLayout,
    meta: { title: 'Email', requiresAuth: true },
    children: [
      {
        name: 'Email',
        path: '',
        component: () => import("@/views/admin/email/Email.vue")
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
