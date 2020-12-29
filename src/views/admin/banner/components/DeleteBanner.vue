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
            <span>Bạn có muốn xóa Banner {{this.banner.title}} ?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click=" close()" >Trở về</el-button>
                <el-button type="danger" @click="deleteBanner()">Xóa</el-button>
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
        banner: {},
        success: false
    },
    methods: {
        async close() {
            this.$emit('update:openDialogDelete', false)
        },
        async deleteBanner() {
            this.loading = true
            await this.$store.dispatch('deleteBanner', {id: this.banner.id}).then(rs => {
                if(rs.status === 'success') {
                    this.$emit('update:success', true)
                    this.close()
                }
            })
            setTimeout(() => {
                this.loading = false
            }, 300)
        
        }
    }
}
</script>