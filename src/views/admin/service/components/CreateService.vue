<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Update Service': 'Create Service'" :visible="openDialog" @close="close()">
            <el-form>
                <el-form-item label="Upload ảnh" :label-width="formLabelWidth">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="serviceDetail.coverImg" :src="serviceDetail.coverImg" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="Title" :label-width="formLabelWidth">
                    <el-input v-model="serviceDetail.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Brief" :label-width="formLabelWidth">
                    <el-input v-model="serviceDetail.brief" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Description" :label-width="formLabelWidth">
                    <textarea id="message" v-model="serviceDetail.shortDescription"></textarea>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Cancel</el-button>
                <el-button type="primary" @click="createService()" v-if="!edit">Create</el-button>
                <el-button type="primary" @click="updateService()" v-else>Update</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            formLabelWidth: '170px',
            serviceDetail: {
                coverImg: "",
                title: "",
                brief: "",
                shortDescription: ""
            },
            loading: false
        }
    },
    props: {
        openDialog: false,
        edit: false,
        service: {}
    },
    methods: {
        close() {
            this.openDialog = false
            this.$emit('update:openDialog', false)
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('Avatar picture must be JPG format!');
            }
            if (!isLt2M) {
            this.$message.error('Avatar picture size can not exceed 2MB!');
            }
            return isJPG && isLt2M;
        },
        uploadImage() {
        },
        updateService() {
            this.loading = true
            this.$store.dispatch('updateService', {
                list: [],
                post: this.serviceDetail
            }).then(rs => {
                if(rs.status === 'success') {
                    this.serviceDetail= {
                        coverImg: "",
                        title: "",
                        brief: "",
                        shortDescription: ""
                    }
                    this.close();
                }
            })
            setTimeout(() => {
                this.loading = false
            }, 300)
        }
    },
    created() {
        console.log(this.edit)
        if(this.edit) {
            this.serviceDetail = this.service
        }
    }
}
</script>