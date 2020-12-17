<template>
<div class="landing-page">
    <Header/>
    <div class="body-landing-page">
        <el-carousel indicator-position="outside">
            <el-carousel-item>
                <div class="item-1">
                    <div class="item__content">Minh Phú Diamond Place</div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-2">
                    <div class="item__content">Minh Phú Diamond Place</div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-3">
                    <div class="item__content">Minh Phú Diamond Place</div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <div class="content-1">
                <div class="text-content text-left">Sang trọng</div>
            </div>
            <div class="content-1">
                <div class="text-content">Chu đáo</div>
            </div>
            <div class="content-1">
                <div class="text-content">Cao cấp</div>
            </div>
        </div>
        <div class="post">
            <div class="post-content">
                <div class="post-content-detail">
                    <div class="post-text">
                        <p class="pre-title">CẢM HỨNG THIẾT KẾ TỪ ITALY</p>
                        <p class="title-post">Khách sạn chuẩn 4 sao</p>
                        <div class="post-content-short">
                            <p>Hơn 70 phòng khách sạn được đánh giá chuẩn 4 sao theo Tổ chức
                                du lịch Thế giới (WTO), thiết kế sang trọng, không gian cổ điển lấy cảm hứng từ kiến trúc Italy,
                                thiết kế sang trọng, không gian cổ điển lấy cảm hứng từ kiến trúc Italy.
                            </p>
                        </div>
                        <button class="view-more1" @click="viewMore()">Xem thêm</button>
                    </div>
                    <div class="post-image1">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                </div>
                <div class="post-content-detail">
                    <div class="post-image2">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                    <div class="post-text">
                        <p class="pre-title">HỆ THỐNG ÂM THANH ÁNH SÁNG CHUẨN QUỐC TẾ</p>
                        <p class="title-post">Nhà hàng & Tiệc cưới</p>
                        <div class="post-content-short">
                            <p>Trở thành nàng công chúa xinh đẹp sánh đôi cùng chàng
                                hoàng tử của mình trong ngày cưới đã không chỉ có trong những câu chuyện cổ tích nữa.
                            </p>
                            <p>Cung điện Minh Phú sẽ biến giấc mơ của bạn trở thành hiện thực
                                khi đến đây.
                            </p>
                            <p>Chúng tôi tin rằng bạn sẽ có những khoảnh khắc thực sự tuyệt vời.
                            </p>
                        </div>
                        <button class="view-more2" @click="viewMore()">Xem thêm</button>
                    </div>
                </div>
                <div class="post-content-detail">
                    <div class="post-text">
                        <p class="pre-title">ĐIỂM ĐẾN LÝ TƯỞNG CHO CÁC CHỊ EM PHỤ NỮ</p>
                        <p class="title-post">Spa & Xông hơi</p>
                        <div class="post-content-short">
                            <p>Hệ thống spa, xông hơi, làm đẹp chuyên nghiệp tại Minh Phú Spa. Điểm đến
                                lý tưởng cho chị em phụ nữ sau những ngày làm việc mệt mỏi.
                            </p>
                        </div>
                        <button class="view-more3" @click="viewMore()">Xem thêm</button>
                    </div>
                    <div class="post-image3">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="service-list">
            <div class="service-list-content">
                <div class="service-title">DANH SÁCH DỊCH VỤ</div>
                <div class="service-list-item">
                    <ul>
                        <li>Khách sạn</li>
                        <li>Hội nghị</li>
                    </ul>
                    <ul>
                        <li>Spa & xông hơi</li>
                        <li>Karaoke</li>
                    </ul>
                    <ul>
                        <li>Nhà hàng & Tiệc cưới</li>
                        <li>Cafe</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="event">
            <div class="event-text">banner cho event</div>
        </div>
        <div class="form-booking">
            <div class="form-booking-detail">
                <div class="booking-field">
                    <div class="field">
                        <label for="fullname">Họ & tên</label>
                        <input type="text" id="fullname"/>
                    </div>
                    <div class="field">
                        <label for="phone">Số điện thoại</label>
                        <input type="text" id="phone"/>
                    </div>
                    <div class="field">
                        <label for="service">Dịch vụ</label>
                        <select id="service">
                            <option>Khách sạn</option>
                            <option>Spa</option>
                            <option>Karaoke</option>
                        </select>
                    </div>
                </div>
                <div class="submit-booking">
                    Submit
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer"

