<template>
    <div class="list"  ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item of hotCities"
                         :key="item.id"
                         @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(item,key) of cities"
                 :key="key"
                 :ref="key"
            >
            <div class="title border-topbottom">
                {{key}}
            </div>
            <div class="item-list"
                 v-for="innerItem of item"
                 :key="innerItem.id"
                 @click="handleCityClick(innerItem.name)"
            >
                <div class="item border-bottom">{{innerItem.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import BetterScroll from 'better-scroll'
    export default {
        name: "CityList",
        props:{
            cities:Object,
            hotCities:Array,
            letter:String
        },
        methods:{
            handleCityClick(city){
                // alert(city)
                // this.$store.dispatch('changeCity',city)//调用vuex中actions的方法
                this.changeCity(city)//调用vuex中mutations的方法
                this.$router.push('/')
            },
            ...mapMutations({
                changeCity:'changeCity'
            })
        },
        watch:{
            'letter'(){
                //console.log(this.letter)
                if(this.letter){
                    const element = this.$refs[this.letter][0]
                    console.log(element)
                    this.scroll.scrollToElement(element)
                }
            }
        },
        mounted(){
            /* console.log(this.cities)*/
            this.scroll = new BetterScroll(this.$refs.wrapper)
        },
        computed:{
            ...mapState({
                currentCity:'city'
            })
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/variables.styl'
    .border-topbottom
        &:before{
          border-color #ccc
        }
        &:after{
            border-color #ccc
        }
    .border-bottom {
        &:before {
            border-color: #ccc;
        }
    }
    .list{
        overflow:hidden;
        position:absolute;
        top:1.68rem;
        left:0;
        right:0;
        bottom:0;
        .title{
            line-height: .54rem;
            background: #eee;
            padding-left: .2rem;
            font-size: .26rem;
            color: #666;
        }
        .button-list{
            overflow:hidden;
            padding:.1rem .6rem .1rem .1rem;
            .button-wrapper{
                float:left;
                width:33.33%;
                .button{
                    margin:.1rem;
                    text-align:center;
                    border:.02rem solid #ccc;
                    padding:.1rem 0;
                    border-radius:.1rem;
                }
            }
        }
        .item-list{
            .item{
                line-height:.76rem;
                padding-left:.2rem;
            }
        }
    }


</style>