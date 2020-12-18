<template>
    <div class="room">
        <Header/>
        <div class="list-room">
            <div class="list-room-title">Minh Phú Hotel</div>
            <div class="room-body">
                <div class="room-item" v-for="item in 6" :key='item'>
                    <div class="room-img">
                        <img src="images/room.jpg">
                    </div>
                    <div class="room-detail">
                        <div class="room-detail-title">
                            Phòng khách sạn
                        </div>
                        <div class="room-detail-content">
                            Phòng to lắm nên các bạn ở thoải mái, phòng to lắm nên các bạn ở thoải mái, phòng to lắm nên các bạn ở thoải mái, phòng to lắm nên các bạn ở thoải mái, phòng to lắm nên các bạn ở thoải mái.
                        </div>
                        <div class="room-detail-button">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
    components: {
        Header,
        Footer
    },
    
}
</script>