<template>
    <div>
        <div class="recommend-title">
            热销推荐
        </div>
        <ul>
            <li class="item" v-for="(item) of recommendList" :key="item.id">
                <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data(){
            return {
                recommendList:[
                    {
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1809/6b/6b900de5e5ac7239a3.img.jpg_200x200_98bbdd13.jpg',
                    title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                    desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1809/6b/6b900de5e5ac7239a3.img.jpg_200x200_98bbdd13.jpg',
                        title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                        desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1809/6b/6b900de5e5ac7239a3.img.jpg_200x200_98bbdd13.jpg',
                        title:'大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界大连省海洋世界',
                        desc:'浪漫大连首站，浪漫海洋主题乐园',
                    },
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1809/6b/6b900de5e5ac7239a3.img.jpg_200x200_98bbdd13.jpg',
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
    .item{
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        .item-img{
            width:1.7rem;
            height:1.7rem;
            padding .1rem;
        }
        .item-info{
            flex:1;
            padding:.1rem;
            min-width:0;
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
            .item-button{
                line-height .44rem;
                margin-top .16rem;
                background :#ff9300;
                padding :0 .1rem;
                border-radius .06rem;
                color:#fff;
            }
        }
    }

</style>