<template>
    <div class="detail-post">
        <Header/>
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
            <div class="post-img">
                <el-carousel :interval="4000" type="card" height="40em">
                    <el-carousel-item v-for="(item,index) in listAllRoom" :key="index">
                        <div class="item">
                            <div class="item__content">
                                <div class="room-title">{{item.room.name}}</div>
                                <div class="room-status">{{item.room.status}}</div>
                                <div class="room-price">{{formatCash(item.room.price+"")+' VNĐ'}}</div>
                                <router-link :to="'/room-detail?id='+item.room.id">Xem thêm</router-link>
                            </div>
                            <img
                                class="item__image"
                                :src="item.image"
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
import FilterData from "@/mixin/FilterData"

export default {
    mixins: [FilterData],
    components: {
        Header,
        Footer
    },
    data() {
        return {
            listImage: [],
            post: {
                brief: '', 
                title: '', 
                shortDescription: '', 
                description: '', 
                name: '',
                type: ''
            }
        }
    },
    computed: {
        listAllRoom() {
            return this.$store.getters.listAllRoom
        }
    },
    async created() {
        await this.$store.dispatch('getOnePost', 1).then(rs => {
            if(rs.status === 'success') {
                this.post = rs.data.post
                if(rs.data.list.length > 0) {
                    this.listImage = rs.data.list
                    this.post = rs.data.post
                }
            }
        })
        await this.$store.dispatch('getAllRoom')
    },
    mounted() {
        
    }
}
</script>