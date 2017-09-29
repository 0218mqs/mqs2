<template>
  <div class="search">
    <div class="search_top">
      <div class="search_box"><i class="iconfont">&#xe610;</i><input type="text" placeholder="搜索你想找的商品" v-model.trim="value"></div>
      <span @click="addLoca">搜索</span>
    </div>
    <div class="main_search">
      <div class="record">
        <span>最近搜索</span>
        <i class="iconfont"></i>
      </div>
      <p v-if="!list">无搜索历史</p>
      <ul v-else>
        <li v-for="(item,ind) in list" @click="clickFn(ind)">{{item}}</li>
      </ul>
    </div>
    <div class="main_search">
      <div class="record">
        <span>大家都在搜</span>
      </div>
      <ul>
        <li>大米</li>
        <li>小米</li>
        <li>巧克力</li>
        <li>大米</li>
        <li>小米</li>
        <li>巧克力</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      value: '',
      targ:true,
      list:null
    }
  },
  created(){
    this.list = JSON.parse(window.localStorage.getItem("record"))
  },
  watch:{
    value(){
      console.log(this.value)
    }
  },
  methods:{
    addLoca(){
      let ls = window.localStorage,
          arr = [];

      if(this.value){
        if(ls.record){
          arr = [...JSON.parse(ls.getItem("record"))];
        }
        arr.push(this.value)
        ls.setItem("record",JSON.stringify(arr))
        this.value = ""
        this.$router.push("/search_result")
      }
      
    },
    clickFn(ind){
      console.log(ind)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.search{
	width:100%;
	height:100%;
  display: flex;
  background: #fff;
  flex-direction: column;
}
.iconfont{
  display: block;
  line-height: 0.65rem;
  margin:0 0.14rem;
  font-size:0.45rem;
  color:#666;
}
.search_top{
  height:0.88rem;
  width:100%;
  padding-left:0.48rem;
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
  height:0.6rem;
  border-radius: 0.08rem;
  background:#f6f6f6;
  display: flex;
  input{
    height: 100%;
    background: none;
    border:none;
    outline: none;
    display: block;
    flex:1;
    line-height: 0.6rem;
    font-size: 0.28rem;
  }
}
.main_search{
  width:100%;
  min-height: 2.1rem;
  p{
    line-height: 0.5rem;
    font-size:0.32rem;
    padding:0 0.3rem;
    color:#333333;
  }
}
.record{
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.97rem;
  height:0.97rem;
  font-size:0.3rem;
  color:#666666;
  padding:0 0.3rem;
}
ul{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  padding:0 0.15rem;
}
li{
  height: 0.6rem;
  line-height: 0.6rem;
  border:solid 0.01rem #999;
  padding:0 0.25rem;
  color:#666;
  font-size:0.3rem;
  margin:0 0.15rem 0.3rem;
  border-radius: 0.1rem;
}


</style>
