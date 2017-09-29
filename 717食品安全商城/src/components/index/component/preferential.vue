<template>
  <div class="preferential">
    <div class="preferential_tit">
      <div class="tit_text">
        <div class="imgs"><img src="../../../assets/icon/todayimg.png" alt=""></div>
        <h3>天天特惠</h3>
        <p>每天都有惊喜</p>
      </div>
      <div class="more">更多 <b>></b></div>
    </div>
    <div class="commodity">
      <div class="left"><img src="../../../assets/log/home1.png" alt=""></div>
      <div class="right">
        <img src="../../../assets/log/ruwei.png" alt="">
        <img src="../../../assets/log/gaodian.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preferential',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.preferential{
  width:100%;
  flex-shrink: 0;
}
.preferential_tit{
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
    align-items: center;
    padding-left:0.3rem;
  }
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
    margin-right:0.14rem;
  }
  p{
    font-size: 0.24rem;
  }
}
.more{
  font-size:0.26rem;
  position: absolute;
  line-height: 0.8rem;
  top:0;
  color:#333333;
  right:0.3rem;
  b{
    font-family: "宋体";
  }
}
.commodity{
  width:100%;
  display: flex;
  img{
    display: block;
    width:100%;
  }
}
.left{
  flex:1;
  padding-right:0.05rem;
}
.right{
  flex:1;
  display: flex;
  padding-left:0.05rem;
  flex-direction: column;
  justify-content: space-between;
}

</style>
