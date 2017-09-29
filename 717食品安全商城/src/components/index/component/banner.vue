<template>
  <div class="banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../../assets/banner/banner2.png" alt=""></div>
      <div class="swiper-slide"><img src="../../../assets/banner/video.png" alt=""></div>
      <div class="swiper-slide"><img src="../../../assets/banner/banner2.png" alt=""></div>
    </div>
    <div class="swiper-pagination pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    new Swiper(".banner",{
      pagination:".pagination",
      autoplay:5000,
      speed:600,
      loop:true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
.banner{
  position: relative;
	width:100%;
  flex-shrink: 0;
  img{
    display: block;
    width:100%;
  }
}
.swiper-pagination-bullets{
  z-index: 988;
  width:100%;
  height:0.4rem;
  position: absolute;
  bottom:0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 0.5rem;
}
</style>
