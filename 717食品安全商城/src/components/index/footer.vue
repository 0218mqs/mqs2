<template>
  <div class="footer">
    <router-link class="slide" to="/home/index" tag="dl">
      <dt><!-- <img src="../../assets/icon/homepage.png" alt=""> --></dt>
      <dd>首页</dd>
    </router-link>
    <router-link class="slide" to="/home/classification" tag="dl">
      <dt><!-- <img src="../../assets/icon/classification.png" alt=""> --></dt>
      <dd>分类</dd>
    </router-link>
    <div class="community">
      <img src="../../assets/icon/inter.png" alt="">
    </div>
    <!-- <dl class="community">
      <dt></dt>
    </dl> -->
    <router-link class="slide" to="/home/shoppingCart" tag="dl">
      <dt><!-- <img src="../../assets/icon/car.png" alt=""> --></dt>
      <dd>购物车</dd>
    </router-link>
    <router-link class="slide" to="/home/mine" tag="dl">
      <dt><!-- <img src="../../assets/icon/people.png" alt=""> --></dt>
      <dd>我的</dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
.footer{
	width:100%;
	height:100%;
  border-top:solid 0.02rem #cccccc;
  position: absolute;
  top:0;
  left:0;
  display: flex;
  background:#fff;
  justify-content: space-between;
  align-items: center;
  dl{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }
  .slide dt{
    width:0.46rem;
    height:0.42rem;
    background: url(../../assets/icon/icons.png) no-repeat;
    background-size: 3rem;
  }
  .slide:nth-of-type(2) dt{
    background-position: 0 -0.45rem;
  }
  .slide:nth-of-type(3) dt{
    background-position: 0 -0.9rem;
  }
  .slide:nth-of-type(4) dt{
    background-position: 0 -1.35rem;
  }
  .bg{
    color:#fc4141;
  }
  .bg:nth-of-type(1) dt{
    background-position: -0.6rem 0;
    color:#fc4141;
  }
  .bg:nth-of-type(2) dt{
    background-position: -0.6rem -0.45rem;
    color:#fc4141;
  }
  .bg:nth-of-type(3) dt{
    background-position: -0.6rem -0.9rem;
    color:#fc4141;
  }
  .bg:nth-of-type(4) dt{
    background-position: -0.6rem -1.35rem;
    color:#fc4141;
  }
  dd{
    font-size: 0.28rem;
  }
  .community{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width:0.8rem;
      height:0.8rem;
      display: block;
    }
  }
}


</style>
