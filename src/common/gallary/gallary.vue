<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" >
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gallary",
        props:{
            imgs:{
                type:Array,
                default(){
                    return [
                        'http://img1.qunarzz.com/sight/p0/1501/ab/ab02fceb3fa0a60e.water.jpg_r_800x800_351dd5e6.jpg',
                        'http://img1.qunarzz.com/sight/p0/1501/ab/ab02fceb3fa0a60e.water.jpg_r_800x800_351dd5e6.jpg',
                    ];
                }
            }
        },
        data(){
            return{
                swiperOptions:{
                    pagination:{
                        el:'.swiper-pagination',
                        type:'fraction'
                    },
                    observer:true,
                    observeParents:true,
                }
            }
        },
        methods:{
            handleGallaryClick(){
                this.$emit('close')
            }
        }

    }
</script>

<style scoped lang="stylus">
    >>> .swiper-pagination-bullet-active{
        background:white;
    }
    .container >>> .swiper-container{
        overflow: inherit;
    }
    .container{
        display: flex;
        flex-direction:column;
        justify-content:center;
        z-index:99;
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:#000;
        .wrapper{
            width:100%;
            height:0;
            padding-bottom:100%;
            .gallary-img{
                width:100%;
            }
            .swiper-pagination{
                color:#fff;
                width:100%;
                height:0;
                bottom:-1rem;
            }

        }
    }
</style>