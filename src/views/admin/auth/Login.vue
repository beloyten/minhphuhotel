<template>
  <form class="login-form" @submit.prevent="submit()" :class="{'loading' : loading}">
    <div class="box-form-login">
      <div class="inner-form-login">
        <a href="#" class="logo text-center">
          <img src="/images/logo.jpg" alt="Best Life">
        </a>
        <div class="login-form-inner">
          <h2>Xin chào!</h2>
          <h6>Chào mừng bạn đến với <span>Minh Phú Diamond Place</span></h6>
          <div class="field">
            <input
              id="username"
              name="username"
              v-model="loginForm.username"
              type="text"
              maxlength="50"
              placeholder="Username"
              required
            >
          </div>
          <div class="field">
            <input
              id="password"
              name="password"
              v-model="loginForm.password"
              placeholder="Password"
              maxlength="40"
              type="password"
              required
            >
          </div>
          <div class="field">
            <button class="btn btn-submit">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loading: false,
      pwdType: 'password',
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    routes () {
      return this.$store.getters.routes
    },
    filterredRoutes () {
      return this.routes.filter(temp => {
        return !temp.hidden && temp.children
      })
    }
  },
  mounted() {
    this.isLoggedIn && this.$router.push({ name: 'Trang chủ' })
  },
  methods: {
    async handleAfterLogin (result) {
      this.$router.push('/service')
    },
    async submit () {
      this.loading = true
      await this.$store.dispatch('login', this.loginForm).then(rs => {
        if (rs.status === 'success') {
          this.handleAfterLogin(rs)
        }
      })
      this.loading = false
    },
  }
}
</script>
