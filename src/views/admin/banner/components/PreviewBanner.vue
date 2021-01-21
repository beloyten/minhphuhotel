<template>
    <el-dialog title="Xem trước Banner" :visible="openDialogPreview" @close="close()" :fullscreen="true">
        <div class="banner-preview" :class='{loading: loading}'>
            <el-carousel indicator-position="outside" height="800px" class="banner">
                <el-carousel-item>
                    <div class="item">
                        <img
                            :src="post.image"
                            alt=""
                        />
                        <div class="item__content">{{post.title}}</div>
                    </div>
                </el-carousel-item>
            </el-carousel> 
        </div>
    </el-dialog>
</template>
<script>
export default {
    data () {
        return {
            post: {
                title: '',
                brief: '',
                image: ''
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
        },
    },
    async created() {
        if(this.id) {
            this.loading = true
            await this.$store.dispatch('getOneBanner', this.id).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data
                }
            })
            await setTimeout(() => {
                this.loading = false
            }, 50)
        }
        console.log(this.post)
    }
}
</script>