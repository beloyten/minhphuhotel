<template>
<div class="landing-page">
    <div class="heading-landing-page" id="header">
        <div class="logo" id="logo" @click="scrollToTop()">
            <img src="images/logo.jpg" alt="">
        </div>
        <div class="heading-item" id="headingItem">
            <router-link to="/">Trang chủ</router-link>
            <router-link to="/list-room">Danh sách phòng</router-link>
            <router-link to="/contact">Liên hệ</router-link>
        </div>
        <div class="booking" id="booking" @click="toBooking()">
            <img src="images/icons/booking.svg" alt="">
            <a id="textBooking">Đặt lịch</a>
        </div>
    </div>
    <div class="body-landing-page">
        <el-carousel indicator-position="outside" class="landing-page-carousel">
            <el-carousel-item v-for="(item,index) in listAllBanner" :key="index">
                <div class="item">
                    <img :src="item.image" alt="">
                    <div class="item__content">{{item.title}}</div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <div class="content-title" id="contentTitle">
                {{preface.title}}
            </div>
            <div class="content-space">____________________________________________________</div>
            <div class="content-short" id="contentShort">
                {{preface.description}}
            </div>
        </div>
        <div class="post">
            <div class="post-content">
                <div class="post-content-detail">
                    <div class="post-text">
                        <p class="pre-title">{{listHomepageService[0] && listHomepageService[0].brief ? listHomepageService[0].brief : ''}}</p>
                        <p class="title-post">{{listHomepageService[0] && listHomepageService[0].title ? listHomepageService[0].title : ''}}</p>
                        <div class="post-content-short">
                            <p>{{listHomepageService[0] && listHomepageService[0].shortDescription ? listHomepageService[0].shortDescription: ''}}</p>
                        </div>
                        <button class="view-more1" id="viewMore1" @click="viewMore()">Xem thêm</button>
                    </div>
                    <div class="post-image1" id="postImage1">
                        <img :src="listHomepageService[0] && listHomepageService[0].coverImg ?listHomepageService[0].coverImg : ''" alt=""/>
                    </div>
                </div>
                <div class="post-content-detail-reverse">
                    <div class="post-image2" id="postImage2">
                        <img :src="listHomepageService[0] && listHomepageService[1].coverImg ?listHomepageService[1].coverImg : ''" alt=""/>
                    </div>
                    <div class="post-text">
                        <p class="pre-title">{{listHomepageService[1] && listHomepageService[1].brief ? listHomepageService[1].brief : ''}}</p>
                        <p class="title-post">{{listHomepageService[1] && listHomepageService[1].title ? listHomepageService[1].title : ''}}</p>
                        <div class="post-content-short">
                            <p>{{listHomepageService[1] && listHomepageService[1].shortDescription ? listHomepageService[1].shortDescription : ''}}</p>
                        </div>
                        <button class="view-more2" id="viewMore2" @click="viewMore()">Xem thêm</button>
                    </div>
                </div>
                <div class="post-content-detail">
                    <div class="post-text">
                        <p class="pre-title">{{listHomepageService[2] && listHomepageService[2].brief ? listHomepageService[2].brief : ''}}</p>
                        <p class="title-post">{{listHomepageService[2] && listHomepageService[2].title ? listHomepageService[2].title : ''}}</p>
                        <div class="post-content-short">
                            <p>{{listHomepageService[2] && listHomepageService[2].shortDescription ? listHomepageService[2].shortDescription : ''}}</p>
                        </div>
                        <button class="view-more3" id="viewMore3" @click="viewMore()">Xem thêm</button>
                    </div>
                    <div class="post-image3" id="postImage3">
                        <img :src="listHomepageService[2] && listHomepageService[2].coverImg ?listHomepageService[2].coverImg : ''" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="service-list">
            <div class="service-list-content">
                <div class="service-title" id="serviceTitle">DANH SÁCH DỊCH VỤ</div>
                <div class="service-list-item" id="serviceListItem">
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
        <el-carousel indicator-position="none" :interval="5000" height="52em">
            <el-carousel-item v-for="(item,index) in listAllEvent" :key="index">
                <div class="event">
                    <img :src="item.coverImg"/>
                    <div class="event-text">{{item.title}}</div>
                    <router-link to="post-detail">Xem thêm</router-link>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="form-booking" id="formBooking">
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
                            <option>Tiệc cưới</option>
                            <option>Hội nghị</option>
                        </select>
                    </div>
                    <div class="field">
                        <label for="datetime">Ngày đặt</label>
                        <el-date-picker
                            id="datetime"
                            v-model="dateBooking"
                            type="datetime"
                            placeholder="Select date and time">
                        </el-date-picker>
                    </div>
                </div>
                <div class="submit-booking">
                    Submit
                </div>
            </div>
        </div>
        <div class="gallery">
            <div class="gallery-title" id="galleryTitle">
                <span>Minh Phu Gallery</span>
            </div>
            <div class="gallery-short-content">
                <span>Photos & Videos</span>
            </div>
            <div class="gallery-media">
                <div class="line-one1">
                    <div class="line-media1">
                        <div class="line-img1" id="lineImg1">
                            <img :src="listAllPhotoGallery[0].img" alt=""/>
                            <img class="img-logo" src="images/logo-white.png" alt=""/>
                        </div>
                        <div class="line-img2" id="lineImg2">
                            <img :src="listAllPhotoGallery[1].img" alt=""/>
                            <img class="img-logo" src="images/logo-white.png" alt=""/>
                        </div>
                    </div>
                    <div class="line-media-one1">
                        <div class="line-img3" id="lineImg3">
                            <img :src="listAllPhotoGallery[2].img" alt=""/>
                            <img class="img-logo" src="images/logo-white.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="line-one1">
                    <div class="line-media-one2">
                        <div class="line-img4" id="lineImg4">
                            <img :src="listAllPhotoGallery[3].img" alt=""/>
                            <img class="img-logo" src="images/logo-white.png" alt=""/>
                        </div>
                    </div>
                    <div class="line-media2">
                        <div class="line-img5" id="lineImg5">
                            <img :src="listAllPhotoGallery[4].img" alt=""/>
                            <img class="img-logo" src="images/logo-white.png" alt=""/>
                        </div>
                        <div class="line-img6" id="lineImg6">
                            <img :src="listAllPhotoGallery[5].img" alt=""/>
                            <img class="img-logo" src="images/logo-white.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg class="defs-only">
            <filter id="gold-sunset" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feColorMatrix type="matrix" values=".33 .33 .33 0 0
                .33 .20 .20 .20 0
                .33 .33 .33 0 0
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
    <div class="footer-hotel">
        <div class="footer-animation" id="footerAnimation">
            <div class="footer-logo" @click="scrollToTop()">
                <img src="images/logo-white.png" alt="">
            </div>
            <div class="footer-content">
                <h2>Contact Us</h2>
                <div class="line"></div>
                <h3>Tell: {{contact.phone}}</h3>
                <h3>Mail: {{contact.email}}</h3>
                <div class="icon-contact">
                    <div class="icon icon-fb">
                        <img src="images/icons/fb.png" alt="">
                    </div>
                    <div class="icon icon-instagram">
                        <img src="images/icons/instagram.png" alt="">
                    </div>
                    <div class="icon icon-youtube">
                        <img src="images/icons/youtube.png" alt="">
                    </div>
                </div>
            </div>
            <div class="footer-content">
                <h2>Service</h2>
                <div class="line line-small"></div>
                <h3>Sport Center</h3>
                <h3>Tennist & Squash</h3>
                <h3>Tennist & Squash</h3>
            </div>
            <div class="footer-content">
                <h2>Address</h2>
                <div class="line line-small"></div>
                <h3 class="address">{{contact.address}}</h3>
                <div class="back-to-top" @click="scrollToTop()">
                    <img src="images/icons/back-to-top.png" alt="">
                </div>
            </div>
        </div>
    </div>
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
            dateBooking: '',
            down: false,
            preface: {
                title: '',
                description: ''
            },
            contact: {
                email: '',
                facebook: '',
                instagram: '',
                phone: '',
                youtube: '',
                address: ''
            }
        }
    },
    computed: {
        listHomepageService() {
            return this.$store.getters.listHomepageService
        },
        listAllBanner () {
            return this.$store.getters.listAllBanner
        },
        listAllBanner () {
            return this.$store.getters.listAllBanner
        },
        listAllService () {
            return this.$store.getters.listAllService
        },
        listAllEvent () {
            return this.$store.getters.listAllEvent
        },
        listAllPhotoGallery () {
            return this.$store.getters.listAllPhotoGallery
        }
    },
    methods: {
        async fetch() {
            await this.$store.dispatch('getAllHomepageService')
            await this.$store.dispatch('getAllBanner')
            await this.$store.dispatch('getAllService')
            await this.$store.dispatch('getAllEvent')
            await this.$store.dispatch('getAllPhotoInGallery')
            await this.$store.dispatch('getPreface').then(rs => {
                if(rs.status === 'success') {
                    this.preface = rs.data
                }
            })
            await this.$store.dispatch('getContact').then(rs => {
                if(rs.status === 'success') {
                    this.contact = rs.data
                }
            })
        },
        viewMore() {
            this.$router.push("/post-detail")
        },
        toDetail() {
            this.$router.push("/post-detail")
        },
        toListRoom() {
            this.$router.push("/list-room")
        },
        toHomepage() {
            this.$router.push("/")
        },
        toBooking() {
            var styleFormBooking = document.createElement('style');
            styleFormBooking.innerHTML = `
            .form-booking {
                    -webkit-animation: displayForm 1s; /* Chrome, Safari, Opera */
                    animation: displayForm 1s;
                    opacity: 1!important;
            }
            `;
            var stylePostImg2 = document.createElement('style');
            stylePostImg2.innerHTML = `
            .post-image2 {
                    -webkit-animation: displayImg 1s linear forwards; /* Chrome, Safari, Opera */
                    animation: displayImg 1s linear forwards;
            }
            `;
            var stylePostImg3 = document.createElement('style');
            stylePostImg3.innerHTML = `
            .post-image3 {
                    -webkit-animation: displayImg 1s linear forwards; /* Chrome, Safari, Opera */
                    animation: displayImg 1s linear forwards;
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
            var styleContentTitle = document.createElement('style');
            styleContentTitle.innerHTML = `
            .content-title {
                    -webkit-animation: displayTitleBottom 1s; /* Chrome, Safari, Opera */
                    animation: displayTitleBottom 1s;
                    opacity: 1!important;
            }
            `;
            var styleContentBottom = document.createElement('style');
            styleContentBottom.innerHTML = `
            .content-short {
                    -webkit-animation: displayTitleBottom 1s; /* Chrome, Safari, Opera */
                    animation: displayTitleBottom 1s;
                    opacity: 1!important;
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
            var stylePostImg1 = document.createElement('style');
            stylePostImg1.innerHTML = `
            .post-image1 {
                    -webkit-animation: displayImg 1s linear forwards; /* Chrome, Safari, Opera */
                    animation: displayImg 1s linear forwards;
            }
            `;
            var styleHeaderLogo = document.createElement('style');
            styleHeaderLogo.innerHTML = `
            .logo {
                    -webkit-animation: changeHeaderLogo 0.2s linear forwards; /* Chrome, Safari, Opera */
                    animation: changeHeaderLogo 0.2s linear forwards;
            }
            `;
            var styleHeader = document.createElement('style');
            styleHeader.innerHTML = `
            .heading-landing-page {
                    justify-content: flex-end;
            }
            `;
            var styleHeaderItem = document.createElement('style');
            styleHeaderItem.innerHTML = `
            .heading-item {
                    -webkit-animation: changeHeaderItem 0.2s linear forwards; /* Chrome, Safari, Opera */
                    animation: changeHeaderItem 0.2s linear forwards;
            }
            `;
            var styleHeaderBooking = document.createElement('style');
            styleHeaderBooking.innerHTML = `
            .booking {
                    -webkit-animation: changeHeaderBooking 0.2s linear forwards; /* Chrome, Safari, Opera */
                    animation: changeHeaderBooking 0.2s linear forwards;
            }
            `;
            var styleHeaderBookingLabel = document.createElement('style');
            styleHeaderBookingLabel.innerHTML = `
            #textBooking {
                    display: none !important;
            }
            `;
            var styleItemContentHide = document.createElement('style');
            styleItemContentHide.innerHTML = `
            .item__content {
                    opacity: 0!important;
            }
            `;
            var ele = document.getElementById('formBooking');
            var top = 0;
            var left = 0;
        
            while(ele.tagName != "BODY") {
                top += ele.offsetTop;
                left += ele.offsetLeft;
                ele = ele.offsetParent;
            }
            document.head.appendChild(stylePostImg1);
            document.head.appendChild(styleHeaderLogo);
            document.head.appendChild(styleHeaderItem);
            document.head.appendChild(styleHeaderBooking);
            document.head.appendChild(styleHeaderBookingLabel);
            document.head.appendChild(styleHeader);
            document.head.appendChild(styleFormBooking);
            document.head.appendChild(styleServiceItem);
            document.head.appendChild(styleServiceTitle);
            document.head.appendChild(styleButton3);
            document.head.appendChild(stylePostImg3);
            document.head.appendChild(styleButton2);
            document.head.appendChild(stylePostImg2);
            document.head.appendChild(styleButton1);
            document.head.appendChild(styleContentBottom);
            document.head.appendChild(styleContentTitle);
            document.head.appendChild(styleItemContentHide);
            window.scrollTo(left, top-450)
        },
        scrollToTop() {
            var styleHeaderLogoNone = document.createElement('style');
            styleHeaderLogoNone.innerHTML = `
            .logo {
                    -webkit-animation: changeHeaderLogoReverse 0.2s linear forwards; /* Chrome, Safari, Opera */
                    animation: changeHeaderLogoReverse 0.2s linear forwards;
            }
            `;
            var styleHeaderItemNone = document.createElement('style');
            styleHeaderItemNone.innerHTML = `
            .heading-item {
                    -webkit-animation: changeHeaderItemReverse 0.2s linear forwards; /* Chrome, Safari, Opera */
                    animation: changeHeaderItemReverse 0.2s linear forwards;
            }
            `;
            var styleHeaderBookingNone = document.createElement('style');
            styleHeaderBookingNone.innerHTML = `
            .booking {
                    -webkit-animation: changeHeaderBookingReverse 0.2s linear forwards; /* Chrome, Safari, Opera */
                    animation: changeHeaderBookingReverse 0.2s linear forwards;
            }
            `;
            var styleHeaderBookingLabelNone = document.createElement('style');
            styleHeaderBookingLabelNone.innerHTML = `
            #textBooking {
                    display: inline!important;
            }
            `;
            var styleHeaderNone = document.createElement('style');
            styleHeaderNone.innerHTML = `
            .heading-landing-page {
                    justify-content: none;
            }
            `;
            var styleItemContentDisplay = document.createElement('style');
            styleItemContentDisplay.innerHTML = `
            .item__content {
                    opacity: 1!important;
            }
            `;
            window.scrollTo(0,0)
            if(document.documentElement.scrollTop !== 0 && !this.down) {
                document.head.appendChild(styleHeaderLogoNone);
                document.head.appendChild(styleHeaderItemNone);
                document.head.appendChild(styleHeaderBookingNone);
                document.head.appendChild(styleHeaderBookingLabelNone);
                document.head.appendChild(styleHeaderNone);
                document.head.appendChild(styleItemContentDisplay);
                this.down = false;
            }
        }
    },
    mounted() {
        document.documentElement.scrollTop = 0
        var styleHeaderLogoNone = document.createElement('style');
        styleHeaderLogoNone.innerHTML = `
        .logo {
                -webkit-animation: changeHeaderLogoReverse 0.2s linear forwards; /* Chrome, Safari, Opera */
                animation: changeHeaderLogoReverse 0.2s linear forwards;
        }
        `;
        var styleHeaderItemNone = document.createElement('style');
        styleHeaderItemNone.innerHTML = `
        .heading-item {
                -webkit-animation: changeHeaderItemReverse 0.2s linear forwards; /* Chrome, Safari, Opera */
                animation: changeHeaderItemReverse 0.2s linear forwards;
        }
        `;
        var styleHeaderBookingNone = document.createElement('style');
        styleHeaderBookingNone.innerHTML = `
        .booking {
                -webkit-animation: changeHeaderBookingReverse 0.2s linear forwards; /* Chrome, Safari, Opera */
                animation: changeHeaderBookingReverse 0.2s linear forwards;
        }
        `;
        var styleHeaderBookingLabelNone = document.createElement('style');
        styleHeaderBookingLabelNone.innerHTML = `
        #textBooking {
                display: inline!important;
        }
        `;
        var styleHeaderNone = document.createElement('style');
        styleHeaderNone.innerHTML = `
        .heading-landing-page {
                justify-content: none;
        }
        `;
        var styleContentTitleNone = document.createElement('style');
        styleContentTitleNone.innerHTML = `
        .content-title {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
                opacity: 0!important;
        }
        `;
        var styleContentBottomNone = document.createElement('style');
        styleContentBottomNone.innerHTML = `
        .content-short {
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
        }
        `;
        var stylePostImg2None = document.createElement('style');
        stylePostImg2None.innerHTML = `
        .post-image2 {
               -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
        }
        `;
        var stylePostImg3None = document.createElement('style');
        stylePostImg3None.innerHTML = `
        .post-image3 {
                -webkit-animation: none; /* Chrome, Safari, Opera */
                animation: none;
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
        var styleContentTitle = document.createElement('style');
        styleContentTitle.innerHTML = `
        .content-title {
                -webkit-animation: displayTitleBottom 1s; /* Chrome, Safari, Opera */
                animation: displayTitleBottom 1s;
                opacity: 1!important;
        }
        `;
        var styleContentBottom = document.createElement('style');
        styleContentBottom.innerHTML = `
        .content-short {
                -webkit-animation: displayContentBottom 1s; /* Chrome, Safari, Opera */
                animation: displayContentBottom 1s;
                opacity: 1!important;
        }
        `;
        var stylePostImg1 = document.createElement('style');
        stylePostImg1.innerHTML = `
        .post-image1 {
                -webkit-animation: displayImg 1s linear forwards; /* Chrome, Safari, Opera */
                animation: displayImg 1s linear forwards;
        }
        `;
        var stylePostImg2 = document.createElement('style');
        stylePostImg2.innerHTML = `
        .post-image2 {
                -webkit-animation: displayImg 1s linear forwards; /* Chrome, Safari, Opera */
                animation: displayImg 1s linear forwards;
        }
        `;
        var stylePostImg3 = document.createElement('style');
        stylePostImg3.innerHTML = `
        .post-image3 {
                -webkit-animation: displayImg 1s linear forwards; /* Chrome, Safari, Opera */
                animation: displayImg 1s linear forwards;
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
        var styleImgGallery1 = document.createElement('style');
        styleImgGallery1.innerHTML = `
        .line-img1 {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        var styleImgGallery2 = document.createElement('style');
        styleImgGallery2.innerHTML = `
        .line-img2 {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        var styleImgGallery3 = document.createElement('style');
        styleImgGallery3.innerHTML = `
        .line-img3 {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        var styleImgGallery4 = document.createElement('style');
        styleImgGallery4.innerHTML = `
        .line-img4 {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        var styleImgGallery5 = document.createElement('style');
        styleImgGallery5.innerHTML = `
        .line-img5 {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        var styleImgGallery6 = document.createElement('style');
        styleImgGallery6.innerHTML = `
        .line-img6 {
                -webkit-animation: displayImgGallery 1s; /* Chrome, Safari, Opera */
                animation: displayImgGallery 1s;
                opacity: 1!important;
        }
        `;
        var styleHeaderLogo = document.createElement('style');
        styleHeaderLogo.innerHTML = `
        .logo {
                -webkit-animation: changeHeaderLogo 0.2s linear forwards; /* Chrome, Safari, Opera */
                animation: changeHeaderLogo 0.2s linear forwards;
        }
        `;
        var styleHeader = document.createElement('style');
        styleHeader.innerHTML = `
        .heading-landing-page {
                justify-content: flex-end;
        }
        `;
        var styleHeaderItem = document.createElement('style');
        styleHeaderItem.innerHTML = `
        .heading-item {
                -webkit-animation: changeHeaderItem 0.2s linear forwards; /* Chrome, Safari, Opera */
                animation: changeHeaderItem 0.2s linear forwards;
        }
        `;
        var styleHeaderBooking = document.createElement('style');
        styleHeaderBooking.innerHTML = `
        .booking {
                -webkit-animation: changeHeaderBooking 0.2s linear forwards; /* Chrome, Safari, Opera */
                animation: changeHeaderBooking 0.2s linear forwards;
        }
        `;
        var styleHeaderBookingLabel = document.createElement('style');
        styleHeaderBookingLabel.innerHTML = `
        #textBooking {
                display: none !important;
        }
        `;
        var styleItemContentHide = document.createElement('style');
        styleItemContentHide.innerHTML = `
        .item__content {
                opacity: 0!important;
        }
        `;
        var styleItemContentDisplay = document.createElement('style');
        styleItemContentDisplay.innerHTML = `
        .item__content {
                opacity: 1!important;
        }
        `;
        document.head.appendChild(styleContentTitleNone);
        document.head.appendChild(styleContentBottomNone);
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
        let vm = this
        var scrollableElement = document.body; //document.getElementById('scrollableElement');
        scrollableElement.addEventListener('wheel', checkScrollDirection);

        function checkScrollDirection(event) {
            if (checkScrollDirectionIsUp(event)) {
                window.onscroll = function(event) {
                    console.log('up',document.documentElement.scrollTop)
                    if(document.documentElement.scrollTop <= 200) {
                        document.head.appendChild(styleItemContentDisplay);
                    }
                    if(document.documentElement.scrollTop <= 900) {
                        document.head.appendChild(styleHeaderLogoNone);
                        document.head.appendChild(styleHeaderItemNone);
                        document.head.appendChild(styleHeaderBookingNone);
                        document.head.appendChild(styleHeaderBookingLabelNone);
                        document.head.appendChild(styleHeaderNone);
                    }
                }
            } else {
                window.onscroll = function(event) {
                    console.log('down',document.documentElement.scrollTop)
                    if(document.documentElement.scrollTop > 5150) {
                        document.head.appendChild(styleFooter);
                    } else if(document.documentElement.scrollTop > 4400) {
                        document.head.appendChild(styleImgGallery1);
                        document.head.appendChild(styleImgGallery2);
                        document.head.appendChild(styleImgGallery3);
                        document.head.appendChild(styleImgGallery4);
                        document.head.appendChild(styleImgGallery5);
                        document.head.appendChild(styleImgGallery6);
                    } else if(document.documentElement.scrollTop > 3800) {
                        document.head.appendChild(styleFormBooking);
                    } else if(document.documentElement.scrollTop > 2950) {
                        document.head.appendChild(styleServiceItem);
                    } else if(document.documentElement.scrollTop > 2700) {
                        document.head.appendChild(styleServiceTitle);
                    } else if(document.documentElement.scrollTop > 2100) {
                        document.head.appendChild(styleButton3);
                    } else if(document.documentElement.scrollTop > 1900) {
                        document.head.appendChild(stylePostImg3);
                    } else if(document.documentElement.scrollTop > 1600) {
                        document.head.appendChild(styleButton2);
                    } else if(document.documentElement.scrollTop > 1400) {
                        document.head.appendChild(stylePostImg2);
                    } else if(document.documentElement.scrollTop > 1100) {
                        document.head.appendChild(styleButton1);
                    } else if(document.documentElement.scrollTop > 900) {
                        vm.down = true
                        document.head.appendChild(stylePostImg1);
                        document.head.appendChild(styleHeaderLogo);
                        document.head.appendChild(styleHeaderItem);
                        document.head.appendChild(styleHeaderBooking);
                        document.head.appendChild(styleHeaderBookingLabel);
                        document.head.appendChild(styleHeader);
                    } else {
                        if(vm.down) {
                            document.head.appendChild(styleHeaderLogoNone);
                            document.head.appendChild(styleHeaderItemNone);
                            document.head.appendChild(styleHeaderBookingNone);
                            document.head.appendChild(styleHeaderBookingLabelNone);
                            document.head.appendChild(styleHeaderNone);
                            document.head.appendChild(styleItemContentDisplay);
                        }
                        if(document.documentElement.scrollTop > 400) {
                            document.head.appendChild(styleContentBottom);
                        } else if(document.documentElement.scrollTop > 250) {
                            document.head.appendChild(styleContentTitle);
                        } else if(document.documentElement.scrollTop > 200) {
                            document.head.appendChild(styleItemContentHide);
                        }
                    }
                }
            }
        }

        function checkScrollDirectionIsUp(event) {
            if (event.wheelDelta) {
                return event.wheelDelta > 0;
            }
            return event.deltaY < 0;
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
    },
    async created() {
        if(this.$store.getters.booking) {
            this.toBooking()
        }
        this.$store.dispatch('setBooking', false)
        await this.fetch()
    }
}
</script>