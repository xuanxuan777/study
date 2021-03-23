<template>
  <div class="container">
    <div class="back" @click="$router.go(-1)">&lt;</div>
    <div class="store-info">
      <img class="store-img" :src="this.informa.img" alt="" />
      <div class="store-msg">
        <div class="detail">
          <div class="top">
            <div class="foodminuter">{{ this.informa.minute }}分钟</div>
            <div class="fooddistance">
              {{ this.informa.distance }}
            </div>
          </div>
          <div class="middle">公告：{{ this.informa.notice }}</div>
          <div class="bottom">
            <div class="delete">
              <img src="@/assets/images/delete.png" alt="" />
              <span>
                {{ this.informa.full }}
              </span>
            </div>
            <div class="discount">
              <img src="@/assets/images/discount.png" alt="" />
              <span>
                {{ this.informa.sales }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.query.id,
      informa: {},
    };
  },
  created() {
    axios
      .get(`http://admin.gxxmglzx.com/tender/test/get_store_id?id=${this.id}`)
      .then((res) => {
        this.informa = res.data.data;
        // console.log(1);
        // console.log(this.informa);
        // console.log(1);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #2e2f3b;
  color: #fff;
  padding: 0.2rem;
  .back {
    font-size: 20px;
    margin-bottom: 0.2rem;
  }
  .store-info {
    display: flex;
    .store-img {
      width: 1.7rem;
      height: 1.26rem;
      margin-right: 10px;
    }
    .store-msg {
      flex: 1;
      width: 0; /*不受子元素宽度撑大*/
      .detail {
        .top {
          display: flex;
          font-family: mtsi-font;
          .foodminuter {
            padding-right: 4px;
            position: relative;
            &:before {
              content: "";
              display: block;
              width: 0.7px;
              height: 7px;
              background-color: #ffffff;
              position: absolute;
              left: 100%;
              top: 50%;
              transform: translate(0, -50%);
            }
          }

          .fooddistance {
            padding-left: 6px;
          }
        }
        .middle {
          height: 16px;
          font-size: 12px;
          line-height: 16px;
          font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53",
            sans-serif;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .bottom {
          font-family: mtsi-font;
          font-size: 12px;
          vertical-align: middle;
          .delete,
          .discount {
            margin: 5px 0;
            display: flex;
            img {
              width: 15px;
            }
            span {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>