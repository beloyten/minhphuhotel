<template>
    <el-dialog title="Xem trước phòng" :visible="openDialogPreview" @close="close()" :fullscreen="true">
        <div class="detail-post">
            <div class="detail-post-content">
            <el-carousel :autoplay="false" height="60em" indicator-position="none" :loop="false" :interval='0'>
                <el-carousel-item v-for="(item, index) in post.list" :key="index">
                    <div class="item">
                        <img
                            :src="item"
                            alt=""
                        />
                    </div>
                </el-carousel-item>
            </el-carousel> 
            <div class="content">
                <div class="post-content">
                    <div class="post-title" data-aos="post-title-animation">
                        <span>{{post && post.room && post.room.name ? post.room.name : ''}}</span>
                    </div>
                    <div class="post-bread" data-aos="post-content-animation">
                        <span>{{post && post.room && post.room.brief ? post.room.brief : ''}}</span>
                    </div>
                    <div class="post-content-text" data-aos="post-content-animation">
                        <textarea v-model="post.room.description" disabled> 
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </el-dialog>
</template>
<script>
export default {
    data () {
        return {
            post: {
                list: [],
                room: {
                    name: '',
                    brief: '',
                    shortDescription: '', 
                    description: ''
                }
            }
        }
    },
    props: {
        id: null,
        openDialogPreview: false
    }, 
    methods: {
        close() {
            this.$emit('update:openDialogPreview', false)
        },
    },
    async created() {
        if(this.id) {
            await this.$store.dispatch('getOneRoom', this.id).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data
                }
            })
        }
        console.log(this.post)
    }
}
</script>