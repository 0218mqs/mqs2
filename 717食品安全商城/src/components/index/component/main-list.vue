<template>
  <div class="main_list">
    <div class="main_tit">
      <div class="tit_text">
        <div class="line"><img src="../../../assets/log/1.png" alt=""></div>
        <div class="center">
          <div class="imgs"><img src="../../../assets/icon/todayimg.png" alt=""></div>
          <h3>天天特惠</h3>
        </div>
        <div class="line"><img src="../../../assets/log/1.png" alt=""></div>
      </div>
      <div class="more">更多 <b>></b></div>
    </div>

    <recommend-box :listData = "listData"></recommend-box>

  </div>
</template>

<script>
import recommendBox from "../../recommend/recommend"
export default {
  name: 'main_list',
  data () {
    return {
      msg: '',
      listData:null
    }
  },
  components:{
    recommendBox
  },
  mounted(){
    setTimeout(() => {
      this.listData = this.$store.state.now_list
    },300)  
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.main_list{
  width:100%;
  flex-shrink: 0;
}
.main_tit{
  width:100%;
  height:0.8rem;
  margin:0.14rem 0;
  position: relative;
  background: #fff;
  .tit_text{
    width:100%;
    height:100%;
    color:#ff6d00;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left:0.3rem;
  }
  
}
.line{
 /*  width:0.7rem;
 height: 100%;
 display: flex;
 align-items: center; */
  img{
    display: block;
  }
}
.center{
  display: flex;
  margin:0 0.5rem;
  .imgs{
    width:0.4rem;
    height:0.4rem;
    margin-right:0.1rem;
    img{
      display: block;
      width:100%;
    }
  }
  h3{
    font-size:0.3rem;
  }
}
.more{
  font-size:0.26rem;
  position: absolute;
  color:#333333;
  line-height: 0.8rem;
  top:0;
  right:0.3rem;
  b{
    font-family: "宋体";
  }
}

</style>
