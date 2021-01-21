<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Cập nhật Banner': 'Thêm mới Banner'" :visible="openDialogCreate" @close="close()" :close-on-click-modal="false">
            <el-form>
                <el-form-item class="upload-image" label="Upload ảnh" :label-width="formLabelWidth">
                    <p>*Ảnh đầu tiên sẽ là ảnh mặc định. Hãy up ảnh ngang với kích cỡ 21:9 để có chất lượng ảnh tốt nhất.</p>
                    <vue-upload-multiple-image
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        :data-images="imgList"
                        :showEdit="false"
                        :multiple="false"
                        :showPrimary="false"
                    ></vue-upload-multiple-image>
                </el-form-item>
                <el-form-item label="Tiêu đề" :label-width="formLabelWidth">
                    <el-input v-model="bannerDetail.title" autocomplete="off" :class="{error_input : errorForm.title}"></el-input>
                </el-form-item>
                <el-form-item label="Tóm tắt" :label-width="formLabelWidth">
                    <el-input v-model="bannerDetail.brief" autocomplete="off" :class="{error_input : errorForm.brief}"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Trở về</el-button>
                <el-button type="primary" @click="createBanner()" v-if="!edit">Thêm mới</el-button>
                <el-button type="primary" @click="updateBanner()" v-else>Cập nhật</el-button>
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
            bannerDetail: {
                title: "",
                brief: ""
            },
            loading: false,
            imgList: [],
            dialogImageUrl: '',
            errorForm: {
                title: false,
                brief: false
            }
        }
    },
    computed: {
        isValidTitle() {
            return this.bannerDetail.title.trim()
        },
        isValidBrief() {
            return this.bannerDetail.brief.trim()
        },
        isValidForm() {
            return this.isValidTitle && this.isValidBrief
        }
    },
    props: {
        openDialogCreate: false,
        edit: false,
        banner: {},
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
        async updateBanner() {
            this.loading = true
            this.errorForm.title = !this.isValidTitle
            this.errorForm.brief = !this.isValidBrief
            console.log(this.imgList)
            if(this.isValidForm) {
                let listImage = this.imgList.map(item => {
                    let obj = {}
                    obj.img = item.path
                    return obj
                })
                this.bannerDetail.image = listImage[0] && listImage[0].img ? listImage[0].img : ''
                await this.$store.dispatch('updateBanner', this.bannerDetail).then(rs => {
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
        async createBanner() {
            this.loading = true
            this.errorForm.title = !this.isValidTitle
            this.errorForm.brief = !this.isValidBrief
            if(this.isValidForm) {
                let listImage = this.imgList.map(item => {
                    let obj = {}
                    obj.img = item.path
                    return obj
                })
                this.bannerDetail.image = listImage[0] && listImage[0].img ? listImage[0].img : ''
                await this.$store.dispatch('createBanner', this.bannerDetail).then(rs => {
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
            let imgResponse = []
            this.loading = true
            await this.$store.dispatch('getOneBanner', this.banner.id).then(rs => {
                if(rs.status === 'success') {
                    this.bannerDetail = rs.data
                    imgResponse.push(rs.data.image)
                }
            })
            let listImage = imgResponse.map((item,index) => {
                let obj = {}
                if(index === 0) {
                    obj.default = 1
                    obj.highlight = 1
                    obj.name = ''
                    obj.path = item
                } else {
                    obj.default = 0
                    obj.highlight = 0
                    obj.name = ''
                    obj.path = item
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