<template>
    <div class="heading-landing-page" id="header">
        <div class="logo" id="logo" @click="toHomepage()">
            <img src="images/logo.jpg" alt="">
        </div>
        <div class="heading-item" id="headingItem">
            <router-link to="/">Trang chủ</router-link>
            <router-link to="/list-room">Danh sách phòng</router-link>
            <router-link to="/contact">Liên hệ</router-link>
        </div>
        <div class="booking" id="bookingHeader" @click="toBooking()">
            <img src="images/icons/booking.svg" alt="">
            <a href="#" id="textBooking">Đặt lịch</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    computed: {},
    methods: {
        toHomepage() {
            this.$router.push("/")
        },
        toBooking() {
            this.$router.push("/")
            this.$store.dispatch('setBooking', true)
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
        let vm = this
        var scrollableElement = document.body; //document.getElementById('scrollableElement');
        scrollableElement.addEventListener('wheel', checkScrollDirection);
        function checkScrollDirection(event) {
            if (checkScrollDirectionIsUp(event)) {
                window.onscroll = function(event) {
                    console.log('up',document.documentElement.scrollTop)
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
    }
}
</script>