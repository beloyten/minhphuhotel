<template>
    <div :class='{loading: loading}'>
        <el-dialog
            title="Warning"
            :visible="openDialogDelete"
            :close-on-click-modal="false"
            width="30%"
            center
            @close="close()"
            >
            <span>Bạn có muốn xóa ảnh này không ?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()" >Trở về</el-button>
                <el-button type="danger" @click="deleteImage()">Xóa</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false
        }
    },
    props: {
        openDialogDelete: false,
        id: null,
        success: false
    },
    methods: {
    async close() {
        this.$emit('update:openDialogDelete', false)
    },
    async deleteImage() {
        this.loading = true
        await this.$store.dispatch('deleteImageGallery', {id: this.id}).then(rs => {
            if(rs.status === 'success') {
                this.$emit('update:success', true)
                this.close()
            }
        })
        setTimeout(() => {
            this.loading = false
        }, 300)
    
    }}
}
</script>