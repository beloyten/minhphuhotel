<template>
    <div class="admin-service" :class='{loading: loading}'>
        <div class="major-service">
            <div class="header">
                <div class="left">
                    <div class="title">
                        Thư viện ảnh
                    </div>
                    <button @click="handleCreate()">Thêm mới</button>
                </div>
            </div>
            <div class="list-gallery" v-if="listAllPhotoGallery.length > 0">
                <div class="img-gallery-admin" v-for="item in getNumberRow" :key="item">
                    <div class="img-gallery">
                        <img :src="listAllPhotoGallery[item*3-3] && listAllPhotoGallery[item*3-3].img ? listAllPhotoGallery[item*3-3].img : ''" alt="" :class="{display_none: !listAllPhotoGallery[item*3-3]}" @click="viewImage(item)"/>
                        <img v-if="listAllPhotoGallery[item*3-3]" class="img-logo" src="images/icons/delete.png" alt="" @click.prevent="handleDelete(listAllPhotoGallery[item*3-3])"/>
                    </div>
                    <div class="img-gallery">
                        <img :src="listAllPhotoGallery[item*3-2] && listAllPhotoGallery[item*3-2].img ? listAllPhotoGallery[item*3-2].img : ''" alt="" :class="{display_none: !listAllPhotoGallery[item*3-2]}" @click="viewImage(item)"/>
                        <img v-if="listAllPhotoGallery[item*3-2]" class="img-logo" src="images/icons/delete.png" alt="" @click.prevent="handleDelete(listAllPhotoGallery[item*3-2])"/>
                    </div>
                    <div class="img-gallery">
                        <img :src="listAllPhotoGallery[item*3-1] && listAllPhotoGallery[item*3-1].img ? listAllPhotoGallery[item*3-1].img : ''" alt="" :class="{display_none: !listAllPhotoGallery[item*3-1]}" @click="viewImage(item)"/>
                        <img v-if="listAllPhotoGallery[item*3-1]" class="img-logo" src="images/icons/delete.png" alt="" @click.prevent="handleDelete(listAllPhotoGallery[item*3-1])"/>
                    </div>
                </div>
            </div>
            <div v-else class="no-data">
                <p>Thư viện ảnh của bạn chưa có ảnh nào. Hãy <a href="#" @click.prevent="handleCreate()">Thêm mới</a> để thêm một ảnh vào thư viện.</p>
            </div>
        </div>
        <AddImage v-if="openDialogCreate" :openDialogCreate.sync="openDialogCreate" :success.sync="success"/>
        <DeleteImage v-if="openDialogDelete" :openDialogDelete.sync="openDialogDelete" :success.sync="success" :id="id"/>
        <ViewImage v-if="openDialogView" :openDialogView.sync="openDialogView"/>
    </div>
</template>
<script>
import AddImage from "./components/AddImage"
import DeleteImage from "./components/DeleteImage"
import ViewImage from "./components/ViewImage"

export default {
    components: {
        AddImage,
        DeleteImage,
        ViewImage
    },
    data() {
      return {
        activeName: 'first',
        openDialogCreate: false,
        openDialogDelete:false,
        openDialogView: false,
        service: {},
        edit: false,
        success: false,
        loading: false,
        id: null,
        getNumberRow: 0
      }
    },
    computed: {
        listAllPhotoGallery() {
            return this.$store.getters.listAllPhotoGallery
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
            console.log(e)
            console.log(this.success)
            if(!e && this.success) {
                this.success = false
                this.loading = true
                this.fetch()
            }
        }
    },
    methods: {
        handleCreate(index, row) {
            this.openDialogCreate = true
        },
        handleDelete(object) {
            this.id = object.id
            this.openDialogDelete = true
        },
        async fetch() {
            this.loading = true
            await this.$store.dispatch('getAllPhotoInGallery')
            if(this.listAllPhotoGallery.length % 3 === 0) {
                this.getNumberRow = Math.floor(this.listAllPhotoGallery.length / 3)
            } else {
                this.getNumberRow = Math.floor(this.listAllPhotoGallery.length / 3) + 1
            }
            setTimeout(() => {
                this.loading = false
            }, 300)
        },
        viewImage() {
            this.openDialogView = true
            console.log(this.openDialogView)
        }
    },
    async created() {
        await this.fetch()
    }
}
</script>