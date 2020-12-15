<template>
    <div class="detail-post">
        <Header/>
        <div class="detail-post-content">
            <div class="post-img" :style="{ backgroundImage: 'url(' + image + ')' }">  
            </div>
            <div class="post-content">
                <div class="post-title">
                    <span>Khách sạn chuẩn 4 sao</span>
                </div>
                <div class="post-bread">
                    <span>Cảm hứng từ thiết kế Italy</span>
                </div>
                <div class="post-content-text">
                    <span>Set in Hong Kong, less than 1 km from Hong Kong Convention and 
                        set in Hong Kong, less than 1 km from Hong Kong Convention and 
                        set in Hong Kong, less than 1 km from Hong Kong Convention and 
                        set in Hong Kong, less than 1 km from Hong Kong Convention and 
                        set in Hong Kong, less than 1 km from Hong Kong Convention and
                        set in Hong Kong, less than 1 km from Hong Kong Convention and
                        set in Hong Kong, less than 1 km from Hong Kong Convention and
                        set in Hong Kong, less than 1 km from Hong Kong Convention and
                        set in Hong Kong, less than 1 km from Hong Kong Convention and  
                        set in Hong Kong, less than 1 km from Hong Kong Convention and  
                        set in Hong Kong, less than 1 km from Hong Kong Convention and  
                        set in Hong Kong, less than 1 km from Hong Kong Convention and . 
                    </span>
                </div>
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
    },
    data() {
        return {
            image: "../images/background-homepage1.jpg"
        }
    }
}
</script>