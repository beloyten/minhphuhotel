<template>
    <div class="contact-page">
        <Header/>
        <div class="contact-detail">
            <div class="contact-content">
                <div class="contact-text">
                    <h2>Contact Us</h2>
                    <div class="line line-contact"></div>
                    <h3>Tell: (84-24) 3823 8115</h3>
                    <h3>Mail: Minhphu@gmail.com</h3>
                </div>
                <div class="contact-text">
                    <h2>Address</h2>
                    <div class="line line-contact"></div>
                    <h3>76 Yen Phu (small road)</h3>
                    <h3>Tay Ho - Hanoi</h3>
                </div>
            </div>
            <div class="contact-map">
                <img src="images/map.png" alt=""/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
    components: {
        Header,
        Footer
    }
}
</script>