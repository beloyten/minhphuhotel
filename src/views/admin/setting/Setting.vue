<template>
    <div class="admin-service" :class='{loading: loading}'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Dịch vụ chính" name="first">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Danh sách dịch vụ chính
                            </div>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="listHompageService"
                        style="width: 100%; min-height: 500px;">
                            <el-table-column
                                label="ID"
                                width="75">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
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
            <el-tab-pane label="Các dịch vụ khác" name="second">
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
                        ref="multipleTable"
                        :data="listMinorSerivce"
                        style="width: 100%">
                            <el-table-column
                                label="ID"
                                width="75">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column
                                property="title"
                                label="Tiêu đề"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                property="brieft"
                                label="Tóm tắt"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                property="shortDes"
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
    </div>
</template>
<script>

export default {
    data() {
      return {
        activeName: 'first',
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
    // watch: {
    //     openDialogCreate(e) {
    //         if(e && this.success) {
    //             this.success = false
    //             this.loading = true
    //             this.fetch()
    //         }
    //     },
    //     openDialogDelete(e) {
    //         if(e && this.success) {
    //             this.success = false
    //             this.loading = true
    //             this.fetch()
    //         }
    //     }
    // },
    methods: {
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });   
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleClick(tab, event) {
            console.log(tab, event);
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
            await this.$store.dispatch('getAllHomepageService')
            await this.$store.dispatch('getAllMinorService')
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