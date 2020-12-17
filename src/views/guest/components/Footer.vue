<template>
    <div class="footer-hotel">
        <div class="footer-animation">
            <div class="footer-logo" @click="toHomepage()">
                <img src="images/logo-white.png" alt="">
            </div>
            <div class="footer-content">
                <h2>Contact Us</h2>
                <div class="line"></div>
                <h3>Tell: (84-24) 3823 8115</h3>
                <h3>Mail: Minhphu@gmail.com</h3>
                <div class="icon-contact">
                    <div class="icon icon-fb">
                        <img src="images/icons/fb.png" alt="">
                    </div>
                    <div class="icon icon-instagram">
                        <img src="images/icons/instagram.png" alt="">
                    </div>
                    <div class="icon icon-youtube">
                        <img src="images/icons/youtube.png" alt="">
                    </div>
                </div>
            </div>
            <div class="footer-content">
                <h2>Service</h2>
                <div class="line line-small"></div>
                <h3>Sport Center</h3>
                <h3>Tennist & Squash</h3>
                <h3>Tennist & Squash</h3>
            </div>
            <div class="footer-content">
                <h2>Address</h2>
                <div class="line line-small"></div>
                <h3>76 Yen Phu (small road)</h3>
                <h3>Tay Ho - Ha Noi</h3>
                <div class="back-to-top" @click="scrollToTop()">
                    <img src="images/icons/back-to-top.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    computed: {},
    methods: {
        toHomepage() {
            this.$router.push("/")
        },
        scrollToTop() {
            window.scrollTo(0,0)
        }
    }
}
</script>