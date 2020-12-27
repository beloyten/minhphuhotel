<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Update Service': 'Create Service'" :visible="openDialog" @close="close()">
            <el-form>
                <el-form-item label="Upload ảnh" :label-width="formLabelWidth">
                    <vue-upload-multiple-image
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        @edit-image="editImage"
                        :data-images="imgList"
                    ></vue-upload-multiple-image>
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
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    components: {
        VueUploadMultipleImage
    },
    data () {
        return { 
            formLabelWidth: '170px',
            serviceDetail: {
                coverImg: "",
                title: "",
                brief: "",
                shortDescription: ""
            },
            loading: false,
            imgList: [],
            dialogImageUrl: '',
            dialogVisible: false
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
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        uploadImageSuccess(formData, index, fileList) {
            this.imgList = fileList;
        },
        editImage (formData, index, fileList) {
            this.imgList = fileList;
        },
        beforeRemove (index, done, fileList) {
            this.$confirm("Bạn muốn xóa ảnh này khỏi danh sách?").then(()=>{
                done()
            }).catch(() => {

            })
        },
        updateService() {
            this.loading = true
            let listImage = this.imgList.map(item => {
                let obj = []
                obj.push(item.path)
                return obj
            })
            this.$store.dispatch('updateService', {
                list: listImage,
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
        },
        getFile(file, fileList) {
            let vm = this
            this.getBase64(file.raw).then(res => {
                vm.imgList.push(res)
            });
        },
        getBase64(file) {
            return new Promise(function(resolve, reject) {
            let reader = new FileReader();
            let imgResult = "";
            reader.readAsDataURL(file);
            reader.onload = function() {
                imgResult = reader.result;
            };
            reader.onerror = function(error) {
                reject(error);
            };
            reader.onloadend = function() {
                resolve(imgResult);
            };
            });
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