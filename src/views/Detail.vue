<template>
    <div>
        <detail-banner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from '../components/DetailBanner'
    import DetailHeader from '../components/DetailHeader'
    import DetailList from '../components/DetailList'
    export default {
        name: "Detail",
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return{
                list:[
                    {
                        title:'成人票',
                        children:[
                            {
                                title:'成人三馆联票',
                                children:[
                                    {
                                        title:'成人三馆联票---某一连锁店',
                                    },
                                ]
                            },
                            {
                                title:'成人五馆联票',
                            },
                        ]
                    },
                    {
                        title:'学生票'
                    },
                    {
                        title:'儿童票'
                    } ,
                    {
                        title:'特惠票'
                    }
                ],
                sightName:'',
                bannerImg:'',
                gallaryImgs:[]
            }
        },
        methods:{
          getDetailInfo(){
              this.$http.get('/detailjson',{params:{
                  id:this.$route.params.id
                  }
              })
                  .then(this.getDetailInfoSuccess)
          },
            getDetailInfoSuccess(res){
              console.log(res)
              res = res.data
                if(res.ret && res.data){
                    let data=res.data
                    this.sightName=data.sightName
                    this.bannerImg=data.bannerImg
                    this.list=data.categoryList
                    this.gallaryImgs=data.gallaryImgs
                }
            }
        },
        mounted(){
            this.getDetailInfo()
        }
    }
</script>

<style scoped>
    .content{
        height: 50rem;
    }
</style>