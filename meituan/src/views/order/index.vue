<template>
  <div class="order-box">
    <div class="orderleft">
      <ul>
        <li
          @click="change(index)"
          :class="{ active: index == correctnum, movebox: true }"
          v-for="(obj, index) in nav"
          :key="obj.id"
        >
          {{ obj.name }}
        </li>
      </ul>
    </div>
    <div class="orderright">
      <div>
        <div
          class="orderright-change"
          v-for="(obj, index) in goods"
          :key="index"
        >
          <h2>{{ obj.name }}</h2>
          <ul>
            <li
              class="confood"
              v-for="confood in obj.content"
              :key="confood.id"
            >
              <img class="foodimg" :src="confood.img" alt="" />
              <div class="information">
                <div class="foodname">{{ confood.name }}</div>
                <div class="info">{{ confood.info }}</div>
                <div class="foodzan">
                  月销{{ confood.num }} 赞{{ confood.up }}
                </div>
                <div class="foodprice">
                  <span>￥{{ confood.price }}</span>
                  <span class="foodfen">/{{ confood.company }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      correctnum: 0,
      scrollY: 0, //prodScroll 滚动的高度
      pos: [],
    };
  },
  methods: {
    change(index) {
      // 获取到跟index索引对应的 .prod-cate-box
      let orderrightchange = document.getElementsByClassName(
        "orderright-change"
      );
      // console.log(orderrightchange[index]);

      this.orderright.scrollToElement(orderrightchange[index], 300);
      this.correctnum = index;
    },
    getpos() {
      let orderpos = document.getElementsByClassName("orderright-change");
      let hei = 0;
      // console.log(orderpos.length);
      for (let i = 0; i < orderpos.length; i++) {
        if (i == 0) {
          this.pos.push(0);
        } else {
          hei += orderpos[i - 1].offsetHeight;
          this.pos.push(hei);
        }
      }
      // console.log(this.pos);
    },
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;

        // 数据请求回来
        // 渲染到页面后 -> new BetterScroll
        this.$nextTick(() => {
          this.orderleft = new BetterScroll(".orderleft", {
            click: true,
            bounce: false,
          });
          this.orderright = new BetterScroll(".orderright", {
            click: true,
            bounce: false,
            probeType: 3,
          });
          this.orderright.on("scroll", (position) => {
            // console.log(position.x, position.y);
            this.scrollY = Math.abs(position.y);
            // console.log(this.scrollY)
          });
          // 计算每个分类的位置
          this.getpos();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    scrollY(val) {
      // console.log(val);
      let catelist = document.querySelectorAll(".movebox");
      // console.log(catelist.length);
      for (let i = 0; i < catelist.length; i++) {
        let pos1 = this.pos[i];
        let pos2 = this.pos[i + 1];
        if (val >= pos1 && val < pos2) {
          // console.log(i);
          this.orderleft.scrollToElement(catelist[i], 300);
          this.correctnum = i;
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-box {
  display: flex;
  padding-bottom: 50px;
  .orderleft {
    height: calc(100vh - 94px);
    flex: 1;
    li {
      background: #f5f5f5;
      padding: 10px;
      padding-top: 9px;
      padding-bottom: 22px;
      &.active {
        color: red;
      }
    }
  }
  .orderright {
    height: calc(100vh - 94px);
    flex: 3;
    h2 {
      margin: 10px 0x;
    }
    .confood {
      align-items: flex-start;
      display: flex;
      .foodimg {
        margin-right: 10px;
      }
      .information {
        flex: 1;
        width: 0;
        .foodprice {
          color: #fb4e44;
          font-size: 18px;
          font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica,
            "\5B8B\4F53", sans-serif;
          display: flex;
          align-items: center;
          .foodfen {
            color: #999;
            font-size: 12px;
          }
        }
        .foodname {
          font-size: 16px;
          color: #333333;
          font-weight: bold;
          font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica,
            "\5B8B\4F53", sans-serif;
        }
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 11px;
          color: #666666;
        }
        .foodzan {
          font-family: mtsi-font;
          font-size: 11px;
          color: #666;
        }
      }
      img {
        width: 1.5rem;
      }
      div {
        p {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>