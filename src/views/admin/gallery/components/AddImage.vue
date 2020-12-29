<template>
    <div class="add-image" :class='{loading: loading}'>
        <el-dialog title="Thêm mới kho ảnh" class="dialog-upload-img" :visible="openDialogCreate" @close="close()" :close-on-click-modal="false">
            <div class="form-upload-img">
                <div class="left">
                    <div class="upload-img-button">
                        <p>Upload ảnh</p>
                    </div>
                    <p class="notice">*Hãy upload ảnh có kích cỡ 4:9 để có chất lượng đẹp nhất.</p>
                </div>
                <input id="uploadImg" type="file" accept="image/*" @change="uploadImage($event)">
                <div class="img-loaded">
                    <img id="imgLoaded" alt="">
                    <p id="textWaiting">Image here</p>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Trở về</el-button>
                <el-button type="primary" @click="addNewImage()">Thêm mới</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            loading: false,
            imgUrl: null
        }
    },
    props: {
        openDialogCreate: false,
        success: false
    },
    computed: {
        showImage() {
            return this.imgUrl === null
        }
    },
    methods: {
        async close() {
            this.$emit('update:openDialogCreate', false)
        },
        uploadImage(e) {
            let vm = this
            var preview = document.getElementById('imgLoaded')
            var file = document.getElementById('uploadImg').files[0]
            var textWaiting = document.getElementById('textWaiting')
            var reader = new FileReader()
            reader.onloadend = function () {
                preview.src = reader.result
                vm.imgUrl = reader.result
                preview.style.display = 'block'
                textWaiting.style.display = 'none'
            }
            if(file) {
                reader.readAsDataURL(file)
            }
        },
        async addNewImage() {
            this.loading = true
            await this.$store.dispatch('addPhotoToGallery', {img: this.imgUrl}).then(rs => {
                if(rs.status === 'success') {
                    this.$emit('update:success', true)
                    setTimeout(() => {
                        this.loading = false
                    }, 300)
                    this.close()
                } else {
                    this.loading = false
                }
            })
        }
    }
}
</script>