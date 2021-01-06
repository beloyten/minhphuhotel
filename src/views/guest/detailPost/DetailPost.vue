<template>
    <div class="detail-post">
        <Header/>
        <HeaderMobile/>
        <div class="detail-post-content">
            <el-carousel :autoplay="false" height="60em" indicator-position="none" :loop="false" :interval='0'>
                <el-carousel-item v-for="(item, index) in listImage" :key="index">
                    <div class="item">
                        <img
                            :src="item.img"
                            alt=""
                        />
                    </div>
                </el-carousel-item>
            </el-carousel> 
            <div class="content">
                <div class="post-content">
                    <div class="post-title">
                        <span>{{post.title}}</span>
                    </div>
                    <div class="post-bread">
                        <span>{{post.brief}}</span>
                    </div>
                    <div class="post-content-text">
                        <textarea v-model="post.description" disabled> 
                        </textarea>
                    </div>
                </div>
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
        HeaderMobile
    },
    data() {
        return {
            listImage: [],
            post: {}
        }
    },
    mounted() {
        
    },
    async created() {
        console.log(this.$route)
        if(this.$route.query.id) {
            await this.$store.dispatch('getOnePost', this.$route.query.id).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data.post
                    this.listImage = rs.data.list
                }
            })
        } else {
            this.$router.push("/")
        }
    }
}
</script>