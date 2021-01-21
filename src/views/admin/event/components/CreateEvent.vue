<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Cập nhật sự kiện': 'Thêm mới sự kiện'" :visible="openDialogCreate" @close="close()" :close-on-click-modal="false">
            <el-form>
                <el-form-item class="upload-image" label="Upload ảnh" :label-width="formLabelWidth">
                    <p>*Ảnh đầu tiên sẽ là ảnh mặc định. Hãy up ảnh ngang với kích cỡ 21:9 để có chất lượng ảnh tốt nhất.</p>
                    <vue-upload-multiple-image
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        :data-images="imgList"
                        :showEdit="false"
                        :showPrimary="false"
                    ></vue-upload-multiple-image>
                </el-form-item>
                <el-form-item label="Tiêu đề" :label-width="formLabelWidth">
                    <el-input maxlength="40" show-word-limit v-model="eventDetail.title" autocomplete="off" :class="{error_input : errorForm.title}"></el-input>
                </el-form-item>
                <el-form-item label="Tóm tắt" :label-width="formLabelWidth">
                    <el-input maxlength="80" show-word-limit v-model="eventDetail.brief" autocomplete="off" :class="{error_input : errorForm.brief}"></el-input>
                </el-form-item>
                <el-form-item label="Mô tả ngắn" :label-width="formLabelWidth">
                    <el-input maxlength="100" show-word-limit v-model="eventDetail.shortDescription" autocomplete="off" :class="{error_input : errorForm.shortDescription}"></el-input>
                </el-form-item>
                <el-form-item label="Nội dung" :label-width="formLabelWidth">
                    <textarea id="message" v-model="eventDetail.description" :class="{error_textarea: errorForm.description}"></textarea>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Trở về</el-button>
                <el-button type="primary" @click="createEvent()" v-if="!edit">Thêm mới</el-button>
                <el-button type="primary" @click="updateEvent()" v-else>Cập nhật</el-button>
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
            eventDetail: {
                title: "",
                brief: "",
                shortDescription: "",
                description:"",
                type:"EVENT",
            },
            loading: false,
            imgList: [],
            dialogImageUrl: '',
            errorForm: {
                title: false,
                brief: false,
                shortDescription: false,
                description: false
            }
        }
    },
    computed: {
        isValidTitle() {
            return this.eventDetail.title.trim()
        },
        isValidBrief() {
            return this.eventDetail.brief.trim()
        },
        isValidShortDescription() {
            return this.eventDetail.shortDescription.trim()
        },
        isValidDescription() {
            return this.eventDetail.description.trim()
        },
        isValidForm() {
            return this.isValidTitle && this.isValidBrief && this.isValidShortDescription
                && this.isValidDescription
        }
    },
    props: {
        openDialogCreate: false,
        edit: false,
        event: {},
        success: false
    },
    methods: {
        async close() {
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
        async updateEvent() {
            this.loading = true
            this.errorForm.title = !this.isValidTitle
            this.errorForm.brief = !this.isValidBrief
            this.errorForm.shortDescription = !this.isValidShortDescription
            this.errorForm.description = !this.isValidDescription
            console.log(this.imgList)
            if(this.isValidForm) {
                let listImage = this.imgList.map(item => {
                    let obj = {}
                    obj.img = item.path
                    return obj
                })
                await this.$store.dispatch('updateService', {
                    list: listImage,
                    post: this.eventDetail
                }).then(rs => {
                    if(rs.status === 'success') {
                        this.$emit('update:success', true)
                        setTimeout(() => {
                            this.loading = false
                        }, 300)
                        this.close();
                    } else {
                        this.loading = false
                    }
                })
            } else {
                this.loading = false
                this.$store.dispatch('showErrorMsg', 'Vui lòng kiểm tra lại thông tin.')
            }
        },
        async createEvent() {
            this.loading = true
            this.errorForm.title = !this.isValidTitle
            this.errorForm.brief = !this.isValidBrief
            this.errorForm.shortDescription = !this.isValidShortDescription
            this.errorForm.description = !this.isValidDescription
            if(this.isValidForm) {
                let listImage = this.imgList.map(item => {
                    let obj = {}
                    obj.img = item.path
                    return obj
                })
                await this.$store.dispatch('createService', {
                    list: listImage,
                    post: this.eventDetail
                }).then(rs => {
                    if(rs.status === 'success') {
                        this.$emit('update:success', true)
                        setTimeout(() => {
                            this.loading = false
                        }, 300)
                        this.close();
                    } else {
                        this.loading = false
                    }
                })
            } else {
                this.loading = false
                this.$store.dispatch('showErrorMsg', 'Vui lòng kiểm tra lại thông tin.')
            }
        }
    },
    async created() {
        if(this.edit) {
            this.loading = true
            let imgResponse = []
            await this.$store.dispatch('getOnePost', this.event.id).then(rs => {
                if(rs.status === 'success') {
                    this.eventDetail = rs.data.post
                    imgResponse = rs.data.list
                }
            })
            let listImage = imgResponse.map((item,index) => {
                let obj = {}
                if(index === 0) {
                    obj.default = 1
                    obj.highlight = 1
                    obj.name = ''
                    obj.path = item.img
                } else {
                    obj.default = 0
                    obj.highlight = 0
                    obj.name = ''
                    obj.path = item.img
                }
                return obj
            })
            this.imgList = listImage
            await setTimeout(() => {
                this.loading = false
            }, 50)
        }
    }
}
</script>