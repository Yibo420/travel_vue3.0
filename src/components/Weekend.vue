<template>
    <div>
        <div class="recommend-title">
            周末去哪儿
        </div>
        <ul>
            <li class="item"
                v-for="(item,index) of weekendList"
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
        props:{
            weekendList:Array,
        },
        data(){
            return {
            }
        },
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/mixin.styl"
    .recommend-title{
        line-height: 1.2rem;
        background: #eee;
        text-indent: .3rem;
    }
    .item-img-wrapper{
        overflow:hidden;
        height:0;
        padding-bottom:37%;
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