export default {
    components: {
        Header,
        Footer
    },
    data () {
        return {
        }
    },
    computed: {},
    methods: {
        viewMore() {
            this.$router.push("/post-detail")
        }
    },
    mounted() {
        document.documentElement.scrollTop = 0
        var styleContent1 = document.createElement('style');
        styleContent1.innerHTML = `
        .content-1 {
                -webkit-animation: displayImgContent 1s; /* Chrome, Safari, Opera */
                animation: displayImgContent 1s;
                opacity: 1!important;
        }
        `;
        var stylePostImg1 = document.createElement('style');
        stylePostImg1.innerHTML = `
        .post-image1 {
                opacity: 1!important;
                -webkit-animation: displayImg 1s; /* Chrome, Safari, Opera */
                animation: displayImg 1s;
        }
        `;
        var stylePostImg2 = document.createElement('style');
        stylePostImg2.innerHTML = `
        .post-image2 {
                opacity: 1!important;
                -webkit-animation: displayImg 1s; /* Chrome, Safari, Opera */
                animation: displayImg 1s;
        }
        `;
        var stylePostImg3 = document.createElement('style');
        stylePostImg3.innerHTML = `
        .post-image3 {
                opacity: 1!important;
                -webkit-animation: displayImg 1s; /* Chrome, Safari, Opera */
                animation: displayImg 1s;
        }
        `;
        var styleButton1 = document.createElement('style');
        styleButton1.innerHTML = `
        .view-more1 {
                opacity: 1!important;
                -webkit-animation: displayButton 1s; /* Chrome, Safari, Opera */
                animation: displayButton 1s;
        }
        `;
        var styleButton2 = document.createElement('style');
        styleButton2.innerHTML = `
        .view-more2 {
                opacity: 1!important;
                -webkit-animation: displayButton 1s; /* Chrome, Safari, Opera */
                animation: displayButton 1s;
        }
        `;
        var styleButton3 = document.createElement('style');
        styleButton3.innerHTML = `
        .view-more3 {
                opacity: 1!important;
                -webkit-animation: displayButton 1s; /* Chrome, Safari, Opera */
                animation: displayButton 1s;
        }
        `;
        var styleServiceTitle = document.createElement('style');
        styleServiceTitle.innerHTML = `
        .service-title {
                opacity: 1!important;
                -webkit-animation: displayService 1s; /* Chrome, Safari, Opera */
                animation: displayService 1s;
        }
        `;
        var styleServiceItem = document.createElement('style');
        styleServiceItem.innerHTML = `
        .service-list-item {
                opacity: 1!important;
                -webkit-animation: displayServiceItem 1s; /* Chrome, Safari, Opera */
                animation: displayServiceItem 1s;
        }
        `;
        var styleFooter = document.createElement('style');
        styleFooter.innerHTML = `
        .footer-animation {
                -webkit-animation: displayFooter 1s; /* Chrome, Safari, Opera */
                animation: displayFooter 1s;
                opacity: 1!important;
        }
        `;
        var styleFormBooking = document.createElement('style');
        styleFormBooking.innerHTML = `
        .form-booking {
                -webkit-animation: displayForm 1s; /* Chrome, Safari, Opera */
                animation: displayForm 1s;
                opacity: 1!important;
        }
        `;
        window.onscroll = function(e) {
            console.log(document.documentElement.scrollTop);
            if(document.documentElement.scrollTop > 4500) {
                document.head.appendChild(styleFooter);
            } else if(document.documentElement.scrollTop > 4300) {
                document.head.appendChild(styleFormBooking);
            } else if(document.documentElement.scrollTop > 3400) {
                document.head.appendChild(styleServiceItem);
            } else if(document.documentElement.scrollTop > 3200) {
                document.head.appendChild(styleServiceTitle);
            } else if(document.documentElement.scrollTop > 2700) {
                document.head.appendChild(styleButton3);
            } else if(document.documentElement.scrollTop > 2200) {
                document.head.appendChild(stylePostImg3);
            } else if(document.documentElement.scrollTop >2100) {
                document.head.appendChild(styleButton2);
            } else if(document.documentElement.scrollTop > 1600) {
                document.head.appendChild(stylePostImg2);
            } else if(document.documentElement.scrollTop > 1500) {
                document.head.appendChild(styleButton1);
            } else if(document.documentElement.scrollTop > 1000) {
                document.head.appendChild(stylePostImg1);
            } else if(document.documentElement.scrollTop > 400) {
                document.head.appendChild(styleContent1);
            }
        }
    }
}
</script>