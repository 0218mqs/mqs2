<template>
  <div class="notice">
    <div class="main">
      <div class="chapter"></div>
      <div class="logo" style="background: url(../assets/logo-qinghua.png)"></div>
      <div class="title">{{notice.name}}</div>
      <div class="info">
        <p><b>主修课程 : </b>{{notice.majors}}</p>
        <p><b>课程特色 : </b>{{notice.character}}</p>
      </div>
      <div class="btn_intr"></div>
      <div class="btn_share"></div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  name: 'notice',
  data () {
    return {
      notice:null,
      url:""
    }
  },
  created(){
    this.notice = this.$store.getters.get_notice;
    this.url = this.notice.logoUrl
    console.log(this.url)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.notice {
  width: 100%;
  height: 100%;
  padding: 0.82rem 0.52rem 0; }

@keyframes shake {
  0% {
    transform: rotateZ(0deg); }
  10% {
    transform: rotateZ(5deg); }
  20% {
    transform: rotateZ(0deg); }
  40% {
    transform: rotateZ(-2deg); }
  60% {
    transform: rotateZ(2deg); }
  80% {
    transform: rotateZ(-2deg); }
  100% {
    transform: rotateZ(0deg); } }
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/bg-matriculate.png) no-repeat;
  background-size: 100%;
  position: relative;
  animation: shake 0.6s linear 0.7s; }

@keyframes scale_m {
  0% {
    transform: scale(3, 3);
    opacity: 0; }
  100% {
    transform: scale(1, 1);
    opacity: 1; } }
.chapter {
  width: 2.58rem;
  height: 2.58rem;
  position: absolute;
  top: 0.05rem;
  right: -0.24rem;
  opacity: 0;
  background: url(../assets/seal.png) no-repeat;
  background-size: 100% 100%;
  animation: scale_m 0.3s ease 0.4s forwards; }

.logo{
  width:0.95rem;
  height:0.96rem;
  z-index: 1000;
  position: absolute;
  top:1.3rem;
  left:2.75rem;
}

.title {
  width: 100%;
  position: absolute;
  top: 2.56rem;
  left: 0;
  text-align: center;
  font-size: 0.46rem;
  color: #353535; }

.info {
  width: 100%;
  position: absolute;
  top: 3.24rem;
  left: 0;
  padding: 0 0.45rem;
  font-size: 0.28rem; }
  .info p {
    margin-bottom: 0.15rem;
    line-height: 0.38rem; }

.btn_intr, .btn_share {
  width: 2.82rem;
  height: 1.31rem;
  position: absolute;
  top: 5.32rem; }

.btn_intr {
  background: url(../assets/btn-intr.png) no-repeat;
  background-size: 100% 100%;
  left: 0.22rem; }

.btn_share {
  background: url(../assets/btn-share.png) no-repeat;
  background-size: 100% 100%;
  right: 0.22rem; }
</style>
