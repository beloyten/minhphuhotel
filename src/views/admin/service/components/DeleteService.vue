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
            this.$emit('update:openDialogDelete', false)
        },
        async deleteService() {
            this.loading = true
            await this.$store.dispatch('deleteService', {id: this.service.id}).then(rs => {
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