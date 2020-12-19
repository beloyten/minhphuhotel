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
            <div class="post-img">
                <el-carousel :interval="4000" type="card" height="40em">
                    <el-carousel-item v-for="item in listRoom" :key="item">
                        <div class="item">
                            <div class="item__content"><router-link to="/post-detail">{{item.text}}</router-link></div>
                            <img
                                class="item__image"
                                :src="item.imgUrl"
                                alt=""
                            />
                        </div>
                    </el-carousel-item>
                </el-carousel>
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
            image: "../images/background-homepage1.jpg",
            listRoom: [
                {
                    text: "Phòng VIP",
                    imgUrl: "images/background-login.jpg"
                },
                {
                    text: "Phòng siêu VIP",
                    imgUrl: "images/background-homepage1.jpg"
                },
                {
                    text: "Phòng oke",
                    imgUrl: "images/background-homepage2.jpg"
                },
                {
                    text: "Phòng khá oke",
                    imgUrl: "images/background-homepage3.jpg"
                }
            ]
        }
    },
    mounted() {
        
    }
}
</script>