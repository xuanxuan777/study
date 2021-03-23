<template>
  <div class="shoplist">
    <!-- <fieldset>
            <legend>附近商家</legend>
        </fieldset> -->
    <p>附近商家</p>
    <ul class="choose-list">
      <li>综合排序</li>
      <li>销量最高</li>
      <li>距离最近</li>
      <li>筛选</li>
    </ul>
    <ul class="store-list-box">
      <li class="store-list" v-for="obj in list" :key="obj.id" @click="$router.push({path:'/detail',query:{id:obj.id}})">
        <img class="store-img" :src="obj.img" alt="" />
        <div class="store-text">
          <h2>
            {{ obj.name }}
          </h2>
          <div class="star">
            <Star :num="parseFloat(obj.score)"></Star>
            {{ obj.score }}
            月销:{{ obj.num }}+
            <div class="distance">
              <span class="minuter">{{obj.minute }}分钟</span>
              <span class="long">{{obj.distance}}</span>
            </div>
            
          </div>
          <div class="infor">
            <div class="start">起送￥{{ obj.price }}</div>
            <div class="pei">配送￥{{obj.fee}}</div>
          </div>
          {{obj.server}}
          <div>
            <img class="delete" src="@/assets/images/delete.png" alt="">
            {{obj.full}}
          </div>
          <div>
            <img class="discount" src="@/assets/images/discount.png" alt="">
            {{obj.sales}}
          </div>
        </div>
      </li>
    </ul>

    <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>
<script>
import Star from "@/components/Star";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      pageNum: 0,
      isShow:true,
      isFinished:false
    };
  },
  methods: {
    getaxios() {
      axios
        .get(
          "http://admin.gxxmglzx.com/tender/test/get_store?current=" +
            this.pageNum +
            "&size=10"
        )
        .then((res) => {
          this.list = [...this.list,...res.data.data.list];

          // this.list=res.data.data.list;
          this.pageNum++;
          this.isShow=false;
          // 判断是不是请求完了
          if(this.list.length==res.data.data.total){
              
              this.isFinished = true
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getaxios();
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop; //获滚动条滚动高度
      let clientHeight = document.documentElement.clientHeight; //可视区高度
      let scrollHeight = document.documentElement.scrollHeight; //整个页面的高度

      if ((Math.ceil(scrollTop) + clientHeight == scrollHeight) && !this.isFinished) {//页面到底了 并且 数据没有加载完
        this.isShow=true;
        this.getaxios();
      }
    };
  },
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.shoplist {
  .store-list-box {
    padding: 0.2rem;
    .store-list {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.4rem;
      .store-img {
        width: 1.52rem;
        margin-right: 0.2rem;
      }
      .store-text {
        flex: 1;
        .discount{
          width: 15px;
        }
        .delete{
          width: 15px;
        }
        .infor{
          display: flex;
          .start{
            padding-right: 2px;
            position: relative;
          }
          .start::before{
            position: absolute;
            content: "";
            display: block;
            width: 1.5px;
            height: 7px;
            background-color: #CCC;
            left: 100%;
            top: 50%;
            transform: translate(0,-50%);
          }
          .pei{
            padding-left: 4px;
          }
        }
        .star {
          display: flex;
        }
        .h2 {
        //   font-size: 100px;
          color: #333;
          font-weight: bold;
        }
        .distance{
          flex: 1;
          text-align: right;
          .minuter{
            // border-right: 1px solid #CCC;
            position: relative;
            padding-right: 2px;
          }
          .minuter::before{
            content: "";
            display: block;
            width: 1.5px;
            height: 7px;
            background-color: #CCC;
            position: absolute;
            left: 100%;
            bottom: 5%;
            // top:50%;
            // transform: translate(0,-50%);
          }
          .long{
            padding-left: 4px;;
          }
        }
      }
    }
  }
  .choose-list {
    display: flex;
    border: 1px solid rgba(192, 192, 192, 0.3);
    border-left: none;
    border-right: none;
    font-size: 15px;
    color: #666666;
    height: 40px;
    li {
      width: 25%;
      text-align: center;
      line-height: 40px;
    }
  }
  p {
    font-size: 15px;
    text-align: center;
    position: relative;
    margin: 10px;
  }
  p::before {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background-color: #666;
    position: absolute;
    top: 50%;
    left: 34%;
  }
  p::after {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background-color: #666;
    position: absolute;
    top: 50%;
    right: 34%;
  }
}
.loading{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
// fieldset{
//     border-width: 1px 0 0 0;
//     border-style: solid;
//     border-color: #e0e0e0;
//     text-align: center;
//     margin: 20px 0;
//     legend{
//         font-size: 15px;
//         font-weight: 500;
//     }
// }
</style>