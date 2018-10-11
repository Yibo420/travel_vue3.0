<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="(banner,index) in swiperList" :key="index">
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
        props:{
            swiperList:Array
        },
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
            }
        },
        methods:{
            callback(){

            },
        },
        computed: {
            showSwiper(){
                return this.swiperList.length
            },
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