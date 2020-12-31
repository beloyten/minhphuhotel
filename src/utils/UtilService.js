import Vue from 'vue'
export default new Vue({
  methods: {
    checkRole (user, route) {
      if (!route.meta || !route.meta.requiresAuth || !route.meta.roles || !route.meta.roles.length){
        return true
      } else {
        return this.isUserHasRole(user, route.meta.roles)
      }
    },
    isUserHasRole (user, roles) {
      if (!user || !user.role) return true
      const isRoleInRoute = (roles.indexOf(user.role.name) >=0)
      return isRoleInRoute
    },
    checkValidateEmail (email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
    checkValidatePhone (phone) {
      var re = /^[0][1,3,7,8,9]\(?\d{2}\)?\d{3}?\d{3}$/
      return re.test(phone)
    },
    formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      })
    },
    convertTime(time) {
      console.log(this.$moment(Date.parse(time)).utc().local())
      return time ? this.$moment(Date.parse(time)).utc().local().format('DD-MM-YYYY hh:mm:ss a') : ''
    },
    convertFromTime(string) {
      const datearray = string.split("-")
      return new Date(datearray[1] + '-' + datearray[0] + '-' + datearray[2])
    }
  }
})