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
                shortDescription: "",
                description:"",
                type:"",
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
<<<<<<< Updated upstream
            console.log(this.imgList)
            let listImage = this.imgList.map(item => {
                let obj = {}
                obj.img = item.path
                return obj
            })
            this.$store.dispatch('updateService', {
                list: listImage,
                post: this.serviceDetail
=======
            var details = this.serviceDetail
            this.$store.dispatch('updateService', {
                list: [],
                post: details
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
        createService() {
            this.loading = true
            var details = this.serviceDetail
            details.type = "SERVICE"
            this.$store.dispatch('createService', {
                list: [],
                post: details
>>>>>>> Stashed changes
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
    async created() {
        if(this.edit) {
            let imgResponse = []
            await this.$store.dispatch('getOnePost', this.service.id).then(rs => {
                if(rs.status === 'success') {
                    this.serviceDetail = rs.data.post
                    imgResponse = rs.data.list
                }
            })
            console.log(imgResponse)
            let listImage = imgResponse.map((item,index) => {
                let obj = {}
                if(index === 1) {
                    obj.default = 1
                    obj.hightlight = 1
                    obj.name = ''
                    obj.path = item.img
                } else {
                    obj.default = 0
                    obj.hightlight = 0
                    obj.name = ''
                    obj.path = item.img
                }
                return obj
            })
            console.log(listImage)
            this.imgList = listImage
        }
    }
}
</script>