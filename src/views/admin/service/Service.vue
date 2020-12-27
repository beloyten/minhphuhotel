<template>
    <div class="admin-service" :class='{loading: loading}'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Major" name="first">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Major Service
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
                                label="Title"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                property="brief"
                                label="Brief"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                property="shortDescription"
                                label="Short Description"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                label=""
                                width="175">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                                    <el-button
                                    size="mini"
                                    @click="handleDetail(scope.$index, scope.row)">View</el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Service" name="second">
                <div class="major-service">
                    <div class="header">
                        <div class="left">
                            <div class="title">
                                Normal Service
                            </div>
                            <button @click="handleCreate()">Add new</button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="listMinorSerivce"
                        style="width: 100%">
                            <el-table-column
                                type="selection"
                                width="75">
                            </el-table-column>
                            <el-table-column
                                label="ID"
                                width="75">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column
                                property="title"
                                label="Title"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                property="shortDes"
                                label="Short Description"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                property="content"
                                label="Content"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                label=""
                                width="275">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                                    <el-button
                                    size="mini"
                                    @click="handleDetail(scope.$index, scope.row)">Detail</el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
        <CreateService v-if="openDialogCreate" :openDialogCreate.sync="openDialogCreate" :edit.sync="edit" :service="service" :success.sync="success"/>
        <DeleteService v-if="openDialogDelete" :openDialogDelete.sync="openDialogDelete" :id="id" :success.sync="success"/>
    </div>
</template>
<script>
import CreateService from './components/CreateService';
import DeleteService from './components/DeleteService';
export default {
    components: {
        CreateService,
        DeleteService
    },
    data() {
      return {
        activeName: 'first',
        openDialogCreate: false,
        openDialogDelete:false,
        service: {},
        id: null,
        edit: false,
        success: false,
        loading: false
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
            console.log(this.success)
            if(e && this.success) {
                this.success = false
                this.loading = true
                this.fetch()
            }
        },
        openDialogDelete(e) {
            if(e && this.success) {
                this.success = false
                this.loading = true
                this.fetch()
            }
        }
    },
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
            this.service = ""
            this.edit = false
            this.openDialogCreate = true
        },
        handleDetail(index, row) {
            this.$router.push({ name: 'Dịch vụ', params: {id: row.id}})
        },
        handleDelete(index, row) {
            this.id = row.id
            console.log("okk"+this.openDialogDelete)
            this.openDialogDelete = true
            console.log(this.openDialogDelete)
        },
        async fetch() {
            console.log(1)
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