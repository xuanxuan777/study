<template>
  <div class="store">
    <div class="adress">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAAV1BMVEUAAACrq6uqqqqrq6uvr6+qqqqsrKysrKyqqqqsrKyurq6tra2qqqqrq6urq6usrKyxsbGqqqqrq6urq6urq6uqqqqqqqqrq6urq6urq6urq6uqqqqqqqptythVAAAAHHRSTlMA9dHCCYNBTN4vGSPsj2hFD6lgd3Tly7Z6VDyiLLeTfQAAASlJREFUKM91UlGWgyAMJICAqK1WrdrO/c+5aXhK2WXnJy8ZMkwC6oR1gwlEwQzOqhJ27nGhnwvaM6Ub11nbuUYz7TM3AOae07sBhszRogosdLIz6GzLzYT5EzvCIYWx0US6SWYOUMdhw1tSFyAITtI3Nm4EReEA42P0BhA2Ejq1Y5JBAxolaBBEecKuDI5UMqcZk44dXAnczdC45vbQYhRBEUSEEE8yguQiDj3GOjmiZ722LtviyaYedUMPHsOn6vhnFMNadkVbW0KLlc/c8Kytz+D2Cc8UlM2Lzy0tEQtnlLUFeiy5UeN6/gmbLcgN0/fB4ZsbCqm4Ys/ZjLUrDSTLyehvgy+SNcrayFX+20M4+YsV9iaaXlXgCPtS7ZN7e6B/qX/Qal34/AGEtRT7yCXlzQAAAABJRU5ErkJggg=="
        alt=""
      />
      <span>{{ this.mation.address }}</span>
      <img class="phone"
        src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/25e14d800434e9a9d3ee9148dd6b033f.png"
        alt=""
      />
    </div>
    <div class="safe">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEUAAACsrKyrq6u8vLyrq6uqqqqurq6rq6uqqqqurq6rq6uqqqqrq6urq6urq6urq6urq6utra2qqqqrq6urq6urq6usrKyvr6+qqqqrq6urq6urq6uurq6rq6uqqqqqqqqqqqqrq6urq6uqqqqurq6rq6utra2tra2qqqpQWWHrAAAAKHRSTlMAa5UFpvkR9vIJxu3ey2FaSyrmiHNELxy1f2Y3INfQvq+ajHolUT0Y1wVGwAAAAV5JREFUOMt9k+l6gyAQRTGAu8bdqM2+nfd/whZJ22hMzg/9Zu6dEYQRE/K+Sr/EO77OWwxh7y6obh8CkTodfNCbdTBRg+tBg6cyaYL1RoOvavkrt8d50d0JgaJ0bfMCEucuply6LSRjk4rwIpYYYjLzXuEs6laZGzLVfDS0mlh+MqyA9IPh4tERu8sGd5X4oMQWorBbMHRAlOTiuvOA7NVQQ2k7yw1+u7CGHs6jrvBvz584mbwhhfzntcYfbELZHVWoR2tNIFwxsBOWnV3Kja2Nc+Jmo485WtpL4HEfCwvqMbHGA8zDHp5DaCsr9g8D+jQoIB8LzWHaVoVdjDyVZnfNqhrTJYl4kOI1Yk6Gvv0FR+J2pjcR1X8kQ+LpOAwRanLpE4r8Ka59DsF0LPZ4/V/DTqOkmBIoOLh2wkIoxSuOpqjN7/CJrmKJZgeq3sP+3fzKswdEqXhPe0zK2Wh/A7mFImCuxPBKAAAAAElFTkSuQmCC"
          alt=""
        />
        <span>查看食品安全档案</span>
      </div>
      <img
        class="arr"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWBAMAAAAGFmApAAAAG1BMVEUAAACvr6+np6eurq6srKyurq6urq6np6evr6+aZHW7AAAACHRSTlMAzhHbG8S8HSeiSm4AAAAwSURBVAjXY0gsYACBDBMwpdjsAKKYJMjhNoIp51YQyWIhBOY0KhDPYZAAcxhCwRwAI1kNBzm+faIAAAAASUVORK5CYII="
        alt=""
      />
    </div>
    <div class="peisong">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAS1BMVEUAAACsrKy1tbWqqqqrq6v///+rq6urq6urq6urq6urq6uurq6qqqqrq6usrKyqqqqrq6uqqqqqqqqrq6urq6uqqqqsrKywsLCqqqqPxk2bAAAAGHRSTlMAZQfy5wKLvamAUCrhcjmUQtbZokbKJg4RvoWNAAAA8ElEQVQoz4WTWZLDIAxEBWIxxgtekvT9TzqumQFFSRz3DxSvqiW0UJOfQlyZ1xgmT6+yo0OTG62m/QBwZ0rOxXQMDD2JfAKcsc3JOCD5RjsgKDs7A1vlCTD0IgOk/7hCNe9/jQaE9hhju84Y7HGMcBIXkPgO45GXO6wVFnvnaQLbz9gyJgroSGFRh0AR5gwbRFpRzvCOhRj5DGfwG75rrM1vQHg8m+vUHhvAxrfU6sfE8TBYSv1YK4uod0CpZWlFFdl0u9eitpaIpCV/DZ01kIZejcP1MJHfgPl9FL8P8oc12HPeZQ2ul0iv4MK8qBX8Aa70EZDD+3G4AAAAAElFTkSuQmCC"
        alt=""
      />
      <span>配送时间：{{ this.mation.delivery_time }}</span>
    </div>
    <div class="welcome">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAACYmJiYmJibm5uYmJiXl5ezs7OXl5eXl5eYmJiYmJiYmJiZmZmgoKCYmJiYmJiZmZmZmZmbm5ufn5+Xl5eYmJiZmZmYmJiampqXl5fFk318AAAAGXRSTlMAVKso+bYG6tzTS346FuW+cGgcEJKHW5sw6MqDlgAAAMFJREFUKM9909sSgyAMRdGDRGxFtF7b8/8/2po6iuPE/URYb2HAtfRqYNdUlGRqLRTWN/ou6AxdhBNM7skZJr/ICJMj2cPkmbLg4Djo4OdC6ygOBzs+0qrCLamR8fhkqedycdoHOWPQ7Ty5X58Zkd3K3uCREm4YLYc7rphu2LMFOjqD35x0z49/RThxQ/EAJuFWGTIeWkadgtea6ucH9+wC8vzqO6MfgatbD3q4su3KtivbXiqbTtawvaUk2I3ZF/wCwVMN845HN1gAAAAASUVORK5CYII="
          alt=""
        />
        <span>吃过才知味道，欢迎光临本店</span>
      </div>
      <img
        class="arr"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWBAMAAAAGFmApAAAAG1BMVEUAAACvr6+np6eurq6srKyurq6urq6np6evr6+aZHW7AAAACHRSTlMAzhHbG8S8HSeiSm4AAAAwSURBVAjXY0gsYACBDBMwpdjsAKKYJMjhNoIp51YQyWIhBOY0KhDPYZAAcxhCwRwAI1kNBzm+faIAAAAASUVORK5CYII="
        alt=""
      />
    </div>
    <div class="serve">
      <img
        src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/bc2175e8adc4beec375977e424b1f542.png"
        alt=""
      />
      <span class="shoreserve">商家服务</span>
      <img
        class="storefu"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arf8Arv9dh4GPAAAAFHRSTlMAQL+A8Q6ub6AmUOAwIJHQYM+GX0YPCd8AAACvSURBVCjPpdNBDsMgDARAg21wICRNyv/f2kbQqhEGDt0LkocVFwywOMpqyC1vJc+ghj0t4Dx04x0Q95kJMgySfzikT2nVOMc6NkdsOTiByhZblpgGzCQwYDxxNSV+E2PSjZkQbc22PK3FG7sTr3bQ2w+JiAB2Z/VtoofgdcupzKHMZPMKfyscj7XH5dhHDBK6XPInB9fntFuypuVcK5Kth4aVzHnykSdrMFmiyQq+AJ+LC5MukzlBAAAAAElFTkSuQmCC"
        alt=""
      />
      <span class="sfuinfor">该商家支持在线支付</span>
    </div>
    <div class="sale">
      <div class="top">
        <img src="@/assets/images/delete.png" alt="" />
        <span>{{ this.mation.full }}</span>
      </div>
      <div class="middle">
        <img src="@/assets/images/discount.png" alt="" />
        <span>{{ this.mation.sales }}</span>
      </div>
      <div class="bottom">
        <img
          class="storefu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arf8Arv9dh4GPAAAAFHRSTlMAQL+A8Q6ub6AmUOAwIJHQYM+GX0YPCd8AAACvSURBVCjPpdNBDsMgDARAg21wICRNyv/f2kbQqhEGDt0LkocVFwywOMpqyC1vJc+ghj0t4Dx04x0Q95kJMgySfzikT2nVOMc6NkdsOTiByhZblpgGzCQwYDxxNSV+E2PSjZkQbc22PK3FG7sTr3bQ2w+JiAB2Z/VtoofgdcupzKHMZPMKfyscj7XH5dhHDBK6XPInB9fntFuypuVcK5Kth4aVzHnykSdrMFmiyQq+AJ+LC5MukzlBAAAAAElFTkSuQmCC"
          alt=""
        />

        <span>该商家支持在线付款</span>
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
      mation: {},
    };
  },
  created() {
    axios
      .get(`http://admin.gxxmglzx.com/tender/test/get_store_id?id=${this.id}`)
      .then((res) => {
        console.log(1);
        console.log(res);
        console.log(1);
        this.mation = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.store {
  font-size: 14px;
  img {
    width: 15px;
    margin: 0 10px;
    vertical-align: middle;
  }
  .arr {
    width: 10px;
    height: 15px;
  }
  .adress {
    display: flex;
    margin: 18px 0;
    .phone{
        width: 20px;
        // margin-left: 10px;
        // border-left: 1px solid #e0e0e0;
    }
    img {
      align-self: center;
    }
    span {
      font-family: mtsi-font;
      line-height: 20px;
    }
  }
  .safe {
    margin: 18px 0;
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  }
  .peisong {
    margin: 18px 0;
    font-family: mtsi-font;
  }
  .welcome {
    margin: 18px 0;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
    div {
      display: inline-block;
    }
  }
  .serve {
    margin: 18px 0;
    .shoreserve {
      font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
      font-size: 14px;
      margin-right: 20px;
    }
    .sfuinfor {
      font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
      font-size: 12px;
    }
  }
  .sale {
    font-size: 14px;
    font-family: mtsi-font;
    .middle {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>