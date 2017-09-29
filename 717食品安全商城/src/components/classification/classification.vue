<template>
  <div class="classification">
    <div class="search_box">
      <div class="search">
        <i class="iconfont">&#xe610;</i>
        <input type="text" placeholder="请输入要购买的商品" @focus="go_to_search">
      </div>
      <div class="massge"><i class="iconfont">&#xe632;</i></div>
    </div>
    <div class="main_box">
      <div class="main_left" ref="main_left">
        <ul class="swiper">
          <router-link v-for="(item,ind) in listData" :to="'/home/classification/fic/'+ind" :key="ind" tag="li">{{item.name}}</router-link>
        </ul>
      </div>
      <div class="main_right">
        <fic-box :fic_data="fic_data"></fic-box>
      </div>
    </div>
  </div>
</template>

<script>
import ficBox from "./fic.vue";
export default {
  name: 'classification',
  data () {
    return {
      listData:null,
      fic_data:null
    }
  },
  components:{
    ficBox
  },
  watch:{
    "$route":function(){
      let id = this.$route.params.id
      this.fic_data = this.listData[id].groupList;
    }
  },
  methods:{
    go_to_search(){
      this.$router.push('/home/search')
    },
    fn(){
      var that = this,
          id = this.$route.params.id;
          // console.log(id)
      this.axios.get("/client").then(function(data){
        var datas = data.data.result.firstTabCate;

            that.listData = datas;
            that.fic_data = datas[0].groupList;
      })
    }
  },
  created(){
    this.fn()
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.classification{
  width:100%;
  padding-top:0.9rem;
  overflow: hidden;
}

.search_box{
  width:100%;
  height:0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  background: #fff;
  z-index: 999;
  border-bottom: solid 0.02rem #e5e5e5;
}
.search{
  width:5.6rem;
  height:0.56rem;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.08rem;
  input{
    display: block;
    background: none;
    border:none;
    outline: none;
    width:2.5rem;
    height:100%;
    line-height: 0.56rem;
  }
  .iconfont{
    display: block;
    color:#999999;
    line-height: 0.7rem;
    margin:0 0.14rem;
    font-size:0.45rem;
    color:#666;
  }
}
.massge{
  width:0.55rem;
  height:100%;
  line-height: 0.9rem;
  font-size:0.5rem;
  color:#333333;
  position: absolute;
  top:0;
  right:0.22rem;
  .iconfont{
    display: block;
    line-height: 0.9rem;
    margin:0 0.14rem;
    font-size:0.4rem;
    color:#666;
  }
}

.main_box{
  width:100%;
  height:100%;
  display: flex;
  justify-content: space-between;
}
.main_left{
  width: 2.2rem;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  z-index: 0;
  background: #e8e8e8;
  text-align: center;
  ul{
    height:100%;
    overflow-y:auto;
    padding:0.9rem 0 1rem;
  }
  li{
    width: 100%;
    height: 0.9rem;
    font-size: 0.28rem;
    line-height: 0.9rem;
  }
  li.bg{
    background: #fff;
    color:#fc4141;
    border-left:solid 0.04rem #fc4141;
  }
}
.main_right{
  flex:1;
    height:100%;
  padding-left:2.2rem;
  overflow: hidden;
  background: #fff;
}
</style>
