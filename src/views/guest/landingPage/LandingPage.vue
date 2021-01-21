<template>
<div class="landing-page" :class='{loading: loading}'>
    <div class="heading-landing-page" id="header">
        <div class="logo" id="logo" @click="scrollToTop()">
            <img src="images/logo.jpg" alt="">
        </div>
        <div class="heading-item" id="headingItem">
            <router-link to="/" :class="{active_item: activeLink('Trang chủ')}">Trang chủ</router-link>
            <router-link to="/list-room" :class="{active_item: activeLink('Danh sách phòng')}">Danh sách phòng</router-link>
            <router-link to="/contact" :class="{active_item: activeLink('Liên hệ')}">Liên hệ</router-link>
        </div>
        <div class="booking" id="booking" @click="toBooking()">
            <img src="images/icons/booking.svg" alt="">
            <a id="textBooking">Đặt lịch</a>
        </div>
    </div>
    <div class="heading-mobile">
        <div class="booking-mobile" id="booking" @click="toBooking()">
            <img src="images/icons/calender-white.png" alt="">
            <a>Đặt lịch</a>
        </div>
        <div class="logo-mobile" id="logo">
            <div class="logo-img" @click="scrollToTop()">
                <img src="images/logo.jpg" alt="">
            </div>
            <div class="three-dot" @click="viewMenu()">
                <img src="images/icons/three-dot.png" alt="">
            </div>
        </div>
        <el-dialog :visible.sync="openDialogMenu" :fullscreen="true" class="menu">
            <div class="menu-mobile">
                <router-link to="/" @click.native="openDialogMenu = false" :class="{active_item: activeLink('Trang chủ')}">Trang chủ</router-link>
                <router-link to="/list-room" @click.native="openDialogMenu = false" :class="{active_item: activeLink('Danh sách phòng')}">Danh sách phòng</router-link>
                <router-link to="/contact" @click.native="openDialogMenu = false" :class="{active_item: activeLink('Liên hệ')}">Liên hệ</router-link>
            </div>
        </el-dialog>
    </div>
    <div class="body-landing-page">
        <el-carousel indicator-position="outside" class="landing-page-carousel">
            <el-carousel-item v-for="(item,index) in listAllBanner" :key="index">
                <div class="item">
                    <img :src="item.image? item.image : ''" alt=""/>
                    <div class="item__content">{{item.title}}</div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <div class="content-title" id="contentTitle"
                data-aos="content-title-animation"
            >
                {{preface.title}}
            </div>
            <div class="content-space">__________________________________________________________________________________</div>
            <div class="content-space-short">____________________________________</div>
            <div class="content-short" id="contentShort"
                data-aos="content-short-animation">
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
                        <button data-aos="view-more1-animation" class="view-more1" id="viewMore1" @click="viewMore(listHomepageService[0].id)">Xem thêm</button>
                    </div>
                    <div class="post-image1" id="postImage1" data-aos="post-image1-animation">
                        <img :src="listHomepageService[0] && listHomepageService[0].coverImg ?listHomepageService[0].coverImg : ''" alt=""/>
                    </div>
                </div>
                <div class="post-content-detail-reverse">
                    <div class="post-image2" id="postImage2" data-aos="post-image1-animation">
                        <img :src="listHomepageService[0] && listHomepageService[1].coverImg ?listHomepageService[1].coverImg : ''" alt=""/>
                    </div>
                    <div class="post-text">
                        <p class="pre-title">{{listHomepageService[1] && listHomepageService[1].brief ? listHomepageService[1].brief : ''}}</p>
                        <p class="title-post">{{listHomepageService[1] && listHomepageService[1].title ? listHomepageService[1].title : ''}}</p>
                        <div class="post-content-short">
                            <p>{{listHomepageService[1] && listHomepageService[1].shortDescription ? listHomepageService[1].shortDescription : ''}}</p>
                        </div>
                        <button class="view-more2" data-aos="view-more1-animation" id="viewMore2" @click="viewMore(listHomepageService[1].id)">Xem thêm</button>
                    </div>
                </div>
                <div class="post-content-detail">
                    <div class="post-text">
                        <p class="pre-title">{{listHomepageService[2] && listHomepageService[2].brief ? listHomepageService[2].brief : ''}}</p>
                        <p class="title-post">{{listHomepageService[2] && listHomepageService[2].title ? listHomepageService[2].title : ''}}</p>
                        <div class="post-content-short">
                            <p>{{listHomepageService[2] && listHomepageService[2].shortDescription ? listHomepageService[2].shortDescription : ''}}</p>
                        </div>
                        <button class="view-more3" data-aos="view-more1-animation" id="viewMore3" @click="viewMore(listHomepageService[2].id)">Xem thêm</button>
                    </div>
                    <div class="post-image3" id="postImage3" data-aos="post-image1-animation">
                        <img :src="listHomepageService[2] && listHomepageService[2].coverImg ?listHomepageService[2].coverImg : ''" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="service-list">
            <div class="service-list-content">
                <div class="service-title" id="serviceTitle" data-aos="service-title-animation">DANH SÁCH DỊCH VỤ</div>
                <div class="service-list-item" id="serviceListItem" data-aos="service-item-animation">
                    <div class="all-service" v-for="item in getNumberRow" :key="item">
                        <div class="service-item" @click="viewPostDetail(listAllService[item*3-3])">
                            <div class="dot-before" v-if="listAllService[item*3-3]"></div>
                            <a>{{listAllService[item*3-3] && listAllService[item*3-3].name ? listAllService[item*3-3].name : ''}}</a>
                        </div> 
                        <div class="service-item" @click="viewPostDetail(listAllService[item*3-2])">
                            <div class="dot-before" v-if="listAllService[item*3-2]"></div>
                            <a>{{listAllService[item*3-2] && listAllService[item*3-2].name ? listAllService[item*3-2].name : ''}}</a>
                        </div> 
                        <div class="service-item" @click="viewPostDetail(listAllService[item*3-1])">
                            <div class="dot-before" v-if="listAllService[item*3-1]"></div>
                            <a>{{listAllService[item*3-1] && listAllService[item*3-1].name ? listAllService[item*3-1].name : ''}}</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <el-carousel indicator-position="none" :interval="5000" class="event-carousel">
            <el-carousel-item v-for="(item,index) in listAllEvent" :key="index">
                <div class="event">
                    <img :src="item.coverImg ? item.coverImg : ''"/>
                    <div class="event-text">{{item.title}}</div>
                    <router-link :to="'/post-detail?id='+item.id">Xem thêm</router-link>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="form-booking" data-aos="form-booking-animation" 
            data-aos-offset="-10" id="formBooking" :class='{loading: loading}'>
            <div class="form-booking-detail">
                <div class="booking-field">
                    <div class="field">
                        <label for="fullname">Họ & tên</label>
                        <input type="text" id="fullname" v-model="formBooking.fullName" :class="{error_input_normal: errorForm.fullName}"/>
                    </div>
                    <div class="field">
                        <label for="phone">Số điện thoại</label>
                        <input type="text" id="phone" v-model="formBooking.phoneNumber" :class="{error_input_normal: errorForm.phoneNumber}"/>
                    </div>
                    <div class="field">
                        <label for="service">Dịch vụ</label>
                        <el-select id="service" v-model="formBooking.serviceName" placeholder="Dịch vụ" :class="{error_input : errorForm.serviceName}">
                            <el-option
                                v-for="(item, index) in listAllService"
                                :key="index"
                                :label="item.name"
                                :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="field">
                        <label for="datetime">Ngày đặt</label>
                        <el-date-picker
                            :class="{error_date: errorForm.date}"
                            id="datetime"
                            v-model="formBooking.date"
                            type="datetime"
                            placeholder="Select date and time">
                        </el-date-picker>
                    </div>
                </div>
                <div class="submit-booking" @click="submitBooking()">
                    Submit
                </div>
            </div>
        </div>
        <div class="gallery">
            <div class="gallery-container">
                <div class="gallery-title" id="galleryTitle" data-aos="gallery-title-animation">
                    <span>Minh Phu Gallery</span>
                </div>
                <div class="gallery-short-content">
                    <span>Photos & Videos</span>
                </div>
                <div class="gallery-media">
                    <div class="line-one1">
                        <div class="line-media1">
                            <div class="line-img1" id="lineImg1" data-aos="gallery-image-animation">
                                <img :src="listAllPhotoGallery[0] && listAllPhotoGallery[0].img ? listAllPhotoGallery[0].img : ''" alt="" @click="viewImage(0)"/>
                                <img class="img-logo" src="images/logo-white.png" alt=""/>
                            </div>
                            <div class="line-img2" id="lineImg2" data-aos="gallery-image-animation">
                                <img :src="listAllPhotoGallery[1] && listAllPhotoGallery[1].img ? listAllPhotoGallery[1].img : ''" alt="" @click="viewImage(1)"/>
                                <img class="img-logo" src="images/logo-white.png" alt=""/>
                            </div>
                        </div>
                        <div class="line-media-one1">
                            <div class="line-img3" id="lineImg3" data-aos="gallery-image-animation">
                                <img :src="listAllPhotoGallery[2] && listAllPhotoGallery[2].img ? listAllPhotoGallery[2].img : ''" alt="" @click="viewImage(2)"/>
                                <img class="img-logo" src="images/logo-white.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="line-one1">
                        <div class="line-media-one2">
                            <div class="line-img4" id="lineImg4" data-aos="gallery-image-animation">
                                <img :src="listAllPhotoGallery[3] && listAllPhotoGallery[3].img ? listAllPhotoGallery[3].img : ''" alt="" @click="viewImage(3)"/>
                                <img class="img-logo" src="images/logo-white.png" alt=""/>
                            </div>
                        </div>
                        <div class="line-media2">
                            <div class="line-img5" id="lineImg5" data-aos="gallery-image-animation">
                                <img :src="listAllPhotoGallery[4] && listAllPhotoGallery[4].img ? listAllPhotoGallery[4].img : ''" alt="" @click="viewImage(4)"/>
                                <img class="img-logo" src="images/logo-white.png" alt=""/>
                            </div>
                            <div class="line-img6" id="lineImg6" data-aos="gallery-image-animation">
                                <img :src="listAllPhotoGallery[5] && listAllPhotoGallery[5].img ? listAllPhotoGallery[5].img : ''" alt="" @click="viewImage(5)"/>
                                <img class="img-logo" src="images/logo-white.png" alt=""/>
                            </div>
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
        <div class="footer-animation" id="footerAnimation" data-aos="footer-animation">
            <div class="footer-logo" @click="scrollToTop()">
                <img src="images/logo-white.png" alt="">
            </div>
            <div class="footer-content">
                <h2>Contact Us</h2>
                <div class="line"></div>
                <h3>Tell: {{contact.phone}}</h3>
                <h3>Mail: {{contact.email}}</h3>
                <div class="icon-contact">
                    <div class="icon icon-fb" @click="toFacebook()">
                        <img src="images/icons/fb.png" alt="">
                    </div>
                    <div class="icon icon-instagram" @click="toInstagram()">
                        <img src="images/icons/instagram.png" alt="">
                    </div>
                    <div class="icon icon-youtube" @click="toYoutube()">
                        <img src="images/icons/youtube.png" alt="">
                    </div>
                </div>
            </div>
            <div class="footer-content">
                <h2>Service</h2>
                <div class="line line-small"></div>
                <div class="footer-service">
                    <a @click.prevent="viewPostDetail(listHomepageService[0])">{{listHomepageService[0] && listHomepageService[0].name ? listHomepageService[0].name : ''}}</a>
                    <a @click.prevent="viewPostDetail(listHomepageService[1])">{{listHomepageService[1] && listHomepageService[1].name ? listHomepageService[1].name : ''}}</a>
                    <a @click.prevent="viewPostDetail(listHomepageService[2])">{{listHomepageService[2] && listHomepageService[2].name ? listHomepageService[2].name : ''}}</a>
                </div>
            </div>
            <div class="footer-content">
                <h2>Address</h2>
                <div class="line line-small"></div>
                <h3 class="address">{{contact.address}}</h3>
                <div class="back-to-top" @click="scrollToTop()">
                    <img src="images/icons/back-top.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <PreviewImage v-if="openDialogView" :openDialogView.sync="openDialogView" :index="index"/>
