<template>
    <el-dialog
        title="Warning"
        :visible.sync="openDialog"
        width="30%"
        center>
        <span>It should be noted that the content will not be aligned in center by default</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click=" close()" >Cancel</el-button>
            <el-button type="danger" @click="deleteService()">Delete</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
     props: {
        openDialog: false,
        service: 0
    },
      methods: {
        close() {
            console.log("on close: "+ this.openDialog)
            this.openDialog = false
            this.$emit('update:openDialog', false)
        },
       deleteService() {
           const id = this.service
            this.$store.dispatch('deleteService', id).then(rs => {
                if(rs.status === 'success') {
                    this.close();
                }
            })
            setTimeout(() => {
                this.loading = false
            }, 300)
        
    }}
}
</script>