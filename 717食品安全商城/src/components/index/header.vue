<template>
  <div class="header">
    <!-- <dl>
      <dt><img src="../../assets/icon/icon02.png" alt=""></dt>
      <dd>服务站</dd>
    </dl> -->
    <div class="icon"><img src="../../assets/icon/homelo.gif" alt=""></div>
    <div class="search">
      <i class="iconfont">&#xe610;</i>
      <input type="text" @focus="go_to_search" placeholder="请输入您要购买的商品">
    </div>
    <dl>
      <dt><img src="../../assets/icon/icon01.png" alt=""></dt>
      <dd>我的店铺</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    go_to_search(){
      this.$router.push('/home/search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
.header{
	width:100%;
	height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;

  .icon{
    width:1rem;
    margin-right:0.1rem;
    img{
      display: block;
      width:100%;
    }
  }
  dl{
    width:1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  dt{
    width:0.55rem;
    img{
      display: block;
      width:100%;
    }
  }
  dd{
    font-size: 0.26rem;
    color:#fc4141;
  }
  .search{
    flex:1;
    height:0.7rem;
    border-radius: 0.06rem;
    background:#f5f5f5;
    margin:0 0.14rem;
    display: flex;
    .iconfont{
      display: block;
      line-height: 0.7rem;
      margin:0 0.14rem;
      font-size:0.45rem;
      color:#666;
    }
    input{
      display: block;
      flex: 1;
      height:100%;
      line-height: 0.6rem;
      background: none;
      font-size:0.26rem;
    }
  }
}


</style>
