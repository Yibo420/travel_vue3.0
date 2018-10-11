<template>
    <div class="icons">
        <swiper  :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="(icon,index) in page" :key="index">
                    <div class="icon-img">
                        <img :src="icon.imgurl" class="icon-img-content">
                        <p class="icon-desc">{{icon.text}}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data(){
            return {
                iconlist:[
                    {
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点热门热门热门热门',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },{
                        imgurl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        text:'热门景点',
                    },
                    ],
                swiperOption : {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true,
                    autoplay:false
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                }
            }
        },
        computed: {
            pages () {
                const pages = [];
                this.iconlist.forEach((item,index)=>{
                    const page =Math.floor(index/8)
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/variables.styl';
    @import '~@/assets/mixin.styl';
    .icons{
        overflow: hidden;
        height:0;
        padding-bottom 50%;
        /*background: green;*/
        .icon{
            float: left;
            width:25%;
            padding-bottom :25%;
            position:relative;
            .icon-img{
                box-sizing:border-box;
                padding:.2rem;
                position:absolute;
                top: 0;
                left:0;
                right:0;
                bottom:0;
                /*background :blue;*/
            }
            .icon-img-content{
                display :block;
                margin:0 auto;
                height:100%;
            }
        }
        .icon-desc{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            height:.44rem;
            line-height: .44rem
            color: $darkTextColor;
            text-align:center;
            ellipsis();
        }

    }

</style>