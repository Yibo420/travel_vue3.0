<template>
    <div>
        <div class="recommend-title">
            周末去哪儿
        </div>
        <ul>
            <li class="item"
                v-for="(item,index) of recommendList"
                :key="index">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data(){
            return {
                recommendList:[
                    {
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1509/a1/4faeed396a85aa.jpg_r_640x214_75530e9b.jpg',
                    title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                    desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/source/1509/a1/4faeed396a85aa.jpg_r_640x214_75530e9b.jpg',
                        title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                        desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/source/1509/a1/4faeed396a85aa.jpg_r_640x214_75530e9b.jpg',
                        title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                        desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/source/1509/a1/4faeed396a85aa.jpg_r_640x214_75530e9b.jpg',
                        title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                        desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },

                ]
            }
        },
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/mixin.styl"
    .recommend-title{
        margin-top: .3rem;
        line-height: 1.2rem;
        background: #eee;
        text-indent: .3rem;
    }
    .item-img-wrapper{
        overflow:hidden;
        height:0;
        padding-bottom:33.9%;
        .item-img{
            width:100%;
        }
    }
    .item-info{
        padding:.1rem;
        .item-title{
            line-height :.54rem;
            font-size:.32rem;
            ellipsis();
        }
        .item-desc{
            line-height:.4rem;
            color :#ccc;
            ellipsis();
        }
    }

</style>