<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <detailHead></detailHead>

      <!-- <van-tabs v-model="active" animated>
      <van-tab v-for="index in 4" :title="'选项 ' + index" :key='index'>
        内容 {{ index }}
      </van-tab>
    </van-tabs> -->
      <van-tabs v-model="active" animated sticky color="#ffb000">
        <van-tab :title="'点餐 '">
          <order></order>
        </van-tab>
        <van-tab :title="'评论'">
          <!-- 引入评价页的组件 -->
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">
          <storeinfor></storeinfor>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import detailHead from "./DetailHead";
import Comment from "@/views/comment/index";
import BetterScroll from "better-scroll";
import Order from '@/views/order/index'
import Storeinfor from '@/views/storeinfor/index'
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    detailHead,
    Comment,
    Order,
    Storeinfor
  },
  mounted() {
    setTimeout(() => {
      let scroll = new BetterScroll('.bs-wrapper',{
          click: true,
          bounce:false
      })
    }, 1000);
    
  }
};
</script>

<style lang="scss" scoped>
.bs-wrapper{
  height: 100vh;
  overflow: hidden;
}
</style>