<template>
    <div>
        我是首页
        <!-- query -->
        <!-- {{
            $route.query.id
        }} -->
        <!-- params -->
        {{$route.params.id}}{{id}}
        <router-link to="/home/a">A </router-link>
        <router-link to="/home/b">B </router-link>
        <ul>
            <!-- $store.state.xx     a模块中$store.state.a.xx -->
            <li v-for="(obj,index) in $store.state.a.list" :key="index">
                {{obj.name}}
            </li>   
        </ul>
        <ul>
            <li v-for="(obj,index) in $store.state.b.prolist" :key="index">{{obj.name}}</li>
        </ul>
        <button @click="$store.commit('a/add')">添加赵六</button>
        <button @click="$store.commit('b/reverse')">颠倒商品列表数组</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {//return后面有一个空格
                id:this.$route.params.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>