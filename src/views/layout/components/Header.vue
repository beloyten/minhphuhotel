<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link :to="{ name: 'Overview' }">
          <img src="/images/logo.svg" alt="Best Life">
        </router-link>
      </div>
      <div class="main-menu">
        <div class="item">
          <div class="sub-menu" v-if="user">
            <div class="item"><a href="#" @click.prevent="doLogout">Logout</a></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import router from '@/router'
export default {
  data () {
    return {
      isOpenSearch: false
    }
  },
  components: {
  },
  computed: {
    user() {
      return this.$store.getters.user.user
    },
    // isOpenedSidebar () {
    //   return this.$store.getters.isOpenedSidebar
    // },
    isOpenedMBSidebar () {
      return this.$store.getters.isOpenedMBSidebar
    },
    isOpenMBHeader () {
      return this.$store.getters.isOpenMBHeader
    }
  },
  created () {
    this.$store.dispatch('getUserInfo')
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('toggleSideBar')
    },
    openSearch (open) {
      this.isOpenSearch = open
    },
    toggleHeader () {
      this.$store.dispatch('toggleMBHeader')
    },
    doLogout() {
      this.$store.dispatch('logOut')
    }
  }
}
</script>
