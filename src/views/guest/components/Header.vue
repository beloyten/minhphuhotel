<template>
    <div class="heading-landing-page" id="header">
        <div class="logo" id="logo" @click="toHomepage()">
            <img src="images/logo.jpg" alt="">
        </div>
        <div class="heading-item" id="headingItem">
            <router-link to="/">Trang chủ</router-link>
            <router-link to="/post-detail">Dịch vụ</router-link>
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
        window.onscroll = function (e) {
            var header = document.getElementById("header");
            var logo = document.getElementById("logo");
            var headingItem = document.getElementById("headingItem");
            var booking = document.getElementById("bookingHeader");
            var textBooking = document.getElementById("textBooking");
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
                header.style.justifyContent="flex-end";
                logo.style.width = "45%"
                logo.style.justifyContent="flex-start";
                headingItem.style.width = "40%"
                booking.style.width = "5%"
                textBooking.style.display = "none"
            } else {
                header.style.justifyContent="center";
                logo.style.width = "20%"
                logo.style.justifyContent="center";
                headingItem.style.width = "60%"
                booking.style.width = "20%"
                textBooking.style.display = "inline"
            }
        }

    }
}
</script>