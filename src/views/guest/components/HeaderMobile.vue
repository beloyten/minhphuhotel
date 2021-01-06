<template>
    <div class="heading-mobile">
        <div class="booking-mobile" id="booking" @click="toBooking()">
            <img src="images/icons/calender-white.png" alt="">
            <a>Đặt lịch</a>
        </div>
        <div class="logo-mobile" id="logo">
            <div class="logo-img" @click="toHomepage()">
                <img src="images/logo.jpg" alt="">
            </div>
            <div class="three-dot" @click="viewMenu()">
                <img src="images/icons/three-dot.png" alt="">
            </div>
        </div>
        <el-dialog :visible.sync="openDialogMenu" :fullscreen="true" class="menu">
            <div class="menu-mobile">
                <router-link to="/">Trang chủ</router-link>
                <router-link to="/list-room">Danh sách phòng</router-link>
                <router-link to="/contact">Liên hệ</router-link>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            openDialogMenu: false
        }
    },
    methods: {
        viewMenu() {
            this.openDialogMenu = true
        },
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