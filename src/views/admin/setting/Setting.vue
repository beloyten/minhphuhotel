<template>
    <div class="admin-service" :class='{loading: loading}'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Cài đặt Email" name="email">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Danh sách Email
                            </div>
                            <button @click="handleCreateEmail()">Thêm mới</button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="listAllEmployee"
                        style="width: 100%">
                            <el-table-column
                                label="STT"
                                width="75">
                                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                            </el-table-column>
                            <el-table-column
                                property="type"
                                label="Type"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                property="name"
                                label="Họ và tên"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                property="email"
                                label="Email"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                label=""
                                width="275">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleEditEmail(scope.$index, scope.row)">Sửa</el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDeleteEmail(scope.$index, scope.row)">Xóa</el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Cài đặt liên lạc" name="contact">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Thông tin liên hệ
                            </div>
                            <button @click="enableEdit = true">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div class="contact-admin">
                        <el-form>
                            <el-form-item label="Số điện thoại" :label-width="formLabelWidth">
                                <el-input v-model="contact.phone" :disabled="!enableEdit" autocomplete="off" :class="{error_input : errorFormContact.phone}"></el-input>
                            </el-form-item>
                            <el-form-item label="Email" :label-width="formLabelWidth">
                                <el-input v-model="contact.email" :disabled="!enableEdit" autocomplete="off" :class="{error_input : errorFormContact.email}"></el-input>
                            </el-form-item>
                            <el-form-item label="Facebook" :label-width="formLabelWidth">
                                <el-input v-model="contact.facebook" :disabled="!enableEdit" autocomplete="off" :class="{error_input : errorFormContact.facebook}"></el-input>
                            </el-form-item>
                            <el-form-item label="Instagram" :label-width="formLabelWidth">
                                <el-input v-model="contact.insta" :disabled="!enableEdit" autocomplete="off" :class="{error_input : errorFormContact.instagram}"></el-input>
                            </el-form-item>
                            <el-form-item label="Youtube" :label-width="formLabelWidth">
                                <el-input v-model="contact.youtube" :disabled="!enableEdit" autocomplete="off" :class="{error_input : errorFormContact.youtube}"></el-input>
                            </el-form-item>
                            <el-form-item label="Địa chỉ" :label-width="formLabelWidth">
                                <el-input v-model="contact.address" :disabled="!enableEdit" autocomplete="off" :class="{error_input : errorFormContact.address}"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="closeEditContact()" v-if="enableEdit">Trở về</el-button>
                            <el-button type="primary" v-if="enableEdit" @click="updateContact()">Cập nhật</el-button>
                        </span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Cài đặt giới thiệu" name="preface">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Thông tin giới thiệu
                            </div>
                            <button @click="enableEditPreface = true">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div class="contact-admin">
                        <el-form>
                            <el-form-item label="Tiêu đề" :label-width="formLabelWidth">
                                <el-input v-model="preface.title" :disabled="!enableEditPreface" autocomplete="off" :class="{error_input : errorFormPreface.title}"></el-input>
                            </el-form-item>
                            <el-form-item label="Nội dung" :label-width="formLabelWidth">
                                <textarea id="message" :disabled="!enableEditPreface" v-model="preface.description" :class="{error_textarea: errorFormPreface.description}"></textarea>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="closeEditPreface()" v-if="enableEditPreface">Trở về</el-button>
                            <el-button type="primary" v-if="enableEditPreface" @click="updatePreface()">Cập nhật</el-button>
                        </span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Đổi mật khẩu" name="changePass">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Danh sách dịch vụ
                            </div>
                        </div>
                    </div>
                    <div class="contact-admin">
                        <el-form>
                            <el-form-item label="Mật khẩu hiện tại" :label-width="formLabelWidth">
                                <el-input type="password" v-model="user.currentPassword" autocomplete="off" :class="{error_input : errorFormChangePass.currentPassword}"></el-input>
                            </el-form-item>
                            <el-form-item label="Mật khẩu mới" :label-width="formLabelWidth">
                                <el-input type="password" v-model="user.newPassword" autocomplete="off" :class="{error_input : errorFormChangePass.newPassword}"></el-input>
                            </el-form-item>
                            <el-form-item label="Nhập lại mật khẩu" :label-width="formLabelWidth">
                                <el-input type="password" v-model="user.confirmPassword" autocomplete="off" :class="{error_input : errorFormChangePass.confirmPassword}"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="cancelChangePass()">Hủy bỏ</el-button>
                            <el-button type="primary" @click="changePassword()">Cập nhật</el-button>
                        </span>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <CreateEmail v-if="openDialogCreateEmail" :openDialogCreateEmail.sync="openDialogCreateEmail" :edit="edit" :employee="employee" :success.sync="success"/>
        <DeleteEmail v-if="openDialogDeleteEmail" :openDialogDeleteEmail.sync="openDialogDeleteEmail" :employee="employee" :success.sync="success"/>
    </div>
