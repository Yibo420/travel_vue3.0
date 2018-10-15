<template>
    <ul class="list">
        <li class="item"
            v-for="(item,key) of letters"
            :key="key"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item"
        >
            {{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props:{
            cities:Object
        },
        data(){
            return{
                touchStatus:false
            }
        },
        computed:{
            'letters'(){
                const letters=[]
                for (let i in this.cities){
                    letters.push(i)
                }
                return letters
            }
        },
        methods:{
            handleLetterClick(e){
                // console.log(e)
                this.$emit('change',e.target.innerText)
            },
            handleTouchStart(){
                this.touchStatus=true
            },
            handleTouchMove(e){
                if(this.touchStatus){
                    const startY = this.$refs['A'][0].offsetTop
                    const touchY = e.touches[0].clientY - 69
                    const index = Math.floor((touchY-startY)/20)
                    console.log(startY,touchY,index)
                    if(index>=0 && index <this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }
            },
            handleTouchEnd(){

            },
        }
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
            line-height :.54rem;
            text-align:center;
            color:$bgcolor;
        }
    }
</style>