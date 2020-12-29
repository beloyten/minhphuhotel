<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Cập nhật phòng': 'Thêm mới phòng'" :visible="openDialogCreate" @close="close()" :close-on-click-modal="false">
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
                <el-form-item label="Tên phòng" :label-width="formLabelWidth">
                    <el-input v-model="roomDetail.name" autocomplete="off" :class="{error_input : errorForm.name}"></el-input>
                </el-form-item>
                <el-form-item label="Tóm tắt" :label-width="formLabelWidth">
                    <el-input v-model="roomDetail.brief" autocomplete="off" :class="{error_input : errorForm.brief}"></el-input>
                </el-form-item>
                <el-form-item label="Mô tả ngắn" :label-width="formLabelWidth">
                    <el-input v-model="roomDetail.shortDescription" autocomplete="off" :class="{error_input : errorForm.shortDescription}"></el-input>
                </el-form-item>
                <el-form-item label="Giá phòng" :label-width="formLabelWidth" class="input-money">
                    <el-input v-model="roomDetail.price" autocomplete="off" :class="{error_input : errorForm.price}"></el-input>                    
                    <p :class='{error: errorPrice}'>{{hintPrice}}</p>
                </el-form-item>
                <el-form-item label="Trạng thái" :label-width="formLabelWidth">
                    <el-select id="province" v-model="roomDetail.status" placeholder="Trạng thái" :class="{error_input : errorForm.status}">
                        <el-option
                            v-for="(item, index) in listStatus"
                            :key="index"
                            :label="item.name"
                            :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Nội dung" :label-width="formLabelWidth">
                    <textarea id="message" v-model="roomDetail.description" :class="{error_textarea: errorForm.description}"></textarea>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Trở về</el-button>
                <el-button type="primary" @click="createRoom()" v-if="!edit">Thêm mới</el-button>
                <el-button type="primary" @click="updateRoom()" v-else>Cập nhật</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import UtilService from '@/utils/UtilService'

export default {
    components: {
        VueUploadMultipleImage
    },
    data () {
        return { 
            formLabelWidth: '170px',
            roomDetail: {
                name: "",
                brief: "",
                shortDescription: "",
                description:"",
                price: null,
                status: null
            },
            loading: false,
            imgList: [],
            dialogImageUrl: '',
            listStatus: [
                {
                    name: 'Còn phòng'
                },
                {
                    name: 'Hết phòng'
                }
            ],
            hintPrice: '',
            errorPrice: false,
            errorForm: {
                name: false,
                brief: false,
                shortDescription: false,
                price: false,
                status: false,
                description: false,
            }
        }
    },
    computed: {
        viewPrice() {
            return this.roomDetail.price;
        },
        isValidName() {
            return this.roomDetail.name.trim()
        },
        isValidBrief() {
            return this.roomDetail.brief.trim()
        },
        isValidShortDescription() {
            return this.roomDetail.shortDescription.trim()
        },
        isValidPrice() {
            return this.roomDetail.price && !this.errorPrice
        },
        isValidStatus() {
            return this.roomDetail.status
        },
        isValidDescription() {
            return this.roomDetail.description.trim()
        },
        isValidForm() {
            return this.isValidName && this.isValidBrief && this.isValidShortDescription
                && this.isValidPrice && this.isValidStatus && this.isValidDescription
        }
    },
    props: {
        openDialogCreate: false,
        edit: false,
        room: {},
        success: false
    },
    watch: {
        viewPrice() {
            if(this.roomDetail.price) {
                if(!Number(this.roomDetail.price)) {
                    this.hintPrice = 'Bạn phải nhập vào 1 số'
                    this.errorPrice = true
                } else {
                    this.hintPrice = UtilService.formatCash(this.roomDetail.price+'')+' VNĐ'
                    this.errorPrice = false
                }
            } else {
                this.hintPrice = ''
            }
        }
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
        async updateRoom() {
            this.loading = true
            this.errorForm.name = !this.isValidName
            this.errorForm.brief = !this.isValidBrief
            this.errorForm.shortDescription = !this.isValidShortDescription
            this.errorForm.price = !this.isValidPrice
            this.errorForm.status = !this.isValidStatus
            this.errorForm.description = !this.isValidDescription
            if(this.isValidForm) {
                let listImage = this.imgList.map(item => {
                    let obj = {}
                    obj = item.path
                    return obj
                })
                this.roomDetail.price = Number(this.roomDetail.price)
                await this.$store.dispatch('updateRoom', {
                    list: listImage,
                    room: this.roomDetail
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
        async createRoom() {
            this.loading = true
            this.errorForm.name = !this.isValidName
            this.errorForm.brief = !this.isValidBrief
            this.errorForm.shortDescription = !this.isValidShortDescription
            this.errorForm.price = !this.isValidPrice
            this.errorForm.status = !this.isValidStatus
            this.errorForm.description = !this.isValidDescription
            if(this.isValidForm) {
                let listImage = this.imgList.map(item => {
                    let obj = {}
                    obj = item.path
                    return obj
                })
                this.roomDetail.price = Number(this.roomDetail.price)
                await this.$store.dispatch('createRoom', {
                    list: listImage,
                    room: this.roomDetail
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
            let imgResponse = []
            await this.$store.dispatch('getOneRoom', this.room.id).then(rs => {
                if(rs.status === 'success') {
                    this.roomDetail = rs.data.room
                    imgResponse = rs.data.list
                }
            })
            let listImage = imgResponse.map((item,index) => {
                let obj = {}
                if(index === 0) {
                    obj.default = 1
                    obj.hightlight = 1
                    obj.name = ''
                    obj.path = item
                } else {
                    obj.default = 0
                    obj.hightlight = 0
                    obj.name = ''
                    obj.path = item
                }
                return obj
            })
            console.log(listImage)
            this.imgList = listImage
        }
    }
}
</script>