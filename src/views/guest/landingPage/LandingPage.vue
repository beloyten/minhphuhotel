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
                        <li @click="toListRoom()">Khách sạn</li>
                        <li @click="toDetail()">Hội nghị</li>
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
        <div class="gallery">
            <div class="gallery-title">
                <span>Minh Phu Gallery</span>
            </div>
            <div class="gallery-short-content">
                <span>Photos & Videos</span>
            </div>
            <div class="gallery-media">
                <div class="line-media">
                    <div class="line-img">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                    <div class="line-img">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                    <div class="line-img">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                </div>
                <div class="line-media">
                    <div class="line-img">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                    <div class="line-img">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                    <div class="line-img">
                        <img src="images/post-img.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <svg class="defs-only">
            <filter id="gold-sunset" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feColorMatrix type="matrix" values=".33 .33 .40 0 0
                .33 .20 .40 .25 0
                .20 .33 .33 .15 0
                0 0 0.8 0.8 0" in="SourceGraphic" result="colormatrix"/>
                <feComponentTransfer in="colormatrix" result="componentTransfer">
                <feFuncR type="table" tableValues="0.27 0.86 1"/>
                <feFuncG type="table" tableValues="0.01 0.31 0.95"/>
                <feFuncB type="table" tableValues="0.02 0.02 0.02"/>
                <feFuncA type="table" tableValues="0 1"/>
                </feComponentTransfer>
                <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
            </filter>
        </svg>
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
        },
        toDetail() {
            this.$router.push("/post-detail")
        },
        toListRoom() {
            this.$router.push("/list-room")
        }
    },
    mounted() {
        document.documentElement.scrollTop = 0
        console.log(document.documentElement.scrollTop)
        var styleContent1None = document.createElement('style');
        styleContent1None.innerHTML = `
        .content-1 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
         var stylePostImg1None = document.createElement('style');
        stylePostImg1None.innerHTML = `
        .post-image1 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var stylePostImg2None = document.createElement('style');
        stylePostImg2None.innerHTML = `
        .post-image2 {
               -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var stylePostImg3None = document.createElement('style');
        stylePostImg3None.innerHTML = `
        .post-image3 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleButton1None = document.createElement('style');
        styleButton1None.innerHTML = `
        .view-more1 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleButton2None = document.createElement('style');
        styleButton2None.innerHTML = `
        .view-more2 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleButton3None = document.createElement('style');
        styleButton3None.innerHTML = `
        .view-more3 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleServiceTitleNone = document.createElement('style');
        styleServiceTitleNone.innerHTML = `
        .service-title {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleServiceItemNone = document.createElement('style');
        styleServiceItemNone.innerHTML = `
        .service-list-item {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleFooterNone = document.createElement('style');
        styleFooterNone.innerHTML = `
        .footer-animation {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleFormBookingNone = document.createElement('style');
        styleFormBookingNone.innerHTML = `
        .form-booking {
               -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
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
                -webkit-animation: displayImg 1s; /* Chrome, Safari, Opera */
                animation: displayImg 1s;
                opacity: 1!important;
        }
        `;
        var stylePostImg2 = document.createElement('style');
        stylePostImg2.innerHTML = `
        .post-image2 {
                -webkit-animation: displayImg 1s; /* Chrome, Safari, Opera */
                animation: displayImg 1s;
                opacity: 1!important;
        }
        `;
        var stylePostImg3 = document.createElement('style');
        stylePostImg3.innerHTML = `
        .post-image3 {
                -webkit-animation: displayImg 1s; /* Chrome, Safari, Opera */
                animation: displayImg 1s;
                opacity: 1!important;
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
        var styleImgGallery = document.createElement('style');
        styleImgGallery.innerHTML = `
        .line-img {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        document.head.appendChild(styleContent1None);
        document.head.appendChild(stylePostImg1None);
        document.head.appendChild(stylePostImg2None);
        document.head.appendChild(stylePostImg3None);
        document.head.appendChild(styleButton1None);
        document.head.appendChild(styleButton2None);
        document.head.appendChild(styleButton3None);
        document.head.appendChild(styleServiceTitleNone);
        document.head.appendChild(styleServiceItemNone);
        document.head.appendChild(styleFooterNone);
        document.head.appendChild(styleFormBookingNone);
        window.onscroll = function(e) {
            console.log(document.documentElement.scrollTop);
            if(document.documentElement.scrollTop > 5500) {
                document.head.appendChild(styleFooter);
            } else if(document.documentElement.scrollTop > 4700) {
                document.head.appendChild(styleImgGallery);
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
            // var header = document.getElementById("header");
            // var logo = document.getElementById("logo");
            // var headingItem = document.getElementById("headingItem");
            // var booking = document.getElementById("booking");
            // var textBooking = document.getElementById("textBooking");
            // if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            //     header.style.justifyContent="flex-end";
            //     logo.style.width = "45%"
            //     logo.style.justifyContent="flex-start";
            //     headingItem.style.width = "40%"
            //     booking.style.width = "5%"
            //     textBooking.style.display = "none"
            // } else {
            //     header.style.justifyContent="center";
            //     logo.style.width = "20%"
            //     logo.style.justifyContent="center";
            //     headingItem.style.width = "60%"
            //     booking.style.width = "20%"
            //     textBooking.style.display = "inline"
            // }
        }
    }
}
</script>