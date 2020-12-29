<template>
    <div :class='{loading: loading}'>
        <el-dialog :title="edit ? 'Cập nhật Email': 'Thêm mới Email'" :visible="openDialogCreateEmail" @close="close()" :close-on-click-modal="false">
            <el-form>
                <el-form-item label="Họ và Tên" :label-width="formLabelWidth">
                    <el-input v-model="employeeDetail.name" autocomplete="off" :class="{error_input : errorForm.name}"></el-input>
                </el-form-item>
                <el-form-item label="Email" :label-width="formLabelWidth">
                    <el-input v-model="employeeDetail.email" autocomplete="off" :class="{error_input : errorForm.email}"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">Trở về</el-button>
                <el-button type="primary" @click="createEmail()" v-if="!edit">Thêm mới</el-button>
                <el-button type="primary" @click="updateEmail()" v-else>Cập nhật</el-button>
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
            employeeDetail: {
                name: "",
                email: "",
                type:"",
            },
            loading: false,
            dialogImageUrl: '',
            errorForm: {
                name: false,
                email: false
            }
        }
    },
    computed: {
        isValidName() {
            return this.employeeDetail.name.trim()
        },
        isValidEmail() {
            return this.employeeDetail.email.trim() && UtilService.checkValidateEmail(this.employeeDetail.email)
        },
        isValidForm() {
            return this.isValidName && this.isValidEmail
        }
    },
    props: {
        openDialogCreateEmail: false,
        edit: false,
        employee: {},
        success: false
    },
    methods: {
        async close() {
            this.$emit('update:openDialogCreateEmail', false)
        },
        async updateEmail() {
            this.loading = true
            this.errorForm.name = !this.isValidName
            this.errorForm.email = !this.isValidEmail
            if(this.isValidForm) {
                await this.$store.dispatch('updateEmployee', this.employeeDetail).then(rs => {
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
        async createEmail() {
            this.loading = true
            this.errorForm.name = !this.isValidName
            this.errorForm.email = !this.isValidEmail
            if(this.isValidForm) {
                await this.$store.dispatch('createEmployee', this.employeeDetail).then(rs => {
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
            this.employeeDetail = this.employee
        }
    }
}
</script>