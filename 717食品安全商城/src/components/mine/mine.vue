<template>
  <div class="mine" @scroll="scrollFn">
    <div class="head">
      <span @click="sign_out"><i class="iconfont">&#xe6b3;</i></span>我的717商城<span></span>
    </div>
    <div class="user">
      <div class="user_img"><img src="../../assets/my/tit.png" alt=""></div>
      <p>路飞</p>
    </div>
    <div class="personal_stores">
      <span><i class="iconfont">&#xe506;</i>我的店铺</span><b>></b>
    </div>
    <div class="order_list">
      <div class="list_left">
        <dl>
          <dt><i class="iconfont">&#xe613;</i></dt>
          <dd>待付款</dd>
        </dl>
        <dl>
          <dt><i class="iconfont">&#xe652;</i></dt>
          <dd>待发货</dd>
        </dl>
        <dl>
          <dt><i class="iconfont">&#xe606;</i></dt>
          <dd>待收货</dd>
        </dl><dl>
          <dt><i class="iconfont">&#xe629;</i></dt>
          <dd>售后</dd>
        </dl>
      </div>
      <div class="list_right">
        <dl>
          <dt><i class="iconfont">&#xe623;</i></dt>
          <dd>我的订单<b>></b></dd>
        </dl>
      </div>
    </div>
    <ul class="main_list">
      <li>
        <i class="iconfont">&#xe927;</i><div class="names"><span>账户余额</span><b>></b></div>
      </li>
      <!-- <router-link to="/deliveryAddress" tag="li"> -->
      <li @click="to_address">
        <i class="iconfont">&#xe628;</i><div class="names"><span>地址管理</span><b>></b></div>
      </li>
      <!-- </router-link> -->
      <li>
        <i class="iconfont">&#xe712;</i><div class="names"><span>我的服务</span><b>></b></div>
      </li>
    </ul>
    <title-box></title-box>
    <recommend-box :listData = "now_list"></recommend-box>
  </div>
</template>

<script>

import recommendBox from "../recommend/recommend.vue"
import titleBox from "../recommend/title.vue"

import token from "../cookie/getCookie.js"

export default {
  name: 'mine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      now_list:null
    }
  },
  components:{
    recommendBox,
    titleBox
  },
  mounted(){
   setTimeout(()=>{
      this.now_list = this.$store.state.now_list;
   },300)
  },
  methods:{
    scrollFn(){
      console.log("adfsd")
    },
    sign_out(){
      function setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires;
      }
      setCookie("717_shop", "", -1)
      this.$router.replace("/home/index")
    },
    to_address(){
      this.$router.replace("/deliveryAddress")
    }
  },
  beforeRouteEnter(to,from,next){
    
    let cookie = document.cookie.split(";"),
        token = null;
        cookie.forEach((val,ind) => {
          if(val.indexOf("717_shop") != -1){
            token = val.split("=")[1];
          }
        })
        if(!token){
          next({path:"/signIn"});
        }else{
          next();
        }


    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mine{
  width:100%;
  height: 100%;
}
.head{
  width:100%;
  height: 0.88rem;
  padding:0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:0.34rem;
  color:#fff;
  position: absolute;
  top:0;
  left:0;
  span{
    display: block;
    width:0.6rem;
  }
  .iconfont{
    font-size:0.45rem;
    color:#fff;
    display: block;
  }
}
.user{
  width:100%;
  padding-top: 0.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../../assets/my/bg.png) no-repeat;
  background-size: 100% 100%;
  .user_img{
    width:1.24rem;
    height: 1.24rem;
    img{
      display: block;
      width:100%;
    }
  }
  p{
    width:100%;
    line-height: 0.7rem;
    font-size:0.3rem;
    color:#fff;
    text-align: center;
  }
}
.personal_stores{
  width: 100%;
  height: 1.32rem;
  padding:0 0.3rem;
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-bottom:solid 0.01rem #dbdbdb;
  background: #fff;
  span{
    display: block;
    font-size:0.36rem;
    color:#fc4141;
    display: flex;
    line-height: 1.32rem;
  }
  .iconfont{
    font-size:0.6rem;
    display: block;
    margin-right:0.3rem;
  }
  b{
    font-family: "宋体";
    font-size:0.4rem;
    color:#fc4141;
    margin-left:0.1rem;
  }
}
.order_list{
  width:100%;
  height:1.5rem;
  display: flex;
  background: #fff;
  font-size: 0.28rem;
  margin-bottom:0.2rem;
  dl{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#333333;
    i.iconfont{
      display: block;
      font-size:0.48rem;
    }
  }
  b{
    font-family: "宋体"
  }
  dt{
    margin-bottom:0.12rem;
  }
}
.list_left{
  flex:1;
  display: flex;
  dl{
    flex:1;
  }
}
.list_right{
  width:1.5rem;
  height:100%;
  border-left:solid 0.01rem #dbdbdb;
}
.main_list{
  width:100%;
  background: #fff;
  padding-left:0.3rem;
  margin-bottom:0.2rem;
  li{
    display: flex;
    height:1.04rem;
    font-size:0.3rem;
    align-items: center;
    color:#333333;
  }
  .iconfont{
    display: block;
    font-size:0.5rem;
    margin-right:0.14rem;
  }
  b{
    font-family: "宋体"
  }
  .names{
    flex:1;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:0.3rem;
    border-bottom:solid 0.01rem #dbdbdb;
  }
}
</style>
