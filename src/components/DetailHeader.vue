<template>
    <div>
        <router-link
                tag="div"
                to="/"
                class="header-abs"
                v-show="showAbs"
        >
            <div class="iconfont  header-abs-back">&#xe7a4;</div>
        </router-link>

        <div
                class="header-fixed"
                v-show="!showAbs"
                :style="opacityStyle"
        >
            <router-link tag="div" to="/">
                <div class="iconfont  header-fixed-back">&#xe7a4;</div>
            </router-link>
            景点详情
        </div>

    </div>

</template>

<script>
    export default {
        name: "DetailHeader",
        data(){
            return{
                showAbs:true,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop
                // console.log(top)
                if(top>60){
                    let opacity = top /140
                    opacity = opacity>1?1:opacity
                    this.opacityStyle = {
                        opacity
                    }
                    this.showAbs=false
                }else {
                    this.showAbs=true
                }
            }
        },
        activated(){
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/variables.styl';
    .header-abs{
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: .4rem;
        background: #000;
        text-align: center;
        .header-abs-back{
            color: #fff;
            font-size: .4rem;
        }
    }
    .header-fixed{
        z-index:2;
        position:fixed;
        left:0;
        right:0;
        top:0;
        height: $headerHeight;
        line-height:$headerHeight;
        text-align: center;
        color: #fff;
        background:$bgcolor;
        font-size:.32rem;
        .header-fixed-back{
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