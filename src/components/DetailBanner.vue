<template>
    <div>
        <div class="banner">
            <img
                    @click="GallaryClick"
                    class="banner-img"
                    src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg"
                    alt="">
            <div class="banner-info">
                <div class="banner-title">
                    北京欢乐谷(AAAA景区)
                </div>
                <div class="banner-number"><span class="iconfont">&#xe692;</span>39</div>
            </div>
        </div>
        <common-gallary
                :imgs="imgs"
                v-show="showGallary"
                @close="handleGallaryclose"
        ></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from '../common/gallary/gallary'
    export default {
        name: "DetailBanner",
        components:{
            CommonGallary
        },
        data(){
            return{
                imgs:[
                    'http://img1.qunarzz.com/sight/p0/1501/ab/ab02fceb3fa0a60e.water.jpg_r_800x800_351dd5e6.jpg',
                    'http://img1.qunarzz.com/sight/p0/1501/ab/ab02fceb3fa0a60e.water.jpg_r_800x800_351dd5e6.jpg',
                ],
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