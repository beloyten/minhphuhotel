<template>
    <el-dialog title="Xem trước Sự kiện" :visible="openDialogPreview" @close="close()" :fullscreen="true">
        <div class="detail-post" :class='{loading: loading}'>
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
            <div class="content">
                <div class="post-content">
                    <div class="post-title" data-aos="post-title-animation">
                        <span>{{post && post.post && post.post.title ? post.post.title : ''}}</span>
                    </div>
                    <div class="post-bread" data-aos="post-content-animation">
                        <span>{{post && post.post && post.post.brief ? post.post.brief : ''}}</span>
                    </div>
                    <div class="post-content-text" data-aos="post-content-animation">
                        <pre> {{post.post.description}} </pre>
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
                post: {
                    title: '',
                    brief: '',
                    shortDescription: '', 
                    description: ''
                }
            },
            loading: false
        }
    },
    props: {
        id: null,
        openDialogPreview: false
    }, 
    methods: {
        close() {
            this.$emit('update:openDialogPreview', false)
        }
    },
    async created() {
        if(this.id) {
            this.loading = true
            await this.$store.dispatch('getOnePost', this.id).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data
                }
            })
            await setTimeout(() => {
                this.loading = false
            }, 50)
        }
    }
}
</script>