<template>
    <el-dialog title="Xem trước thư viện ảnh" :visible="openDialogView" @close="close()" :fullscreen="true">
        <div class="gallery-preview">
            <el-carousel :initial-index="index" :autoplay="false" height="800px" indicator-position="outside" trigger="click" :loop="false" :interval='0'>
                <el-carousel-item v-for="(item, index) in listAllPhotoGallery" :key="index">
                    <div class="item">
                        <img
                            :src="item.img"
                            alt=""
                        />
                    </div>
                </el-carousel-item>
            </el-carousel> 
        </div>
    </el-dialog>
</template>
<script>
export default {
    data () {
        return {}
    },
    computed: {
        listAllPhotoGallery() {
            return this.$store.getters.listAllPhotoGallery
        },
    },
    props: {
        openDialogView: false,
        index: 0
    }, 
    methods: {
        close() {
            this.$emit('update:openDialogView', false)
        },
    },
    async created() {
        if(this.id) {
            await this.$store.dispatch('getAllPhotoInGallery', {is_limit: false}).then(rs => {
                if(rs.status === 'success') {
                    this.post = rs.data
                }
            })
        }
    }
}
</script>