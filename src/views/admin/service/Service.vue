<template>
    <div class="admin-service">
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
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
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
        <CreateService v-if="openDialogCreate" :openDialog.sync="openDialogCreate" :edit.sync="edit" :service="service"/>
        <DeleteService v-if="openDialogDelete" :openDialog.sync="openDialogDelete"  :service="id"/>
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
        tableData: [{
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 1,
          title: 'Bài đăng 1',
          shortDes: 'No. 189, Grove St, Los Angeles',
          content: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: [],
        activeName: 'first',
        openDialogCreate: false,
        openDialogDelete:false,
        service: {},
        id: null,
        edit: false, 

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
      }
    },
    async created() {
        await this.$store.dispatch('getAllHomepageService')
          await this.$store.dispatch('getAllMinorService')
        
    }
}
</script>