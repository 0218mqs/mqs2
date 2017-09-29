<template>
  <div class="main_tit">
    <div class="tit_text">
      <div class="line line_left"><img src="../../assets/log/my16.png" alt=""></div>
      <div class="center">
        <div class="imgs"><img src="../../assets/icon/todayimg.png" alt=""></div>
        <h3>天天特惠</h3>
      </div>
      <div class="line line_right"><img src="../../assets/log/my17.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main_list',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.main_tit{
  width:100%;
  height:0.8rem;
  margin:0.14rem 0 0.2rem;
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
 height: 0.24rem;
  img{
    display: block;
    width:100%;
  }
}
.line_left{
  width:0.35rem;
}
.line_right{
  width:0.25rem;
  margin-right:0.1rem;
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
</style>
