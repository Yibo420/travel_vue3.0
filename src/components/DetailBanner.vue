<template>
    <div>
        <div class="banner">
            <img
                    @click="GallaryClick"
                    class="banner-img"
                    :src="bannerImg"
                    alt="">
            <div class="banner-info">
                <div class="banner-title">
                   {{sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont">&#xe692;</span>{{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary
                    :imgs="bannerImgs"
                    v-show="showGallary"
                    @close="handleGallaryclose"
            ></common-gallary>
        </fade-animation>

    </div>
</template>

<script>
    import CommonGallary from '../common/gallary/gallary'
    import FadeAnimation from '../common/fade/FadeAnimation'
    export default {
        name: "DetailBanner",
        props:{
            sightName:String,
            bannerImg:String,
            bannerImgs:Array
        },
        components:{
            CommonGallary,
            FadeAnimation
        },
        data(){
            return{
                showGallary:false,
            }
        },
        methods:{
            GallaryClick(){
                this.showGallary = true;
            },
            handleGallaryclose(){
                this.showGallary = false;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .banner{
        position:relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        .banner-img{
            width:100%;

        }
        .banner-info{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            display: flex;
            line-height:.6rem;
            color:#fff;
            background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
            .banner-title{
                flex:1;
                font-size:.32rem;
                padding:0 .2rem;
            }
            .banner-number{
                margin-top:.14rem;
                padding:0 .4rem;
                height:.6rem;
                line-height:.4rem;
                border-radius:.2rem;
                background:rgba(0,0,0,.8)
                font-size:.24rem;
                .banner-icon{
                    font-size:.24rem;

                }
            }
        }
    }

</style>