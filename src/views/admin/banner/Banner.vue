<template>
    <div class="admin-service" :class='{loading: loading}'>
        <div class="major-service">
            <div class="header">
                <div class="left">
                    <div class="title">
                        Danh sách Banner
                    </div>
                    <button @click="handleCreate()">Thêm mới</button>
                </div>
            </div>
            <el-table
                ref="eventTable"
                :data="listAllBanner"
                style="width: 100%; min-height: 500px;">
                    <el-table-column
                        label="ID"
                        width="75">
                        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
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
        <CreateBanner v-if="openDialogCreate" :openDialogCreate.sync="openDialogCreate" :edit.sync="edit" :banner="banner" :success.sync="success"/>
        <DeleteBanner v-if="openDialogDelete" :openDialogDelete.sync="openDialogDelete" :banner="banner" :success.sync="success"/>
        <PreviewBanner v-if="openDialogPreview" :openDialogPreview.sync="openDialogPreview" :id="id"/>
    </div>
</template>
<script>
import CreateBanner from './components/CreateBanner';
import DeleteBanner from './components/DeleteBanner';
import PreviewBanner from './components/PreviewBanner';

export default {
    components: {
        CreateBanner,
        DeleteBanner,
        PreviewBanner
    },
    data() {
      return {
        openDialogCreate: false,
        openDialogDelete:false,
        openDialogPreview: false,
        banner: {},
        edit: false,
        success: false,
        loading: false,
        id: null
      }
    },
    computed: {
        listAllBanner() {
            return this.$store.getters.listAllBanner
        },
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
        handleEdit(index, row) {
            this.banner = row
            this.edit = true
            this.openDialogCreate = true
        },
        handleCreate(index, row) {
            this.banner = ""
            this.edit = false
            this.openDialogCreate = true
        },
        handleDetail(index, row) {
            this.id = row.id
            this.openDialogPreview = true
        },
        handleDelete(index, row) {
            this.banner = row
            this.openDialogDelete = true
        },
        async fetch() {
            this.loading = true
            await this.$store.dispatch('getAllBanner')
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