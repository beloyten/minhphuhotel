<template>
    <div :class='{loading: loading}'>>
        <el-dialog
            title="Warning"
            :visible.sync="openDialogDelete"
            width="30%"
            center
            @close="close()"
            >
            <span>Bạn có muốn xóa dịch vụ {{this.service.title}} ?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click=" close()" >Cancel</el-button>
                <el-button type="danger" @click="deleteService()">Delete</el-button>
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
        service: {},
        success: false
    },
    methods: {
    async close() {
        console.log("on close: "+ this.openDialogDelete)
        this.openDialog = false
        await this.$store.dispatch('getAllHomepageService')
        await this.$store.dispatch('getAllMinorService')
        this.$emit('update:openDialogDelete', false)
    },
    deleteService() {
        this.loading = true
        this.$store.dispatch('deleteService', {id: this.service.id}).then(rs => {
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