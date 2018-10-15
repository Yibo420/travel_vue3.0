<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <alphabet></alphabet>
    </div>
</template>

<script>
    import CityHeader from '../components/CityHeader'
    import CitySearch from '../components/CitySearch'
    import CityList from '../components/CityList'
    import Alphabet from '../components/Alphabet'
    export default {
        name: "City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            Alphabet
        }
    }
</script>

<style scoped>

</style>