import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import DashboardLayout from '@/views/layout/DashboardLayout'
import AuthLayout from '@/views/layout/AuthLayout'

// Pages
import OverviewComponent from '@/views/overview/overview'
import AccountComponent from '@/views/account/Account'
import ContractByUserComponent from '@/views/account/ContractByUser'
import ContractComponent from '@/views/report/Contract'
import ProvisionalCommissionComponent from '@/views/report/ProvisionalCommission'
import AppellationComponent from '@/views/report/Appellation'
import LedgerComponent from '@/views/report/Ledger'
import ReportComponent from '@/views/report/ReportPartner'
import ListCourseComponent from '@/views/course/ListCourse'
import CreateCourseComponent from '@/views/course/CreateCourse'
import ListClassComponent from '@/views/course/ListClass'
import NonLifeContractComponent from '@/views/nonlife/NonLifeContract'
import ReportNonLifeComponent from '@/views/nonlife/ReportNonLife'
import ProductNonLifeComponent from '@/views/nonlife/ProductNonLife'
import ExchangeManageComponent from '@/views/manage/Exchange'
import NewsManageComponent from '@/views/manage/News'
import ContractManageComponent from '@/views/manage/Contract'
import NotfoundComponent from '@/views/404'
import CreateBestHomeComponent from '@/views/besthome/CreateBestHome'
import ContractBestHomeComponent from '@/views/besthome/ContractBestHome'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'Login', requiresAuth: false },
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
    path: '/post-detail',
    component: AuthLayout,
    hidden: true,
    meta: { title: 'PostDetail', requiresAuth: false },
    children: [
      {
        name: 'PostDetail',
        path: '',
        component: () => import("@/views/guest/detailPost/DetailPost.vue")
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
