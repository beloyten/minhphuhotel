<template>
    <div class="contact-page" :class='{loading: loading}'>
        <Header/>
        <HeaderMobile/>
        <div class="contact-detail">
            <div class="contact-content" data-aos="contact-content-animation">
                <div class="contact-title">
                    <p>Minh Phú Diamond Palace</p>
                </div>
                <div class="contact-text">
                    <h2>Contact Us</h2>
                    <div class="line line-contact"></div>
                    <h3>Tell: {{contact.phone}}</h3>
                    <h3>Mail: {{contact.email}}</h3>
                </div>
                <div class="contact-text">
                    <h2>Address</h2>
                    <div class="line line-contact"></div>
                    <h3>{{contact.address}}</h3>
                </div>
            </div>
            <div class="contact-map" :class="{display_none: !contact.addressImg}">
                <img :src="contact.addressImg" alt=""/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "../components/Header"
import HeaderMobile from "../components/HeaderMobile"
import Footer from "../components/Footer"

export default {
    components: {
        Header,
        Footer,
        HeaderMobile,
        loading: false
    },
    data() {
        return {}
    },
    computed: {
        contact() {
            return this.$store.getters.contact
        }
    },
    async created() {
        await this.$store.dispatch('getContact')
    }
}
</script>