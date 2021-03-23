import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储状态
  state: {
    count:0,
    count2:1,
    list:[]
  },
  mutations: {
    // count增加方法 第一个参数是state 第二个参数是传进来的参数
    add(state,num){
      state.count+=num;
    },
    // 修改state中list
    addList(state,arr){
      state.list=arr;
    }
  },
  // 相当于计算属性
  getters:{
    sum(state){
      return state.count+state.count2;
    }
  },
  actions: {
    // 1封装一个请求action
    getmovieList({commit}){
      console.log('调用了');
      // 2请求电影数据
      axios.get('https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a')
      .then((res)=>{
        console.log(res.data.subject_collection_items);
        // 3请求回来数据 -> 存在list中（调用mutation中的addList方法）
        commit('addList',res.data.subject_collection_items)
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  modules: {
  }
})
