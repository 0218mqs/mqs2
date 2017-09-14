<template>
  <div class="load">
    <div class="loading">
      <div class="tit"></div>
      <div class="info">高考如果可以重来</div>
      <div class="meSey">我会说...</div>
      <div class="load_count">{{count}}%</div>
      <div class="loading_logo"><img src="../assets/logo-loading.png" alt=""></div>
    </div>
  </div>
</template>

<script>

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  name: 'load',
  data () {
    return {
      count:0
    }
  },
  mounted(){
    this.axios.get("/data").then((data) => {
      let time = setInterval(() => {
        this.count ++;
        if(this.count >= 100){
          clearInterval(time);
          this.$store.dispatch("change_fn",data.data)
          this.$router.replace("/index")
        }
      },10)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loading {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1.12rem; }

.tit {
  width: 100%;
  height: 2.89rem;
  background: url(../assets/loading-img.png) no-repeat center center;
  background-size: 4.97rem 2.89rem; }

.info {
  width: 100%;
  line-height: 0.65rem;
  color: #209861;
  font-size: 0.38rem;
  text-indent: 1.52rem; }

.meSey {
  width: 100%;
  font-size: 0.92rem;
  line-height: 1.3rem;
  color: #209861;
  text-indent: 2.53rem; }

.load_count {
  width: 100%;
  text-align: center;
  line-height: 1.8rem;
  font-size: 0.32rem; }

.loading_logo {
  width: 2.82rem; }
  .loading_logo img {
    display: block;
    width: 100%; }
</style>
