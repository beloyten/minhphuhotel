<template>
    <div :class='{loading: loading}'>
        <el-dialog
            title="Warning"
            :visible="openDialogDeleteEmail"
            :close-on-click-modal="false"
            width="30%"
            center
            @close="close()"
            >
            <span>Bạn có muốn xóa email {{this.employee.email}} ?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click=" close()" >Trở về</el-button>
                <el-button type="danger" @click="deleteEmail()">Xóa</el-button>
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
        openDialogDeleteEmail: false,
        employee: {},
        success: false
    },
    methods: {
    async close() {
        this.$emit('update:openDialogDeleteEmail', false)
    },
    async deleteEmail() {
        this.loading = true
        await this.$store.dispatch('deleteEmployee', {id: this.employee.id}).then(rs => {
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