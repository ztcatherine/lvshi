<template>
  <div class="wrap divorce">
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
          src="static/img/banner.png"
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
      <div class="item-wrap">
        <div class="item">
          <img
            src="static/img/example1.png"
            class="example"
          >
          <div class="item-right">
            <div class="divorce-item-title">01 离婚诉讼</div>
            <div class="divorce-border-wrap">
              <div class="divorce-item-border"></div>
            </div>
            <div class="item-left-text">
              <span class="item-left-title">您的需求</span>
              <span class="item-right-text">:快速离婚？协议离婚？准备不充分延长诉讼时间？</span>
            </div>
            <div class="item-left-text">
              <span class="item-left-title">我的方案</span>
              <span class="item-right-text">:具体分析、制定方案、共同协商、判决离婚</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="item">
          <img
            src="static/img/example2.png"
            class="example"
          >
          <div class="item-right">
            <div class="divorce-item-title">02 财产分割</div>
            <div class="divorce-border-wrap">
              <div class="divorce-item-border"></div>
            </div>
            <div class="item-left-text">
              <span class="item-left-title">您的需求</span>
              <span>:平分财产！婚前财产！财产大部分属于我</span>
            </div>
            <div class="item-left-text">
              <span class="item-left-title">我的方案</span>
              <span>:制定财产分配策略，积极采集有利证据，诉讼离婚</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-wrap last-item">
        <div class="item">
          <img
            src="static/img/example3.png"
            class="example"
          >
          <div class="item-right">
            <div class="divorce-item-title">03 子女抚养</div>
            <div class="divorce-border-wrap">
              <div class="divorce-item-border"></div>
            </div>
            <div class="item-left-text">
              <span class="item-left-title">您的需求</span>
              <span>:争取孩子的监护权？多争取抚养费？抚养费不够怎么办？</span>
            </div>
            <div class="item-left-text">
              <span class="item-left-title">我的方案</span>
              <span>:制定监护保障方案、收集有利证据，诉讼抚养争议。</span>
            </div>
          </div>
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
          src="static/img/divorce0.png"
          class="case-left-img"
        >
        <div class="case-right-wrap">
          <div class="case-item">
            <img
              src="static/img/divorce1.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">离婚时,女方要求父母向其返还出嫁聘礼,是否可以被法院支持？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/divorce2.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">男女朋友同居分手后,如何向另一方主张分手费及损失赔偿？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/divorce3.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">双胞胎女儿在父母离婚后归哪一方抚养？男方是否可以抚养其中一个？</div>
            </div>
          </div>
          <div class="case-item">
            <img
              src="static/img/divorce4.png"
              class="case-item-img"
            >
            <div class="case-item-right">
              <div class="case-right-text">男方婚前以女方名义购买房产,离婚后如何保护其合法权益？</div>
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
      // imgArry:[
      //   'static/img/1.png',
      //   'static/img/2.png',
      //   'static/img/3.png',
      //   'static/img/user.png',
      // ]
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
        "木诚木律师事务所在上海还是有口碑的，早上预约了，10分钟后就有律师跟我联系了，帮我分析案情，制定方案，第二天就把律师函给发出去了，对方就认怂了，主动跟我协商解决，感谢木诚木律师事务所。",
        "木诚木这里我是听朋友介绍的，去了以后就有律师接待当事人，分析案情都很中肯，很为当事人着想的。",
        "我老公出轨了，把财产都给那个狐狸精了，多亏了木诚木的律师帮我，我才能拿回属于我的那份财产。",
        "女儿三岁的时候，她爸爸就要离婚，我真的舍不得把女儿交给他，多亏了木诚木律师事务所的律师帮我把孩子的抚养权夺了回来，我的付出也值得了。",
        "这里的律师还是很负责的，案子到哪一步了，需要我做什么配合，都说的清清楚楚，沟通很及时，最重要的是，胜诉了，他净身出口，哈哈哈。",
        "我要离婚的时候，要我净身出户，男方很有背景的，说公检法都有人，一分钱不给我也没事，多亏了木诚木的律师，帮我分析案情，收集证据，让我拿回了属于我的那份财产。",
        "一个很棒的律所，至少和我合作的律师是很负责的。开庭前，主动打电话问我，准备好没，他说我这边已经准备好了。叫我别紧张，案子十拿九稳，给了我很大的信心。更高兴的是，结果让人很满意。胜诉，诉求也基本上都实现了。真的很厉害的律师团队，",
        "专业的律师团队就是不一样，一个案子有好几个律师一起帮忙制定方案，收集证据。他们的专业给了我很大的信心，也终于帮我结束了这段失败的婚姻。",
        "木诚木律所十分正规和专业，咨询的时候律师非常耐心帮我解答疑惑，并且一针见血的指出关键点所在。委托后，律师积极和我沟通，由于我是办理离婚，在争取孩子抚养权方面，木诚木帮我争取到了孩子的抚养权，并且给我多争取到了不少权益。为办案的周律师点赞，十分感谢。",
        "以前我都觉得律师是有钱人请的，而我们这些打工的都是请不起的，但是因为工伤赔偿，让我不得不请律师，后面巧合下认识了何律师，何律师人很热情，跟我说法律的时候也通俗易懂，让我对自己的这场官司有了很大的信心，果然没让我失望，感谢何律师，收费也不是很高，对于我来说还是很合理的，谢谢",
        "要离婚了，他把财产都转移了，公司的账面也弄成了亏损。木诚木律师团队有专门负责公司法律的那块的，硬是从这里找到了证据。团队办案就是好，遇到什么方面的都有专业的律师去解决。感谢律师，让我拿到财产。",
        "没有打过官司的永远不知道有多繁琐，离个婚，对方律师提出了一大堆的要求，差点没把我吓死，我就没办法找了木诚木的律师，律师跟我分析了案情，给了我很大的安慰。后续，就是他们跟对方律师去协商，终于把事情完美的解决了。",
        "离婚了以后，对方对孩子特别不好，我想把孩子的抚养权要回来，但是对方一直都不同意，还是木诚木律所的律师，给他们发了律师函，最后顺利的协商解决好了"
      ];
      var i = (Math.random() * 1000) % (13 - 10);
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
  margin-bottom: 23px;
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
  padding-left: 22px;
  box-sizing: border-box;
}
.item-wrap {
  height: 225px;
  width: 728px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 20px 0;
}
.item {
  width: 728px;
  height: 160px;
  display: flex;
}
.example {
  width: 160px;
  height: 160px;
  margin-right: 21px;
}
.item-right {
  height: 100%;
  display: flex;
  align-content: center;
  width: 553px;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.divorce-item-title {
  width: 100%;
  color: #367870;
  font-size: 31px;
  font-weight: bold;
  text-align: left;
}
.divorce-border-wrap {
  width: 100%;
  height: 5px;
  margin: 15px 0 14px 0;
}
.divorce .divorce-item-border {
  width: 91px;
  height: 2px;
  border-bottom: 1px solid #eeeeee;
}
.item-left-text {
  width: 100%;
  color: #666666;
  font-size: 18px;
  text-align: left;
  display: flex;
  height: 40px;
  align-items: center;
}
.item-left-text .item-left-title {
  color: #3b3b3b;
  font-size: 22px;
  font-weight: bold;
  height: 40px;
  display: inline-block;
  line-height: 40px;
}
.item-right-text {
  height: 40px;
  display: inline-block;
  line-height: 40px;
  font-family: "PingFang SC";
}
.last-item {
  border-bottom: none !important;
  margin-bottom: 27px;
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
.nav-last {
  border-bottom: none;
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
  /* width: 268px; */
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
