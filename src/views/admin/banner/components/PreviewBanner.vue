<template>
    <el-dialog title="Xem trước phòng" :visible="openDialogPreview" @close="close()" :fullscreen="true">
        <div class="detail-post">
            <div class="detail-post-content">
            <el-carousel :autoplay="false" height="60em" indicator-position="none" :loop="false" :interval='0'>
                <el-carousel-item v-for="(item, index) in post.list" :key="index">
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
                    <span>{{post && post.post && post.post.title ? post.post.title : ''}}</span>
                </div>
                <div class="post-bread">
                    <span>{{post && post.post && post.post.brief ? post.post.brief : ''}}</span>
                </div>
                <div class="post-content-text">
                    <textarea v-model="post.post.description" disabled> 
                    </textarea>
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
                post: {
                    title: '',
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
            await this.$store.dispatch('getOnePost', this.id).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data
                }
            })
        }
        console.log(this.post)
    }
}
</script>