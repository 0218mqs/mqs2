<template>
  <div class="dynamics">
    <div class="dynamics_tit">商城动态</div>
    <div class="dynamics_info swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">绿色无公害 无污染 无添加有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜</li>
        <li class="swiper-slide">绿色无公害 无污染 无添加有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜</li>
        <li class="swiper-slide">绿色无公害 无污染 无添加有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜</li>
        <li class="swiper-slide">绿色无公害 无污染 无添加有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dynamics',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
    new Swiper(".dynamics_info",{
      loop:true,
      autoplay:2000,
      speed:1000,
      direction: 'vertical',
      resistanceRatio: 0
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.dynamics{
  display: flex;
  height:1.2rem;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding:0.1rem 0.3rem 0.2rem;
  overflow:hidden;
  flex-shrink: 0;
}
.dynamics_tit{
  width:0.6rem;
  font-size:0.3rem;
  color:#ff6d00;
  margin-right:0.15rem;
}
.dynamics_info{
  flex:1;
  height:100%;
  border:solid 0.02rem #e5e5e5;
  border-radius:0.1rem;
  color:#333333;
  font-size: 0.24rem;
}
li{
  /*height:1.4rem;*/
  color:#666;
  padding:0.06rem 0.12rem;

}

</style>
