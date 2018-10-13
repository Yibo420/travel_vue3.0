<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/variables.styl';
    .search{
        height:.72rem;
        background: $bgcolor;
        padding .1rem;
        .search-input{
            box-sizing border-box;
            padding 0 0.1rem;
            height .62rem;
            line-height: .62rem;
            width 100%;
            border-radius .06rem;
            text-align center;
            color #666;

        }
    }
</style>