<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Cập nhật sự kiện': 'Thêm mới sự kiện'" :visible="openDialogCreate" @close="close()" :close-on-click-modal="false">
            <el-form>
                <el-form-item label="Upload ảnh" :label-width="formLabelWidth">
                    <vue-upload-multiple-image
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        :data-images="imgList"
                        :showEdit="false"
                    ></vue-upload-multiple-image>
                </el-form-item>
                <el-form-item label="Tiêu đề" :label-width="formLabelWidth">
                    <el-input v-model="serviceDetail.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Tóm tắt" :label-width="formLabelWidth">
                    <el-input v-model="serviceDetail.brief" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Mô tả ngắn" :label-width="formLabelWidth">
                    <el-input v-model="serviceDetail.shortDescription" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Nội dung" :label-width="formLabelWidth">
                    <textarea id="message" v-model="serviceDetail.description"></textarea>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Trở về</el-button>
                <el-button type="primary" @click="createService()" v-if="!edit">Thêm mới</el-button>
                <el-button type="primary" @click="updateService()" v-else>Cập nhật</el-button>
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
                type:"ROOM",
            },
            loading: false,
            imgList: [],
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    props: {
        openDialogCreate: false,
        edit: false,
        service: {},
        success: false
    },
    methods: {
        async close() {
            await this.$store.dispatch('getAllHomepageService')
            await this.$store.dispatch('getAllMinorService')
            this.$emit('update:openDialogCreate', false)
        },
        uploadImageSuccess(formData, index, fileList) {
            console.log('data', formData, index, fileList)
            this.imgList = fileList;
        },
        // editImage (formData, index, fileList) {
        //     console.log('edit data', formData, index, fileList)
        //     this.imgList.splice(index, 1, fileList[index]);
        // },
        beforeRemove (index, done, fileList) {
            this.$confirm("Bạn muốn xóa ảnh này khỏi danh sách?",'Xác Thực', {
                    confirmButtonText: 'Xóa',
                    cancelButtonText: 'Trở về',
                    type: 'warning'
                }
            ).then(()=>{
                this.imgList.splice(index, 1)
                done()
            }).catch(() => {

            })
        },
        async updateService() {
            this.loading = true
            let listImage = this.imgList.map(item => {
                let obj = {}
                obj.img = item.path
                return obj
            })
            await this.$store.dispatch('updateService', {
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
                    this.imgList = []
                    this.$emit('update:success', true)
                    this.close();
                }
            })
            setTimeout(() => {
                this.loading = false
            }, 300)
        },
        async createService() {
            this.loading = true
            let listImage = this.imgList.map(item => {
                let obj = {}
                obj.img = item.path
                return obj
            })
            await this.$store.dispatch('createService', {
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
                    this.imgList = []
                    this.$emit('update:success', true)
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
                if(index === 0) {
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