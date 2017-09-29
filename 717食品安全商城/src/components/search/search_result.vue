<template>
  <div class="search_result">
    <div class="search_result_m">
      <div class="search_result_top">
        <span></span>
        <div class="search_box"><i class="iconfont">&#xe610;</i><input type="text" placeholder="搜索你想找的商品" ></div>
      </div>
      <div class="search_result_main">
        <ul class="main_top">
          <li class="bg">综合<span></span></li>
          <li>销量<span></span></li>
          <li>价格<span></span></li>
        </ul>
      </div>
    </div>
    <div class="search_result_data">
      <recommend-box :listData="listData"></recommend-box>
    </div>
  </div>
</template>

<script>
import recommendBox from "../recommend/recommend.vue"
export default {
  name: 'search_result',
  data () {
    return {
      listData:null
    }
  },
  components:{
    recommendBox
  },
  mounted(){
    setTimeout(() => {
      this.listData = this.$store.state.now_list
      console.log(this.listData)
    },300) 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.search_result{
	width:100%;
	height:100%;
  display: flex;
  background: #fff;
  flex-direction: column;
}
.search_result_m{
  flex-shrink: 0;
}
.search_result_top{
  height:0.88rem;
  padding:0 0.3rem;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    font-size:0.3rem;
    padding:0 0.22rem;
    color:#333333;
  }
}
.search_box{
  flex:1;
  display: flex;
  align-items: center;
  height:0.6rem;
  border-radius: 0.08rem;
  background:#f6f6f6;
  input{
    height: 100%;
    flex:1;
    background: none;
    border:none;
    outline: none;
    display: block;
    flex:1;
    line-height: 0.6rem;
    font-size: 0.28rem;
  }
}
.iconfont{
  display: block;
  line-height: 0.7rem;
  margin:0 0.14rem;
  font-size:0.45rem;
  color:#666;
}
.main_top{
  width:100%;
  height:0.58rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;
  li{
    line-height: 0.58rem;
    height:100%;
    font-size:0.26rem;
    color:#b3b3b3;
    position: relative;
    span{
      display: block;
      width:0;
      left:0;
      position: absolute;
      bottom:0.02rem;
      left:50%;
      transform: translateX(-50%);
      display: none;
      border-bottom:solid 0.12rem #fc4141;
      border-left:solid 0.07rem transparent;
      border-right:solid 0.07rem transparent;
    }
  }
  li.bg{
    color:#fc4141;
    span{
      display: block;
    }
  }
}
.search_result_data{
  flex-shrink: 1;
  overflow-y:auto;
  flex-flow: 1;
}

</style>
