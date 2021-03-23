<template>
    <div>
        <Head></Head>

        <Category></Category>

        <List></List>
    </div>
</template>

<script>
/*  
    1import引入
    2components声明
    3template中使用
*/
import Head from './head'
import Category from './Category'
import List from './List'
    export default {
        components:{
            Head,
            Category,
            List
        }
    }
</script>

<style lang="scss" scoped>

</style>