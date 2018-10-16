<template>
    <div class="header">
        <div class="header-left"><span class="iconfont  back-icon">&#xe7a4;</span></div>
        <div class="header-input"><span class="iconfont">&#xe61f;</span>输入城市/景点/游玩/主体</div>
        <router-link to="/city">
            <div class="header-right ">{{this.doubleCity}}<span class="iconfont arrow-icon">&#xe614;</span></div>
        </router-link>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: "HomeHeader",
        props:{
        },
        computed:{
            ...mapState(['city']),
            ...mapGetters(['doubleCity'])
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/variables.styl';
    .header{
        display : flex;
        height:$headerHeight;
        line-height:$headerHeight;
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
            padding:.01rem;
            min-width:1.04rem;
            float: right;
            text-align:center;
            color:#fff;
        }
        .arrow-icon{
            font-size: .24rem;
        }
        .header-input{
            box-sizing:border-box;
            padding-left: .2rem;
            height :.66rem;
            line-height:.66rem;
            margin-left:.1rem;
            margin-top: .1rem;
            flex :1;
            border-radius : .1rem;
            background:#fff;
            color: #ccc;
        }
    }
</style>