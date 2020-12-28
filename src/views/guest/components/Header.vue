<template>
    <div class="heading-landing-page" id="header">
        <div class="logo" id="logo" @click="toHomepage()">
            <img src="images/logo.jpg" alt="">
        </div>
        <div class="heading-item" id="headingItem">
            <router-link to="/">Trang chủ</router-link>
            <router-link to="/post-detail">Danh sách phòng</router-link>
            <router-link to="/contact">Liên hệ</router-link>
        </div>
        <div class="booking" id="bookingHeader" @click="toBooking()">
            <img src="images/icons/booking.svg" alt="">
            <a href="#" id="textBooking">Đặt lịch</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    computed: {},
    methods: {
        toHomepage() {
            this.$router.push("/")
        },
        toBooking() {
            this.$router.push("/")
            this.$store.dispatch('setBooking', true)
        }
    },
    created () {
        document.documentElement.scrollTop = 0
    }
}
</script>