<template>
  <div class="wrap contract">
    <!-- 导航 -->
    <div class="nav-wrap">
      <div class="nav-left">
        <img
          src="static/img/logo.png"
          class="navlogo"
        >
        <div class="border"></div>
        <div class="name-wrap">
          <div class="name name1">上海木诚木律师事务所</div>
          <div class="name name2">全力以赴您的委托</div>
        </div>
      </div>
      <img
        src="static/img/navmore.png"
        class="navmore"
        @click="shownav()"
        v-show="!selectStatus"
      >
      <div
        class="navlist"
        style="z-index:5"
        v-show="selectStatus"
      >
        <div class="navimg">
          <img
            src="static/img/selectnav.png"
            class="navmore"
          >
        </div>
        <div
          class="nav-item"
          @click="godivorce"
        >
          <div>婚姻纠纷</div>
        </div>
        <div
          class="nav-item"
          @click="gohouse"
        >
          <div>房产纠纷</div>
        </div>
        <div
          class="nav-item"
          @click="gocontract"
        >
          <div>合同纠纷</div>
        </div>
        <div
          class="nav-item nav-last"
          @click="godebt"
        >
          <div>债务纠纷</div>
        </div>
      </div>
    </div>
    <div
      class="modal-black"
      style="z-index:4"
      v-show="selectStatus"
      @click="hidemodal()"
    >
    </div>

    <!-- 轮播 -->
    <el-carousel trigger="click">
      <el-carousel-item>
        <img 
          src="static/img/contractbanner.png"
          alt=""
        >
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="static/img/family.png"
          alt=""
        >
      </el-carousel-item>
    </el-carousel>
    <!-- 案例 -->
    <div class="content-wrap">
      <div class="example-top">
        <div class="example-title">01 合同诉讼</div>
        <div class="border-wrap"></div>
        <div class="example-content example-content1">
          <span class="example-content-title">您的需求:</span>
          <span>对方拒绝协商？想要快速解决？中断/中止诉讼时效？</span>
        </div>
        <div class="example-content">
          <span class="example-content-title">我的方案:</span>
          <span class="example-content-text">律师沟通提供相应证据,制定方案,协商/起诉,对方履行/赔偿。</span>
        </div>
      </div>

      <div class="example-center">
        <div class="example-title">02 合同违约协商</div>
        <div class="border-wrap"></div>
        <div class="example-content example-content1">
          <span class="example-content-title">您的需求:</span>
          <span>想解决对方不履行？延迟履行？不完全履行/履行不符约定？</span>
        </div>
        <div class="example-content">
          <span class="example-content-title">我的方案:</span>
          <span class="example-content-text">律师沟通,取得对方不履行证据,协商谈判/起诉,对方履行/赔偿相应损失。</span>
        </div>
      </div>
      <div class="example-last">
        <div class="example-title">03 合同解除/撤销</div>
        <div class="border-wrap"></div>
        <div class="example-content example-content1">
          <span class="example-content-title">您的需求:</span>
          <span>解除合同？撤销合同？</span>
        </div>
        <div class="example-content">
          <span class="example-content-title">我的方案:</span>
          <span class="example-content-text">个案分析,对方不履行或其他有利证据,协商/起诉,要求解除合同,赔偿损失。</span>
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <div class="bg-wrap">
      <div class="bg-title">服务流程</div>
      <div class="small">service procedure</div>
      <div class="bg-item-wrap">
        <div class="bg-item">
          <div class="bg-icon-wrap"><img
              src="static/img/icon1.png"
              class="bg-icon"
            ></div>
          <div class="icon-center">在线咨询</div>
          <div class="icon-bottom">免费电话咨询法律顾问</div>
        </div>
        <div class="bg-item">
          <div class="bg-icon-wrap"><img
              src="static/img/icon2.png"
              class="bg-icon"
            ></div>
          <div class="icon-center">分类律师</div>
          <div class="icon-bottom">为您分配专业的婚姻律师</div>
        </div>
        <div class="bg-item">
          <div class="bg-icon-wrap"><img
              src="static/img/icon3.png"
              class="bg-icon"
            ></div>
          <div class="icon-center">见面洽谈</div>
          <div class="icon-bottom">见面洽谈商讨制定解决方案</div>
        </div>
        <img
          src="static/img/arrow.png"
          class="arrow-icon"
        >
        <img
          src="static/img/arrow.png"
          class="arrow-icon-two"
        >
      </div>
    </div>
    <!-- 理由 -->
    <div class="reason-wrap">
      <div class="reason-top">
        <span>选择我们的</span>
        <span class="reason-title">理由</span>
      </div>
      <div class="reason-small">Reasons for choosing us</div>
      <div class="row-wrap">
        <div class="reason-item">
          <div class="reason-item-left">
            <img
              src="static/img/reason-icon1.png"
              class="resonImg"
            >
          </div>
          <div class="reason-item-right">
            <div class="reason-item-title">高效及时</div>
            <div class="reason-title-bottom">及时响应客户的服务需求，提供优质的客户服务质量</div>
          </div>
        </div>
        <div class="reason-item">
          <div class="reason-item-left">
            <img
              src="static/img/reason-icon2.png"
              class="resonImg"
            >
          </div>
          <div class="reason-item-right">
            <div class="reason-item-title">服务周到</div>
            <div class="reason-title-bottom">对于客户的每一个项目和案件提供细致的法律分析和切实可行的法律建议，积极解决法律问题</div>
          </div>
        </div>
      </div>
      <div class="row-wrap">
        <div class="reason-item">
          <div class="reason-item-left">
            <img
              src="static/img/reason-icon3.png"
              class="resonImg"
            >
          </div>
          <div class="reason-item-right">
            <div class="reason-item-title">疑难杂症</div>
            <div class="reason-title-bottom">对于疑难杂症案件具有丰富的经验以及专业技巧</div>
          </div>
        </div>
        <div class="reason-item">
          <div class="reason-item-left">
            <img
              src="static/img/reason-icon4.png"
              class="resonImg"
            >
          </div>
          <div class="reason-item-right">
            <div class="reason-item-title">规避风险</div>
            <div class="reason-title-bottom">专注于为客户规避潜在的法律风险或损失，争取更大的利益</div>
          </div>
        </div>
      </div>
      <div class="row-wrap">
        <div class="reason-item">
          <div class="reason-item-left">
            <img
              src="static/img/reason-icon5.png"
              class="resonImg"
            >
          </div>
          <div class="reason-item-right">
            <div class="reason-item-title">费用适中</div>
            <div class="reason-title-bottom">高性价比的法律服务，让每个人都请得起律师</div>
          </div>
        </div>
        <div class="reason-item">
          <div class="reason-item-left">
            <img
              src="static/img/reason-icon6.png"
              class="resonImg"
            >
          </div>
          <div class="reason-item-right">
            <div class="reason-item-title">团队强大</div>
            <div class="reason-title-bottom">公司有强大的律师团队，专业的人员提供专业的服务</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 成功案例 -->
    <div class="case-wrap">
      <div class="reason-top">
        <span>成功</span>
        <span class="reason-title">案例</span>
      </div>
      <div class="reason-small">Reasons for choosing us</div>
      <div class="case-bottom-wrap">
        <img
          src="static/img/contract0.png"
          class="case-left-img"
        >
        <div class="case-right-wrap">
          <div class="case-item">
            <img
              src="static/img/contract1.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">买卖合同中,未约定逾期付款违约金的,如何主张损失赔偿？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/contract2.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">仅约定由合同签订地法院管辖,但未明确合同具体签订地点的,约定管辖是否有效？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/contract3.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">装饰装修合同是否属于专属管辖？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/contract4.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">工程合同中如何主张停工窝工损失？</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 客户评价 -->
    <div class="assess-wrap">
      <div class="reason-top">
        <span>客户</span>
        <span class="reason-title">评价</span>
      </div>
      <div class="assess-small">Customer reviews</div>

      <div class="text-container">
        <div class="inner-container">
          <div
            class="assess-item-wrap"
            id="box1"
            v-for="(item, index) in arr"
            :key="index"
          >
            <img
              src="static/img/user.png"
              class="user"
            >
            <div class="assess-item">
              <div class="assess-item-title">
                <div class="user-wrap">
                  <span>手机用户</span>
                  <span class="sign">{{item.tel}}</span>
                  <span>对</span>
                  <span class="sign">{{item.name}}</span>
                  <span>的法律服务给予评价:</span>
                </div>
                <div>{{item.time}}</div>
              </div>
              <div class="assess">
                <span class="entrust">委托人评价:</span>
                <span>{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 电话咨询 -->
    <a
      class="bottom"
      href="tel:4008381386"
      style="z-index:5"
    >
      <img
        src="static/img/tel.png"
        class="tel"
      >
      <div>免费电话咨询</div>
    </a>
  </div>
</template>

<script>
import { bus } from "./bus.js";
const totalDuration = 2000;
export default {
  data() {
    return {
      selectStatus: false,
      number: 0,
      arr: [
        {
          tel: "139****9986",
          name: "陈律师",
          time: "1s前",
          text: ""
        },
        {
          tel: "139****9986",
          name: "陈律师",
          time: "2s前",
          text: ""
        },
        {
          tel: "139****9986",
          name: "陈律师",
          time: "3s前",
          text: ""
        },
        {
          tel: "139****9986",
          name: "陈律师",
          time: "4s前",
          text: ""
        },
        {
          tel: "139****9986",
          name: "陈律师",
          time: "5s前",
          text: ""
        }
      ]
    };
  },
  mounted() {},
  created() {
    this.getMoblieNum();
  },
  methods: {
    shownav() {
      this.selectStatus = true;
    },
    hidemodal() {
      this.selectStatus = false;
    },
    godivorce() {
      this.$router.push({ name: "divorce" });
    },
    gohouse() {
      this.$router.push({ name: "house" });
    },
    gocontract() {
      this.$router.push({ name: "contract" });
    },
    godebt() {
      this.$router.push({ name: "debt" });
    },
    getMoblieNum() {
      var numArray = new Array(
        "139",
        "138",
        "137",
        "136",
        "135",
        "134",
        "159",
        "158",
        "157",
        "150",
        "151",
        "152",
        "188",
        "187",
        "182",
        "183",
        "184",
        "178",
        "130",
        "131",
        "132",
        "156",
        "155",
        "186",
        "185",
        "176",
        "133",
        "153",
        "189",
        "180",
        "181",
        "177"
      );
      var nameArry = new Array(
        "赵",
        "孙",
        "李",
        "周",
        "吴",
        "郑",
        "王",
        "冯",
        "陈",
        "沈",
        "杨"
      );
      var firstTime = 1;
      var newArr = [];
      for (var i = 0; i < 10; i++) {
        newArr.push({ tel: "", name: "", time: "" });
      }
      var _this = this;
      newArr.forEach(function(item, index) {
        // 手机号
        var telhead = numArray[Math.floor((Math.random() * 1000) % 21)];
        var telcenter = "****";
        var tellast = Math.floor((Math.random() * 100000) % 9999);
        item.tel = telhead + telcenter + tellast;
        // 姓名
        var firstName = nameArry[Math.floor((Math.random() * 1000) % 10)];
        var lastName = "律师";
        item.name = firstName + lastName;
        // 时间
        if (index == 0) {
          item.time = firstTime;
        } else {
          var i = index - 1;
          var lastTime = Math.floor((Math.random() * 1000) % 10);
          var newTime = lastTime + newArr[i].time;
          item.time = newTime;
        }
      });
      // 时间转换
      newArr.forEach(function(item, index) {
        var h = Math.floor(item.time / 60);
        var m = item.time - h * 60;
        if (h > 0) {
          if (m > 0) {
            item.time = h + "小时" + m + "分钟前";
          } else {
            item.time = h + "小时前";
          }
        } else {
          if (m < 5) {
            item.time = "刚刚";
          } else {
            item.time = m + "分钟前";
          }
        }
      });

      //文本
      var textArry = [
        "签订的买卖合同，我们发货了对方一直不付钱，又说我们的货质量有问题什么的，委托木诚木律所发了一封律师函，对方怕了就马上付钱了！",
        "租房我感觉被中介骗了，现在中介起诉要我付中介费，找了木诚木律所的律师来代理出庭，他们十分认真负责，对我的案子十分重视，结果我也很满意。",
        "稀里糊涂的就签了个什么健身合同还付了钱，晚上才发现合同不太对劲，好像被忽悠了，就咨询律师看看有没有什么解决方法，木诚木律所的律师发了个律师函，对方就退钱了，棒棒哒。",
        "通过朋友买了个几万块的首饰，现在发现这个首饰有问题，和朋友协商也没什么结果。就委托了木诚木律所的律师出面帮我协商，现在已经解决了，开心。",
        "签合同的时候没有认真看，就被忽悠的直接签了，签完才发现有问题，但是也不知道能不能不按照合同做，就咨询了律师。木诚木律所的律师很专业的帮我分析了这个问题，也出了个解决方案，感觉他是真心为我考虑的，很靠谱。",
        "签了合同，但是对方不按照合同做，跟对方反应这个情况了，又给我扯皮，只能找律师。委托了木诚木律所的律师之后，第二天律师函就发出去了，效率高。",
        "没有签合同，我们交货了但是对方现在不肯付钱，拖了好长时间，现在干脆电话都打不通了，只能求助律师。木诚木律所的律师对这种情况很有经验，对方已经付钱了。",
        "很棒的律所，由一个团队专门负责一个案子，带领团队的律师专业能力也很强，态度认真负责，不论是开庭前后都能够与我保持沟通。",
        "十分认真负责，之前去律所咨询过，律师回答十分专业并且靠谱，也是站在我的角度考虑问题，提出了一个对我而言有利的解决方案。",
        "签了居间合同，现在出现矛盾 ，委托了木诚木律师事务所的律师帮我出面和对方协商谈判，有了非常好的成效，顺利解决问题。",
        "整容失败了，想要要回整容款，就委托了木诚木律师事务所出面帮我要回来，我自己去和整容医院谈的时候他们完全不理我，木诚木的律师很有经验，出面说了几个要点之后，他们就怕了，很快就退我钱了。",
        "合作了好几次的公司一直拖着不付钱，根据合同要付合同款项和违约金，委托了木诚木律师事务所起诉，办案律师很尽心，执行力也很强，效率很高，没几天就去立案起诉了。",
        "我是木诚木律所的法律顾问单位，有一家长期合作的单位一直拖着不付钱，如果直接起诉可能会影响以后的合作，就请木诚木律所出一份律师函，催对方付钱，木诚木律所效率很高，很快就起草好跟我确认后寄出去了。",
        "作为木诚木律师事务所的法律顾问单位，一有什么法律问题就联系他们，他们很负责，都能很快给出答案。有什么需要发律师函或起诉的也直接找他们，比如合同纠纷什么的，他们有很强的执行力，效率杠杠的，能力妥妥的。",
        "木诚木律师事务所的律师团队十分专业，对待案子也十分负责，我一个几万块标的的案子，他们也完全没有草率对待，与我沟通也很频繁，相当尽责，我十分满意。"
      ];
      var i = (Math.random() * 1000) % (15 - 10);
      var subarray = textArry.slice(i, i + 10);
      newArr.forEach(function(item, index) {
        item.text = subarray[index];
      });

      _this.arr = newArr;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wrap {
  width: 750px;
  height: auto;
  background-color: #fff;
  position: relative;
  padding-bottom: 105px;
}
.wrap .modal-black {
  position: absolute !important;
  width: 100%;
  min-height: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0);
  top: 0;
}
.wrap .el-carousel {
  width: 750px;
  height: 393px;
}
.el-carousel__container {
  height: 100% !important;
}
.wrap .el-carousel img {
  width: 750px;
  height: 393px;
}
.nav-wrap {
  width: 750px;
  height: 108px;
  background-color: #fff;
  padding: 0 50px 0 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.nav-left {
  width: 500px;
  display: flex;
  height: 108px;
  align-items: center;
}
.navlogo {
  width: 83px;
  height: 48px;
}
.border {
  width: 2px;
  height: 24px;
  border-right: 1px solid #e2e2e2;
  margin: 0 12px;
}
.name-wrap {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 250px;
  height: 100%;
  flex-direction: row;
}
.name {
  width: 250px;
  text-align: left;
}
.name1 {
  color: #3a3a3a;
  font-size: 24px;
}
.name2 {
  color: #8f8f8f;
  font-size: 14px;
}
.navmore {
  width: 53px;
  height: 41px;
}
.content-wrap {
  width: 750px;
  height: auto;
  padding-left: 43px;
  box-sizing: border-box;
  background-color: #fff;
}
.example-top {
  height: 252px;
  width: 699px;
  border-bottom: 1px solid #e9e9e9;
  padding: 50px 0 32px 0;
  box-sizing: border-box;
}
.example-center {
  height: 229px;
  width: 699px;
  border-bottom: 1px solid #e9e9e9;
  padding: 30px 24px 28px 0;
  box-sizing: border-box;
}
.example-last {
  height: 253px;
  width: 699px;
  padding: 34px 24px 50px 0;
  box-sizing: border-box;
}
.example-title {
  font-size: 32px;
  color: #367870;
  font-weight: bold;
  text-align: left;
}
.border-wrap {
  width: 90px;
  height: 2px;
  border-bottom: 1px solid #e9e9e9;
  margin: 10px 0 12px 0;
}
.example-content {
  font-size: 20px;
  color: #6e6e6e;
  text-align: left;
}
.example-content1 {
  margin-bottom: 10px;
}
.example-content-title {
  font-size: 22px;
  font-weight: bold;
  color: #3b3b3b;
}
.contract .item-border {
  width: 91px;
  height: 2px;
  border-bottom: 1px solid #eeeeee;
}
.bg-wrap {
  height: 240px;
  width: 750px;
  background-image: url("../../static/img/bg.png");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
}
.bg-item-wrap {
  width: 750px;
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
  position: relative;
}
.bg-title {
  margin: 0 auto;
  color: #fff;
  font-size: 26px;
  position: relative;
  top: 20px;
  height: 50px;
  font-weight: bold;
}
.small {
  font-size: 13px;
  color: #fff;
  margin-top: 2px;
}
.reason-small {
  color: #353535;
  font-size: 12px;
  margin: 2px 0 33px 0;
}
.assess-small {
  color: #353535;
  font-size: 12px;
  margin: 2px 0 21px 0;
}
.icon-wrap {
  width: 750px;
  height: 57px;
  padding: 0 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 23px 0 19px 0;
}
.icon-center {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
}
.icon-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #d6e5e3;
  font-family: "PingFang SC";
}
.bg-icon {
  width: 57px;
  height: 57px;
}
.arrow-icon {
  width: 35px;
  height: 13px;
  position: absolute;
  top: 20px;
  left: 240px;
}
.arrow-icon-two {
  width: 35px;
  height: 13px;
  position: absolute;
  top: 20px;
  left: 480px;
}
.reason-wrap {
  width: 750px;
  height: 650px;
  background-color: #f9f9f9;
  padding: 66px 28px 0 28px;
  box-sizing: border-box;
}
.reason-top {
  font-size: 26px;
  font-weight: bold;
  color: #353535;
  display: flex;
  justify-content: center;
}
.reason-top .reason-title {
  color: #34756f;
}
.nav-last {
  border-bottom: none;
}
.row-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 138px;
  margin-bottom: 11px;
}
.reason-item {
  height: 100%;
  width: 332px;
  background-color: #fff;
  padding: 0 5px 0 22px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.reason-item-left {
  height: 100%;
  display: flex;
  align-items: center;
  width: 68px;
  margin-right: 12px;
}
.resonImg {
  width: 68px;
  height: 68px;
}
.reason-item-right {
  height: 100%;
  display: flex;
  align-content: center;
  width: 228px;
  flex-wrap: wrap;
}
.reason-item-title {
  width: 100%;
  color: #3a3a3a;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-bottom: 5px;
}
.reason-title-bottom {
  color: #666666;
  font-size: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}
.case-wrap {
  height: 558px;
  width: 750px;
  padding: 34px 22px 0 22px;
  box-sizing: border-box;
}
.case-bottom-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 388px;
  display: flex;
  justify-content: space-between;
}
.case-left-img {
  width: 301px;
  height: 388px;
  margin-right: 25px;
}
.case-right-wrap {
  height: 388px;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.case-item {
  height: 82px;
  width: 400px;
  display: flex;
  box-sizing: border-box;
  /* justify-content: space-between; */
}
.case-item-img {
  width: 104px;
  height: 82px;
}
.case-item-right {
  height: 100%;
  position: relative;
  text-align: left;
  width: 100%;
}
.case-right-text {
  position: relative;
  top: 4px;
  color: #4e4e4e;
  font-size: 18px;
  text-align: left;
  margin-left: 12px;
}
.bottom {
  height: 105px;
  width: 750px;
  background-color: #1d675e;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  color: #fff;
}
.tel {
  width: 49px;
  height: 49px;
  margin-right: 19px;
}
.ceshi {
  height: 240px;
  width: 750px;
  display: inline-block;
}
.bg-item {
  width: 210px;
  height: 122px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.bg-icon-wrap {
  width: 100%;
}
.assess-wrap {
  width: 750px;
  height: auto;
  background-color: #f9f9f9;
  padding: 35px 0 0 27px;
}
.assess-item-wrap {
  width: 750px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 30px;
}
.user {
  width: 44px;
  height: 44px;
  margin-right: 13px;
}
.assess-item {
  width: 635px;
  height: auto;
  box-sizing: border-box;
  border-bottom: 1px solid #dadada;
  padding: 12px 26px 25px 0;
}
.assess-item-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #898989;
  margin-bottom: 26px;
}
.user-wrap {
  display: flex;
  margin-bottom: 26px;
  height: 30px;
  line-height: 30px;
}
.assess {
  width: 100%;
  height: auto;
  text-align: left;
  color: #444444;
  font-size: 22px;
  letter-spacing: 1px;
}
.sign {
  color: #b90000;
}
.entrust {
  color: #444444;
  font-weight: bold;
}
.text-container {
  width: 750px;
  height: 516px;
  overflow: hidden;
}
.inner-container {
  animation: myMove 60s linear infinite;
  animation-fill-mode: forwards;
}
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-80%);
  }
}
.navlist {
  width: 168px;
  height: 460px;
  background: rgba(46, 107, 99, 1);
  opacity: 0.9;
  position: absolute;
  display: block;
  top: 0;
  right: 0;
}
.navimg {
  height: 108px;
  width: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item {
  height: 85px;
  width: 100px;
  border-bottom: 1px solid #5b867f;
  margin: 0 auto;
  font-size: 24px;
  color: #f2fffd;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
