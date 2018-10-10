<template>
    <div class="header">
        <div class="header-left"><span class="iconfont  back-icon">&#xe7a4;</span></div>
        <div class="header-input"><span class="iconfont">&#xe61f;</span>输入城市/景点/游玩/主体</div>
        <div class="header-right ">城市<span class="iconfont arrow-icon">&#xe614;</span></div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/variables.styl';
    .header{
        display : flex;
        height:.86rem;
        line-height:.86rem;
        background:$bgcolor;
        color:#fff;

        .header-left{
            width:.64rem;
            float: left;
            text-align:center;
        }
        .back-icon{
            font-size:.4rem;
        }
        .header-right{
            width:1.24rem;
            float: right;
            text-align:center;
        }
        .arrow-icon{
            font-size: .24rem;
        }
        .header-input{
            padding-left: .2rem;
            height :.64rem;
            line-height:.64rem;
            margin-left:.2rem;
            margin-top: .12rem;
            flex :1;
            border-radius : .1rem;
            background:#fff;
            color: #ccc;
        }
    }
</style>