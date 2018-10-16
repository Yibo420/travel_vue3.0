import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e) {
}
export default new Vuex.Store({
  state: {//公共数据
    city:defaultCity
  },
  mutations: {//同步操作
    changeCity(state,city){
      state.city = city
        try {
            localStorage.city = city
        }catch (e) {
        }
    }
  },
  actions: {//异步操作或者批量的同步操作
      changeCity(ctx,city){
        // console.log(ctx,city)
          ctx.commit('changeCity',city)
      }
  },
    getters:{//作用与computed类似,用于计算某些属性
    doubleCity(state){
      return state.city + " " + state.city
    }
    }
})