</template>
<script>
import CreateEmail from './components/CreateEmail'
import DeleteEmail from './components/DeleteEmail'
import UtilService from '@/utils/UtilService'

export default {
    components: {
        CreateEmail,
        DeleteEmail
    },
    data() {
      return {
        activeName: 'email',
        openDialogCreateEmail: false,
        openDialogDeleteEmail:false,
        employee: {},
        edit: false,
        success: false,
        loading: false,
        id: null,
        contact: {
            phone: '',
            email: '',
            address: '',
            facebook: '',
            insta: '',
            youtube: ''
        },
        errorFormContact: {
            phone: false,
            email: false,
            address: false,
            facebook: false,
            instagram: false,
            youtube: false
        }, 
        preface: {
            title: '',
            description: ''
        },
        errorFormPreface: {
            title: false,
            description: false
        }, 
        user: {
            currentPassword: '', 
            newPassword: '',
            confirmPassword: ''
        },
        errorFormChangePass: {
            currentPassword: false,
            newPassword: false,
            confirmPassword: false
        },
        enableEdit: false,
        enableEditPreface: false,
        formLabelWidth: '170px'
      }
    },
    computed: {
        listAllEmployee() {
            return this.$store.getters.listAllEmployee;
        },
        isValidPhone() {
            return this.contact.phone.trim() && UtilService.checkValidatePhone(this.contact.phone)
        },
        isValidEmail() {
            return this.contact.email.trim() && UtilService.checkValidateEmail(this.contact.email)
        },
        isValidAddress() {
            return this.contact.address.trim()
        },
        isValidFacebook() {
            return this.contact.facebook.trim()
        },
        isValidInstagram() {
            return this.contact.insta.trim()
        },
        isValidYouTube() {
            return this.contact.youtube.trim()
        },
        isValidFormContact() {
            return this.isValidPhone && this.isValidEmail && this.isValidAddress 
                && this.isValidFacebook && this.isValidInstagram && this.isValidYouTube
        },
        isValidCurrentPassword() {
            return this.user.currentPassword.trim()
        },
        isValidNewPassword() {
            return this.user.newPassword.trim()
        },
        isValidConfirmPassword() {
            return this.user.confirmPassword.trim()
        },
        isValidFormChangePass() {
            return this.isValidCurrentPassword && this.isValidNewPassword && this.isValidConfirmPassword
        },
        isValidTitlePreface() {
            return this.preface.title.trim()
        },
        isValidDescriptionPreface() {
            return this.preface.description.trim()
        },
        isValidFormPreface() {
            return this.isValidTitlePreface && this.isValidDescriptionPreface
        }
    },
    watch: {
        openDialogCreateEmail(e) {
            if(!e && this.success) {
                this.success = false
                this.loading = true
                this.fetch()
            }
        },
        openDialogDeleteEmail(e) {
            if(!e && this.success) {
                this.success = false
                this.loading = true
                this.fetch()
            }
        }
    },
    methods: {
        async handleClick(tab, event) {
            this.loading = true
            await this.fetch()
        },
        handleEditEmail(index, row) {
            this.employee = row
            this.edit = true
            this.openDialogCreateEmail = true
        },
        handleCreateEmail(index, row) {
            this.employee = {}
            this.edit = false
            this.openDialogCreateEmail = true
        },
        async closeEditContact() {
            this.enableEdit = false
            this.errorFormContact = {
                phone: false,
                email: false,
                address: false,
                facebook: false,
                instagram: false,
                youtube: false
            }
            await this.fetch()
        },
        async closeEditPreface() {
            this.enableEditPreface = false
            this.errorFormPreface = {
                title: false,
                escription: false
            }
            await this.fetch()
        },
        async updateContact() {
            this.loading = true
            this.errorFormContact.phone = !this.isValidPhone
            this.errorFormContact.email = !this.isValidEmail
            this.errorFormContact.address = !this.isValidAddress
            this.errorFormContact.facebook = !this.isValidFacebook
            this.errorFormContact.instagram = !this.isValidInstagram
            this.errorFormContact.youtube = !this.isValidYouTube
            if(this.isValidFormContact) {
                await this.$store.dispatch('updateContact', this.contact).then(rs => {
                    if(rs.status === 'success') {
                        this.enableEdit = false
                        this.fetch()
                    } else {
                        this.loading = false
                    }
                })
            } else {
                this.loading = false
                this.$store.dispatch('showErrorMsg', 'Vui lòng kiểm tra lại thông tin.')
            }
        },
        async updatePreface() {
            this.loading = true
            this.errorFormPreface.title = !this.isValidTitlePreface
            this.errorFormPreface.description = !this.isValidDescriptionPreface
            if(this.isValidFormPreface) {
                await this.$store.dispatch('editPreface', this.preface).then(rs => {
                    if(rs.status === 'success') {
                        this.enableEditPreface = false
                        this.fetch()
                    } else {
                        this.loading = false
                    }
                })
            } else {
                this.loading = false
                this.$store.dispatch('showErrorMsg', 'Vui lòng kiểm tra lại thông tin.')
            }
        },
        cancelChangePass() {
            this.user = {
                currentPassword: '', 
                newPassword: '',
                confirmPassword: ''
            }
            this.errorFormChangePass = {
                currentPassword: false,
                newPassword: false,
                confirmPassword: false
            }
        },
        async changePassword() {
            this.loading = true
            this.errorFormChangePass.currentPassword = !this.isValidCurrentPassword
            this.errorFormChangePass.newPassword = !this.isValidNewPassword
            this.errorFormChangePass.confirmPassword = !this.isValidConfirmPassword
            if(this.isValidFormChangePass) {
                if(this.user.confirmPassword !== this.user.newPassword) {
                    this.errorFormChangePass.newPassword = true
                    this.errorFormChangePass.confirmPassword = true
                    this.loading = false 
                    this.$store.dispatch('showErrorMsg', 'Mật khẩu không trùng khớp.')
                } else {
                    await this.$store.dispatch('changePassword', {
                        newPassword: this.user.newPassword,
                        oldPassword: this.user.currentPassword
                    }).then(rs => {
                        if(rs.status === 'success') {
                            this.user = {
                                currentPassword: '', 
                                newPassword: '',
                                confirmPassword: ''
                            }
                            this.errorFormChangePass = {
                                currentPassword: false,
                                newPassword: false,
                                confirmPassword: false
                            }
                            setTimeout(() => {
                                this.loading = false
                            },300)
                        } else {
                            this.loading = false
                        }
                    })
                }
            } else {
                this.loading = false
                this.$store.dispatch('showErrorMsg','Vui lòng kiểm tra lại thông tin.')
            }
        },
        handleDeleteEmail(index, row) {
            this.employee = row
            this.openDialogDeleteEmail = true
        },
        async fetch() {
            this.loading = true
            if(this.activeName === 'email') {
                await this.$store.dispatch('getAllEmployee')
            } else if(this.activeName === 'contact') {
                await this.$store.dispatch('getContact').then(rs => {
                    if(rs.status === 'success') {
                        this.contact = rs.data
                    }
                })
            } else  if(this.activeName === 'preface') {
                await this.$store.dispatch('getPreface').then(rs => {
                    if(rs.status === 'success') {
                        this.preface = rs.data
                    }
                })
            }
            setTimeout(() => {
                this.loading = false
            }, 300)
        }
    },
    async created() {
        await this.fetch()
    }
}
</script>