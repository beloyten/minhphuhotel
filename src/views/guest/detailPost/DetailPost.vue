<template>
    <div class="detail-post">
        <Header/>
        <div class="detail-post-content">
            <el-carousel :autoplay="false" height="60em" indicator-position="none" :loop="false" :interval='0'>
                <el-carousel-item v-for="(item, index) in post.list" :key="index">
                    <div class="item">
                        <img
                            :src="item.imgUrl"
                            alt=""
                        />
                    </div>
                </el-carousel-item>
            </el-carousel> 
            <div class="post-content">
                <div class="post-title">
                    <span>{{post.post.title}}</span>
                </div>
                <div class="post-bread">
                    <span>{{post.post.brief}}</span>
                </div>
                <div class="post-content-text">
                    <textarea v-model="post.post.shortDescription" disabled> 
                    </textarea>
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
            listImage: [
                {
                    imgUrl: "images/background-homepage1.jpg"
                },
                {
                    imgUrl: "images/background-homepage2.jpg"
                },
                {
                    imgUrl: "images/background-homepage3.jpg"
                }
            ],
            post: {}
        }
    },
    mounted() {
        
    },
    async created() {
        if(this.$route.params.id) {
            await this.$store.dispatch('getOnePost', this.$route.params.id).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data
                }
            })
        } else {
            this.$router.push("/")
        }
        console.log(this.post)
    }
}
</script>