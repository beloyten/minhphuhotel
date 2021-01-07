import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import '@/assets/styles.less'

import App from './App'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import VueQr from 'vue-qr'
import CKEditor from '@ckeditor/ckeditor5-vue'
import VueLazyload from 'vue-lazyload'
import AOS from 'aos'
import 'aos/dist/aos.css'


// language
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// Internationalization
import google from '@/plugin/google'
// Plugin
import RouterInterceptor from '@/plugin/router-interceptor'

import * as VeeValidate  from 'vee-validate';

// configure language
locale.use(lang)
Vue.prototype.$google = google

import {
  Dialog,
  Icon,
  Pagination,
  Notification,
  MessageBox,
  Button,
  Tag,
  Switch,
  Image,
  DatePicker,
  Select,
  Option,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Upload
} from 'element-ui'

Vue.use(VueQr)
Vue.use(VueClipboard)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Pagination)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Switch)
Vue.use(Image)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Upload)
Vue.use(VueLazyload)
Vue.use(VeeValidate)
Vue.use( CKEditor )
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification

Vue.use(require('vue-moment'))
Vue.use(RouterInterceptor)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      offset: 150,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
