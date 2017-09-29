<template>
  <div class="details">
    <div class="header">
      <b @click="go_back"><</b>
      <div class="head_main">
        <span class="bg">商品</span>
        <span>详情</span>
      </div>
      <b><i class="iconfont">&#xe618;</i></b>
    </div>
    <div class="section">
      <div class="details_banner swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"><img src="../../assets/banner/video717.png" alt=""></li>
          <li class="swiper-slide"><img src="../../assets/banner/video717.png" alt=""></li>
          <li class="swiper-slide"><img src="../../assets/banner/video717.png" alt=""></li>
        </ul>
        <div class="swiper-pagination pagination"></div>
      </div>
      <div class="shop_info">
        <p>卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜卡易荞麦沙琪玛</p>
        <div class="price_btn">
          <div class="price">¥<span>109.00</span> <b>¥998.00</b></div>
          <button type="button">溯源查询</button>
        </div>
      </div>
      <div class="enter_shop">
        <div class="shop_name">
          <i class="iconfont">&#xe506;</i>
          <div class="name">
            <p>恒之然旗舰店</p>
            <span>店长：zxvcbvcbbvxcz</span>
          </div>
        </div>
        <button>进入店铺</button>
      </div>
      <title-box></title-box>
      <div class="recommend swiper-container">
        <div class="swiper-wrapper">
          <dl class="swiper-slide">
            <dt><img src="../../assets/banner/lloo.jpg" alt=""></dt>
            <dd>
              <p>卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜卡易荞麦沙琪玛</p>
              <span>¥109.00</span>
            </dd>
          </dl>
          <dl class="swiper-slide">
            <dt><img src="../../assets/banner/lloo.jpg" alt=""></dt>
            <dd>
              <p>卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜卡易荞麦沙琪玛</p>
              <span>¥109.00</span>
            </dd>
          </dl>
          <dl class="swiper-slide">
            <dt><img src="../../assets/banner/lloo.jpg" alt=""></dt>
            <dd>
              <p>卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜卡易荞麦沙琪玛</p>
              <span>¥109.00</span>
            </dd>
          </dl><dl class="swiper-slide">
            <dt><img src="../../assets/banner/lloo.jpg" alt=""></dt>
            <dd>
              <p>卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜卡易荞麦沙琪玛</p>
              <span>¥109.00</span>
            </dd>
          </dl><dl class="swiper-slide">
            <dt><img src="../../assets/banner/lloo.jpg" alt=""></dt>
            <dd>
              <p>卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜卡易荞麦沙琪玛</p>
              <span>¥109.00</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="foot_left">
        <dl>
          <dt><i class="iconfont">&#xe637;</i></dt>
          <dd>客服</dd>
        </dl>
        <dl>
          <dt><i class="iconfont">&#xe505;</i></dt>
          <dd>购物车</dd>
        </dl>
      </div>
      <div class="foot_add_cart">加入购物车</div>
      <div class="foot_purchase">立即购买</div>
    </div>
  </div>
</template>

<script>
import titleBox from "../recommend/title.vue"
export default {
  name: 'details',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
    let id = this.$route.params
    this.axios.post("/details",{params:id}).then((res) => {
      console.log(res)
    })
    // console.log(this.$route.params)
  },
  components:{
    titleBox
  },
  mounted(){
    new Swiper(".details_banner",{
      pagination:".pagination"
    })
    new Swiper(".recommend",{
      slidesPerView: 3.2
    })
  },
  methods:{
    go_back(){
      history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.details{
	width:100%;
	height:100%;
  display: flex;
  background: #f6f5f5;
  flex-direction: column;
}
.header{
  width:100%;
  height:0.88rem;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding:0.05rem 0.3rem;
  font-size:0.34rem;
  background: #fff;
  color:#333;
  b{
    font-family: "宋体";
    display: block;
    width:0.55rem;
  }
  .head_main{
    display: flex;
    justify-content: center;
  }
  span{
    margin:0 0.45rem;
    height:100%;
    line-height: 0.78rem;
  }
  .iconfont{
    display: block;
    font-size:0.5rem;
    font-weight: normal;
  }
  span.bg{
    border-bottom: solid 0.01rem #333;
  }
}
.section{
  width:100%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y:auto;
  padding-bottom:0.2rem;
}
.details_banner{
  background: #fff;
  height:7.5rem;
  img{
    display: block;
    width:100%;
    height:100%;
  }
}
.shop_info{
  width:100%;
  padding:0.2rem 0.3rem;
  background: #fff;
  margin-bottom:0.2rem;
  p{
    font-size:0.3rem;
    margin-bottom:0.2rem;
  }
  .price_btn{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:0.26rem;
    color:#fc4141;
    span{
      font-size:0.34rem;
      margin-right:0.14rem;
    }
    b{
      font-weight: normal;
      color:#b3b3b3;
      text-decoration: line-through
    }
    button{
      width:2rem;
      height:0.8rem;
      border-radius:0.1rem;
      background: #4f99f2;
      font-size:0.3rem;
      color:#fff;
    }
  }
}
.enter_shop{
  width:100%;
  height:1.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;
  font-size:0.3rem;
  background: #fff;
  margin-bottom:0.2rem;
  .iconfont{
    display: block;
    font-size:0.6rem;
    color:#ff6d1f;
    flex-shrink: 0;
    margin-right:0.2rem;
  }
  button{
    width:1.85rem;
    height:0.72rem;
    border:solid 0.01rem #666;
    font-size:0.3rem;
    color:#666;
    border-radius: 0.1rem;
  }
}
.shop_name{
  display: flex;
  align-items: center;
  span{
    font-size:0.26rem;
    color:#666;
  }
}
.recommend{
  width:100%;
  padding:0 0.25rem;
  background: #fff;
  img{
    display: block;
    width:100%;
  }
  dl{
    
    padding:0.2rem 0.05rem; ;
  }
  p{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  dd{
    font-size:0.28rem;
    text-align: center;
    span{
      line-height: 0.5rem;
      color:#fd2e2e;
    }
  }
}

.footer{
  flex-shrink: 0;
  height:1.2rem;
  display: flex;
  background: #fff;
  div{
    flex:1;
    font-size:0.32rem;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .foot_left{
    display: flex;
    height:100%;
  }
  dl{
    flex:1;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#333;
    i.iconfont{
      font-size: 0.5rem;
    }
  }
  dd{
    font-size:0.26rem;
  }
  .foot_add_cart{
    background: #fe8282;
  }
  .foot_purchase{
    background: #fc4141;
  }
}

</style>
