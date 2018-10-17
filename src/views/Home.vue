<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommend from '../components/Recommend'
import HomeWeekend from '../components/Weekend'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
    data(){
      return {
          lastCity:'',
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[]
      }
    },
    mounted(){
        this.getHomeInfo()
        this.lastCity = this.city
        console.log('mounted')
    },
    computed:{
        ...mapState(['city'])
    },
    activated(){
        console.log('activated')
        if(this.lastCity !== this.city){
            this.getHomeInfo()
            this.lastCity = this.city
        }
    },
    methods:{
        getHomeInfo(){
            this.$http.get('/indexjson?city=' + this.city)
                .then(this.getHomeInfoSuccess)
            // let params={
            //     orderType: 'asdf',
            //     contact:'jieyi',
            //     phoneNum: '13500000000',
            //     repurchase:false
            // }
            // this.$http.post('http://47.93.229.90/add',params).then(response=>{
            //     console.log(response)
            // })
            // let params1={
            //     phonenum:13500000000
            // }
            // this.$http.post('http://47.93.229.90/getOrderTableByPhone',params1).then(response=>{
            //     console.log(response)
            // })
            //
            // let params2={
            //     orderId:"00036aa0-d1e5-11e8-a912-6f18158466b8"
            // }
            // this.$http.post('http://47.93.229.90/getOrderListByOrderId',params2).then(response=>{
            //     console.log(response)
            // })
            // this.$http.get('http://47.93.229.90/getOrderTable').then(response=>{
            //     console.log(response)
            // })
            // this.$http.get('http://47.93.229.90/getOrderList').then(response=>{
            //     console.log(response)
            // })
            //
        },
        getHomeInfoSuccess(res){
            console.log(res)
            res=res.data
            if(res.ret&&res.data){
                const data = res.data
                this.swiperList= data.swiperList
                this.iconList= data.iconList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
        }
    },
}
</script>
