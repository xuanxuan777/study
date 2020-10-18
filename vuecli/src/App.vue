<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- hahahhhahah
    <h2>dsds151</h2>

    <test></test> -->
    <!-- 路由跳转传参 -->
    <!-- <router-link :to="{path:'/home',query:{id:666}}">首页</router-link> -->
    <router-link :to="{name:'myhome',params:{id:666}}">首页</router-link>
    <router-link to="/test">测试页面</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// 1 引入组件 import  2 components声明 3使用
// import Test from './views/Test'
export default {
  // components:{
  //   Test
  // }
}
</script>

<style lang="stylus" scoped>

</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
