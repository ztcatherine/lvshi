<template>
  <div class="wrap house">
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
        <div
          class="navimg"
          @click="hidenav()"
        >
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
          src="static/img/housebanner.png"
          alt=""
        >
      </el-carousel-item>
      <el-carousel-item>
        <img src="static/img/family.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 案例 -->
    <div class="content-wrap">
      <div class="example-top">
        <div class="example-title">01 房产诉讼</div>
        <div class="border-wrap"></div>
        <div class="example-content example-content1">
          <span class="example-content-title">您的需求:</span>
          <span>对想解决房屋买卖纠纷？租赁纠纷？赠与纠纷？</span>
        </div>
        <div class="example-content">
          <span class="example-content-title">我的方案:</span>
          <span class="example-content-text">律师沟通，事件分析，制定方案，沟通协商，起诉确权，拿回房产所有权。</span>
        </div>
      </div>

      <div class="example-center">
        <div class="example-title">02 婚姻房产纠纷</div>
        <div class="border-wrap"></div>
        <div class="example-content example-content1">
          <span class="example-content-title">您的需求:</span>
          <span>婚前房产？共同财产？一人一半？</span>
        </div>
        <div class="example-content">
          <span class="example-content-title">我的方案:</span>
          <span class="example-content-text">收集证据，起诉/协商，拿回属于自己的份额。</span>
        </div>
      </div>
      <div class="example-last">
        <div class="example-title">03 房产继承纠纷</div>
        <div class="border-wrap"></div>
        <div class="example-content example-content1">
          <span class="example-content-title">您的需求:</span>
          <span>继承房产！房产份额！房产属于我！</span>
        </div>
        <div class="example-content">
          <span class="example-content-title">我的方案:</span>
          <span class="example-content-text">律师沟通积极收集有利证据，为自己争取房产继承份额最大化。</span>
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
          src="static/img/house0.png"
          class="case-left-img"
        >
        <div class="case-right-wrap">
          <div class="case-item">
            <img
              src="static/img/house1.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">私人房屋抵押贷款有风险吗,是否所有的房产都可以进行抵押贷款？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/house2.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">小产权房或者公益用房是否可以私下进行抵押,如何能够保证抵押权的实现？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/house3.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">夫妻离婚,一方婚前购买的房屋如何认定房屋归属？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/house4.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">被继承人的房屋不具有合法产权,如何实现继承？</div>
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
      number: 0,
      selectStatus: false,
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
        "我是经过朋友推荐知道木诚木律师事务所的，委托他们果然没错，认真负责，我对案子有什么疑问都能马上回答我，打消我的疑虑。",
        "到木诚木律师咨询我家房子碰到的问题，分析的很到位，也给出很好的解决方案，目前已解决，给一百个赞。",
        "这里的律师还是很负责的，委托之后马上就着手准备我的案子了，我提出的要求都能满足，包括我说要抓紧时间尽快起诉也能满足。",
        "非常棒的律所，一般都是一个团队来负责一个案子，律师能和我及时沟通，对方什么态度什么想法什么意思也能马上给我一个反馈，然后问我的想法之后再给出建议，非常棒。",
        "木诚木律师事务所的执行力真的值得赞扬，委托之后律师认真负责，而且行动非常快，完全不需要我去催促去提醒，而且他们主动来跟我反映情况。",
        "这里不仅律师工作能力厉害，对于客户也是很尽心尽责，有什么问题问他们，他们都能耐心的回答，为我解惑。",
        "买房碰到问题，跟对方协商也没结果，觉得没希望了但还不死心就委托木诚木律师事务所之后，竟然解决了！真的是太感谢了。",
        "碰到了无良中介，明明自己有问题竟然还起诉我，就委托了木诚木律师事务所来帮我出庭，他们非常认真负责，法院判决结果我很满意。",
        "这里的律师能力很强，也做过很多成功案例，让他们来办理我的案子，我很放心。",
        "租房和房东发生矛盾，房东找我错处让我搬出去，我没办法只能求助律师了，木诚木律所的律师帮我和房东进行协商，房东不要我搬出去了，也没有找过我麻烦，非常感谢律师。",
        "本来我是没想着要请律师的，但是没办法，不解决一直拖着损失太大了，和对方又谈不出一个结果，经朋友介绍就委托了木诚木律所来帮我解决这个问题，果然他们很有经验，没多久对方就同意和我协商解决了。",
        "委托木诚木律师事务所帮我起诉，律师很负责，准备证据啊起诉状啊什么的，出庭前还问我要不要出庭，有什么想法，底线是什么，都尊重我的意见，最后胜诉了，开心。",
        "收到法院传票的时候吓了一跳，老百姓谁都没想过要上法庭，还好委托了木诚木律所之后就不用我操心了，只要表达我的意见就行，他们去出庭，他们去和对方辩论，十分省心，重要的是，对方败诉了，哈哈。",
        "我就是到律所去咨询，回答我问题的律师十分专业，也十分耐心的回答我的所有问题。",
        "在外地买了个房，没想到起诉还要去外地法院，麻烦死了，委托木诚木律所之后就不需要我到处奔波了，结果是法院判决对方败诉，满意。"
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
  height: 100%;
  flex-direction: row;
  width: 250px;
}
.name {
  text-align: left;
  width: 250px;
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
  padding: 50px 0 31px 0;
  box-sizing: border-box;
}
.example-center {
  height: 205px;
  width: 699px;
  border-bottom: 1px solid #e9e9e9;
  padding: 30px 0 32px 0;
  box-sizing: border-box;
}
.example-last {
  height: 225px;
  width: 699px;
  padding: 34px 0 52px 0;
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
.house .item-border {
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
.nav-last {
  border-bottom: none;
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
    transform: translateY(-60%);
  }
}
</style>
