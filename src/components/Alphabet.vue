<template>
    <ul class="list">
        <li class="item">asdfadsfaa</li>
        <li class="item">a</li>
        <li class="item">a</li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet"
    }
</script>

<style scoped lang="stylus">
@import "~@/assets/variables.styl";
    .list{
        display:flex;
        flex-direction:column;
        justify-content:center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item{
            line-height :.4rem;
            text-align:center;
            color:$bgcolor;
        }
    }
</style>