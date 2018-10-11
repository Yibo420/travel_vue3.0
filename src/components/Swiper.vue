<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(banner,index) in banners" :key="index">
                <img :src="banner" class="swiper-img">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption : {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                },
                banners : [
                    'http://img1.qunarzz.com/des-mis/ad/1704/85/e817a31674a37f.jpg',
                    'http://dimg04.c-ctrip.com/images/700h0i0000009nvq206D5_750_330_217.jpg?v=201809181141',
                    'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg',
                ]
            }
        },
        methods:{
            callback(){

            },
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log('this is current swiper instance object', this.swiper)
        }
    }
</script>

<style scoped lang="stylus">

    .wrapper{
        >>> .swiper-pagination-bullet-active{
            background:white;
        }
        .swiper-container{
            height:31.25vw;
        }
        position:relative ;
        width:100%;
        height:31.25vw;
        overflow:hidden;/*
        height:0;
        padding-bottom : 26.25%;*/
        .swiper-img{
            width : 100%;
        }
    }
    .swiper-pagination{

    }
</style>