</div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer"
import UtilService from "@/utils/UtilService"
import PreviewImage from "../components/PreviewImage"

export default {
    components: {
        Header,
        Footer,
        PreviewImage
    },
    data () {
        return {
            down: false,
            up: false,
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
            },
            formBooking: {
                date: null,
                fullName: '',
                phoneNumber: '',
                serviceName: null
            },
            errorForm: {
                date: false,
                fullName: false,
                phoneNumber: false,
                serviceName: false
            },
            getNumberRow: 0,
            loading: false,
            openDialogView: false,
            index: 0,
            openDialogMenu: false
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
        },
        isValidFullName() {
            return this.formBooking.fullName.trim()
        },
        isValidPhone() {
            return this.formBooking.phoneNumber.trim() && UtilService.checkValidatePhone(this.formBooking.phoneNumber)
        },
        isValidService() {
            return this.formBooking.serviceName
        },
        isValidDate() {
            return this.formBooking.date
        },
        isValidForm() {
            return this.isValidFullName && this.isValidPhone && this.isValidService && this.isValidDate
        }
    },
    methods: {
        async fetch() {
            this.loading = true
            await this.$store.dispatch('getAllBanner')
            await this.$store.dispatch('getAllHomepageService')
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
            if(this.listAllService.length % 3 === 0) {
                this.getNumberRow = Math.floor(this.listAllService.length / 3)
            } else {
                this.getNumberRow = Math.floor(this.listAllService.length / 3) + 1
            }
            await setTimeout(() => {
                this.loading = false
            })
        },
        viewMenu() {
            this.openDialogMenu = true
        },
        viewPostDetail(item) {
            if(item.id !== 1) {
                this.$router.push("/post-detail?id="+item.id)
            } else {
                this.$router.push("/list-room")
            }
        },
        toFacebook() {
            if(this.contact.facebook.slice(0,7) !== "https://") {
                window.open("https://"+this.contact.facebook);
            } else {
                window.open(this.contact.facebook);
            }
        },
        toInstagram() {
            if(this.contact.insta.slice(0,7) !== "https://") {
                window.open("https://"+this.contact.insta);
            } else {
                window.open(this.contact.insta);
            }
        },
        toYoutube() {
            if(this.contact.youtube.slice(0,7) !== "https://") {
                window.open("https://"+this.youtube.facebook);
            } else {
                window.open(this.youtube.facebook);
            }
        },
        viewImage(number) {
            this.index = number
            this.openDialogView = true
        },
        async submitBooking() {
            this.loading = true
            this.errorForm.fullName =  !this.isValidFullName
            this.errorForm.phoneNumber = !this.isValidPhone
            this.errorForm.serviceName = !this.isValidService
            this.errorForm.date = !this.isValidDate
            if(this.isValidForm) {
                this.formBooking.date = UtilService.convertTime(this.formBooking.date)
                await this.$store.dispatch('bookService', this.formBooking).then(rs => {
                    if(rs.status === 'success') {
                        this.formBooking = {
                            date: null,
                            fullName: '',
                            phoneNumber: '',
                            serviceName: null
                        }
                        this.errorForm = {
                            date: false,
                            fullName: false,
                            phoneNumber: false,
                            serviceName: false
                        }
                        this.loading = false
                    } else {
                        this.loading = false
                    }
                })    
            } else {
                this.loading = false
                this.$store.dispatch('showErrorMsg', 'Vui lòng điền đầy đủ thông tin.')
            }
        },
        viewMore(id) {
            console.log(id)
            if(id===1) {
                this.$router.push("/list-room")
            } else {
                this.$router.push("/post-detail?id="+id)
            }
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
        
            while(ele && ele.tagName != "BODY") {
                top += ele.offsetTop;
                left += ele.offsetLeft;
                ele = ele.offsetParent;
            }
            document.head.appendChild(styleHeaderLogo);
            document.head.appendChild(styleHeaderItem);
            document.head.appendChild(styleHeaderBooking);
            document.head.appendChild(styleHeaderBookingLabel);
            document.head.appendChild(styleHeader);
            document.head.appendChild(styleItemContentHide);
            window.scroll({
                top: top - 450,
                left: left,
                behavior: 'smooth'
            })
            this.$store.dispatch('setBooking', false)
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
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            if(document.documentElement.scrollTop !== 0 && !this.down) {
                document.head.appendChild(styleHeaderLogoNone);
                document.head.appendChild(styleHeaderItemNone);
                document.head.appendChild(styleHeaderBookingNone);
                document.head.appendChild(styleHeaderBookingLabelNone);
                document.head.appendChild(styleHeaderNone);
                document.head.appendChild(styleItemContentDisplay);
                this.down = false;
            }
        },
        activeLink(string) {
            return this.$route.name === string
        }
    },
    mounted() {
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
        document.head.appendChild(styleHeaderLogoNone);
        document.head.appendChild(styleHeaderItemNone);
        document.head.appendChild(styleHeaderBookingNone);
        document.head.appendChild(styleHeaderBookingLabelNone);
        document.head.appendChild(styleHeaderNone);
        let vm = this
        var scrollableElement = document.body; //document.getElementById('scrollableElement');
        scrollableElement.addEventListener('wheel', checkScrollDirection);
        function checkScrollDirection(event) {
            if (checkScrollDirectionIsUp(event)) {
                window.onscroll = function(event) {
                    console.log('up',document.documentElement.scrollTop)
                    if(document.documentElement.scrollTop <= 200) {
                        document.head.appendChild(styleItemContentDisplay);
                    } else if(document.documentElement.scrollTop <= 900) {
                        if(vm.down) {
                            document.head.appendChild(styleHeaderLogoNone);
                            document.head.appendChild(styleHeaderItemNone);
                            document.head.appendChild(styleHeaderBookingNone);
                            document.head.appendChild(styleHeaderBookingLabelNone);
                            document.head.appendChild(styleHeaderNone);
                            vm.down = false
                        }
                    } else {
                        vm.down = true
                        document.head.appendChild(styleHeaderLogo);
                        document.head.appendChild(styleHeaderItem);
                        document.head.appendChild(styleHeaderBooking);
                        document.head.appendChild(styleHeaderBookingLabel);
                        document.head.appendChild(styleHeader);
                    }
                }
            } else {
                window.onscroll = function(event) {
                    console.log('down',document.documentElement.scrollTop)
                    if(document.documentElement.scrollTop > 900) {
                        vm.down = true
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
                            vm.down = false
                        }
                        if(document.documentElement.scrollTop > 200) {
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
        if(this.$store.getters.booking) {
            console.log('chinh no day')
            this.toBooking()
        }
    },
    async created() {
        this.loading = true;
        await this.fetch()
    },
}
</script>