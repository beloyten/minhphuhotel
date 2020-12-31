<template>
    <div class="admin-service" :class='{loading: loading}'>
        <div class="major-service">
            <div class="header">
                <div class="left">
                    <div class="title">
                        Danh sách phòng
                    </div>
                    <button @click="handleCreate()">Thêm mới</button>
                </div>
            </div>
            <el-table
                ref="roomTable"
                :data="listAllRoom"
                style="width: 100%; min-height: 500px;">
                    <el-table-column
                        label="STT"
                        width="75">
                        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                    </el-table-column>
                    <el-table-column
                        property="room.name"
                        label="Tên phòng"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        property="room.brief"
                        label="Tóm tắt"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        property="room.shortDescription"
                        label="Mô tả ngắn"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        property="room.status"
                        label="Tình trạng"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        property="room.price"
                        label="Giá phòng"
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
        <CreateRoom v-if="openDialogCreate" :openDialogCreate.sync="openDialogCreate" :edit.sync="edit" :room="room" :success.sync="success"/>
        <DeleteRoom v-if="openDialogDelete" :openDialogDelete.sync="openDialogDelete" :room="room" :success.sync="success"/>
        <PreviewRoom v-if="openDialogPreview" :openDialogPreview.sync="openDialogPreview" :id="id"/>
    </div>
</template>
<script>
import CreateRoom from './components/CreateRoom';
import DeleteRoom from './components/DeleteRoom';
import PreviewRoom from './components/PreviewRoom';

export default {
    components: {
        CreateRoom,
        DeleteRoom,
        PreviewRoom
    },
    data() {
      return {
        openDialogCreate: false,
        openDialogDelete:false,
        openDialogPreview: false,
        room: {},
        edit: false,
        success: false,
        loading: false,
        id: null
      }
    },
    computed: {
        listAllRoom() {
            return this.$store.getters.listAllRoom
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
            this.room = row.room
            this.edit = true
            this.openDialogCreate = true
        },
        handleCreate(index, row) {
            this.room = ""
            this.edit = false
            this.openDialogCreate = true
        },
        handleDetail(index, row) {
            this.id = row.room.id
            this.openDialogPreview = true
        },
        handleDelete(index, row) {
            this.room = row.room
            this.openDialogDelete = true
        },
        async fetch() {
            this.loading = true
            await this.$store.dispatch('getAllRoom')
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