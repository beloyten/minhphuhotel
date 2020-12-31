<template>
    <div class="footer-hotel">
        <div class="footer-animation">
            <div class="footer-logo" @click="toHomepage()">
                <img src="images/logo-white.png" alt="">
            </div>
            <div class="footer-content">
                <h2>Contact Us</h2>
                <div class="line"></div>
                <h3>Tell: {{contact.phone}}</h3>
                <h3>Mail: {{contact.email}}</h3>
                <div class="icon-contact">
                    <div class="icon icon-fb" @click="toFacebook()">
                        <img src="images/icons/fb.png" alt="">
                    </div>
                    <div class="icon icon-instagram" @click="toInstagram()">
                        <img src="images/icons/instagram.png" alt="">
                    </div>
                    <div class="icon icon-youtube" @click="toYoutube()">
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
                <h3>{{contact.address}}</h3>
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
    computed: {
        contact () {
            return this.$store.getters.contact
        }
    },
    methods: {
        toHomepage() {
            if(this.$route.name === 'Trang chủ') {
                this.scrollToTop()
            } else {
                this.$router.push("/")
            }
        },
        scrollToTop() {
            window.scrollTo(0,0)
        },
        toFacebook() {
            if(this.contact.facebook.slice(0,7) !== "https://") {
                window.open("https://"+this.contact.facebook);
            } else {
                window.open(this.contact.facebook);
            }
        },
        toInstagram() {
            if(this.contact.insta.slice(0,7) !== "https://") {
                window.open("https://"+this.contact.insta);
            } else {
                window.open(this.contact.insta);
            }
        },
        toYoutube() {
            if(this.contact.youtube.slice(0,7) !== "https://") {
                window.open("https://"+this.youtube.facebook);
            } else {
                window.open(this.youtube.facebook);
            }
        }
    },
    async created () {
        await this.$store.dispatch('getContact')
    }
}
</script>