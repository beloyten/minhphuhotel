<template>
    <div class="admin-service" :class='{loading: loading}'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Dịch vụ chính" name="homepageService">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Danh sách dịch vụ chính
                            </div>
                        </div>
                    </div>
                    <el-table
                        ref="homepageServiceTable"
                        :data="listHompageService"
                        style="width: 100%; min-height: 500px;">
                            <el-table-column
                                label="STT"
                                width="75">
                                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                            </el-table-column>
                            <el-table-column
                                property="name"
                                label="Tên dịch vụ"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                property="title"
                                label="Tiêu đề"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                property="brief"
                                label="Tóm tắt"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                property="shortDescription"
                                label="Mô tả ngắn"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                label=""
                                width="175">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)">Sửa</el-button>
                                    <el-button
                                    size="mini"
                                    @click="handleDetail(scope.$index, scope.row)">Xem trước</el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Các dịch vụ khác" name="otherService">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Danh sách dịch vụ
                            </div>
                            <button @click="handleCreate()">Thêm mới</button>
                        </div>
                    </div>
                    <el-table
                        ref="otherServiceTable"
                        :data="listMinorSerivce"
                        style="width: 100%">
                            <el-table-column
                                label="STT"
                                width="75">
                                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                            </el-table-column>
                            <el-table-column
                                property="name"
                                label="Tên dịch vụ"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                property="title"
                                label="Tiêu đề"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                property="brief"
                                label="Tóm tắt"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                property="shortDescription"
                                label="Mô tả ngắn"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                label=""
                                width="275">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)">Sửa</el-button>
                                    <el-button
                                    size="mini"
                                    @click="handleDetail(scope.$index, scope.row)">Xem trước</el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">Xóa</el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
        <CreateService v-if="openDialogCreate" :openDialogCreate.sync="openDialogCreate" :edit.sync="edit" :service="service" :success.sync="success"/>
        <DeleteService v-if="openDialogDelete" :openDialogDelete.sync="openDialogDelete" :service="service" :success.sync="success"/>
        <PreviewService v-if="openDialogPreview" :openDialogPreview.sync="openDialogPreview" :id="id"/>
    </div>
</template>
<script>
import CreateService from './components/CreateService';
import DeleteService from './components/DeleteService';
import PreviewService from './components/PreviewService';

export default {
    components: {
        CreateService,
        DeleteService,
        PreviewService
    },
    data() {
      return {
        activeName: 'homepageService',
        openDialogCreate: false,
        openDialogDelete:false,
        openDialogPreview: false,
        service: {},
        edit: false,
        success: false,
        loading: false,
        id: null
      }
    },
    computed: {
        listHompageService() {
            return this.$store.getters.listHomepageService
        },
        listMinorSerivce() {
            return this.$store.getters.listMinorService
        }
    },
    watch: {
        openDialogCreate(e) {
            if(!e && this.success) {
                this.success = false
                this.loading = true
                this.fetch()
            }
        },
        openDialogDelete(e) {
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
        handleEdit(index, row) {
            this.service = row
            this.edit = true
            this.openDialogCreate = true
        },
        handleCreate(index, row) {
            this.service = {}
            this.edit = false
            this.openDialogCreate = true
        },
        handleDetail(index, row) {
            this.id = row.id
            this.openDialogPreview = true
        },
        handleDelete(index, row) {
            this.service = row
            this.openDialogDelete = true
        },
        async fetch() {
            this.loading = true
            if(this.activeName === 'homepageService') {
                await this.$store.dispatch('getAllHomepageService')
            } else if(this.activeName === 'otherService'){
                await this.$store.dispatch('getAllMinorService')
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