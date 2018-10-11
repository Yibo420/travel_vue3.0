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
        height:1.2rem;
        line-height:1.2rem;
        background:$bgcolor;
        color:#fff;
        font-size:.24rem;
        .header-left{
            width:.86rem;
            float: left;
            text-align:center;
        }
        .back-icon{
            font-size:.24rem;
        }
        .header-right{
            width:1.8rem;
            float: right;
            text-align:center;
        }
        .arrow-icon{
            font-size: .24rem;
        }
        .header-input{
            box-sizing:border-box;
            padding-left: .2rem;
            height :.8rem;
            line-height:.8rem;
            margin-left:.2rem;
            margin-top: .2rem;
            flex :1;
            border-radius : .1rem;
            background:#fff;
            color: #ccc;
        }
    }
</style>