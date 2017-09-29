<template>
  <div class="whole">
    <div class="whole_tit">
      <span><b><</b></span>
      我的订单
      <span><i class="iconfont">&#xe6ad;</i></span>
    </div>
    <div class="section">
      <ul class="nav_list">
        <li class="bg">全部</li>
        <li>待付款</li>
        <li>待发货</li>
        <li>待付款</li>
        <li>售后</li>
      </ul>
      <div class="main_list">
        <div class="list">
          <div class="list_tit">
            <div class="shop_name">
              <div class="imgs"><img src="../../assets/log/tit.png" alt=""></div>
              <span>小鱼的店 <b>></b></span>
            </div>
            <span class="prompt_box">等待买家发货</span>
          </div>
          <div class="commodity">
            <dl>
              <dt><img src="../../assets/log/nav1.png" alt=""></dt>
              <dd>
                <p>维维嚼益嚼水果大豆棒橙味维维嚼益嚼水果大豆棒橙味维维嚼益嚼水果大豆棒橙味</p>
                <div class="price_count">
                  <span><b>¥ </b>109.00</span><b>×1</b>
                </div>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/log/nav1.png" alt=""></dt>
              <dd>
                <p>维维嚼益嚼水果大豆棒橙味维维嚼益嚼水果大豆棒橙味维维嚼益嚼水果大豆棒橙味</p>
                <div class="price_count">
                  <span><b>¥ </b>109.00</span><b>×1</b>
                </div>
              </dd>
            </dl>
          </div>
          <div class="price">
            合计：<b>¥</b><span>114.00</span> <div class="freight">(运费：¥5:00)</div>
          </div>
          <div class="buts">
            <span>提醒卖家发货</span>
            <span>申请退款</span>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'whole',
  data () {
    return {
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.whole{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
}
.whole_tit{
  width:100%;
  height:0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;
  font-size:0.34rem;
  color:#333;
  background: #fafafb;
  border-bottom:solid 0.01rem #e5e5e5;
}
.whole_tit span{
    display: block;
    width:0.6rem;
  }
.whole_tit .iconfont{
    font-size:0.45rem;
  }
.whole_tit b{
    font-family: "宋体";
  }
.whole_tit span:nth-of-type(2){
    text-align: center;
  }
.nav_list{
  width:100%;
  display: flex;
  height:0.9rem;
  border-bottom:solid 0.01rem #ccc;
}
.nav_list li{
  flex:1;
  flex-shrink: 0;
  height:100%;
  font-size: 0.3rem;
  color:#333;
  line-height: 0.9rem;
  text-align: center;
}
.nav_list li.bg{
  color:#fc4141;
  border-bottom:solid 0.01rem #fc4141;
}
.list{
  width:100%;
  margin-bottom:0.2rem;
  background: #fff;
}
.list_tit{
  width:100%;
  height:0.78rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;
  border-bottom: solid 0.01rem #e5e5e5;
}
.list_tit .shop_name{
  display: flex;
  align-items: center;
  color:#333;
}
.list_tit .shop_name span{
  font-size:0.3rem;
}
.list_tit .shop_name b{
  font-family: "宋体";
}
.list_tit .imgs{
  width:0.58rem;
  height: 0.58rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 0.16rem;
}
.list_tit .imgs img{
  display: block;
  width:100%;
}
.list_tit .prompt_box{
    font-size:0.28rem;
    color:#fc4141;
  }
.commodity{
  width:100%;
}
.commodity dl{
  width:100%;
  display: flex;
  padding:0.2rem 0.3rem;
  border-bottom:solid 0.01rem #ccc;
}
.commodity dt{
  width:2.03rem;
  height:2.03rem;
  border:solid 0.01rem #ccc;
  margin-right:0.2rem;
}
.commodity dt img{
  display: block;
  width:100%;
}
.commodity dd{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.commodity dd p{
  width:100%;
  font-size:0.28rem;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.commodity dd .price_count{
  width:100%;
  height:0.74rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    font-size:0.3rem;
  }
}
.commodity dd b{
  font-size:0.28rem;
  font-weight: normal;
  color:#8c8c8c;
}
.price{
  width:100%;
  height:0.9rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size:0.3rem;
  background: #fff;
  padding-right:0.4rem;
  color:#b2b2b2;
}
.price b,span{
    color:#333;
  }
.price b{
    font-size: 0.28rem;
  }
.freight{
  font-size:0.28rem;
  color:#b2b2b2;
  margin-left:0.2rem;
}
.buts{
  width:100%;
  padding-bottom:0.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.buts span{
  display: block;
  line-height: 0.62rem;
  height:0.62rem;
  padding:0 0.3rem;
  border:solid #333 0.01rem;
  border-radius: 0.1rem;
  font-size:0.3rem;
  margin-right:0.3rem;
}
</style>
