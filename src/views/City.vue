<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
                :cities="cities"
                :hotCities="hotCities"
                :letter='letter'
        >

        </city-list>
        <alphabet
                :cities="cities"
                @change="handleLetterChange"
        ></alphabet>
    </div>
</template>

<script>
    import CityHeader from '../components/CityHeader'
    import CitySearch from '../components/CitySearch'
    import CityList from '../components/CityList'
    import Alphabet from '../components/Alphabet'
    export default {
        name: "City",
        data(){
            return{
                cities:{},
                hotCities:[],
                letter:''
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            Alphabet
        },
        methods:{
            getCityInfo(){
                this.$http.get('/cityjson')
                    .then(this.getCityInfoSuccess)
            },
            getCityInfoSuccess(res){
                // console.log(res)
                res=res.data
                if(res.ret&&res.data){
                    const data = res.data
                    // console.log(data)
                    this.cities=data.cities
                    this.hotCities=data.hotCities
                }
            },
            handleLetterChange(letter){
                // console.log(letter)
                this.letter=letter
            }
        },
        mounted(){
            this.getCityInfo()
        },
    }
</script>

<style scoped>

</style>