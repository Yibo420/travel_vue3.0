<template>
    <div>
        <div class="search">
            <input
                    type="text"
                    placeholder="输入城市名或拼音"
                    class="search-input"
                    v-model="keyword"
            >
        </div>
        <div
                class="search-content"
                ref="search"
                v-show="keyword"
        >
            <ul>
                <li
                        v-for="item of list"
                        :key="item.id"
                        class="search-item border-bottom"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BetterScroll from 'better-scroll'
    export default {
        name: "CitySearch",
        props:{
            cities:Object
        },
        data(){
            return{
                keyword:'',
                list:[],
                timer:null
            }
        },
        mounted(){
            this.scroll = new BetterScroll(this.$refs.search)
        },
        computed:{
            hasNoData(){
                return !this.list.length
            }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list=[];
                    return;
                }
                this.timer = setTimeout(()=>{
                    const result = []
                    for (let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            if(value.spell.indexOf(this.keyword) > -1 ||
                                value.name.indexOf(this.keyword) > -1){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },100)
            },
        },
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
    .search-content{
        z-index:1;
        overflow: hidden;
        position:absolute;
        top:1.68rem;
        left:0;
        right:0;
        bottom:0;
        background: #eee;
        .search-item{
            line-height: .62rem;
            padding-left:.2rem;
            color:#666;
            background:#fff;
        }
    }
</style>