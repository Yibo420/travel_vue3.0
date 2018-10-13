<template>
    <div class="header">
        <router-link to="/">
            <div class="header-back"><span class="iconfont  back-icon">&#xe7a4;</span></div>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/variables.styl";
    .header{
        position:relative;
        height: $headerHeight;
        overflow: hidden;
        line-height:$headerHeight;
        text-align: center;
        color: #fff;
        background:$bgcolor;
        font-size:.32rem;
        .header-back{
            position:absolute;
            width:.64rem;
            text-align:center;
            font-size:.4rem;
            top;0;
            left:0;
            color:#fff;
        }
    }

</style>