<template>
  <div class="index">
    <div class="wrap">
      <div class="porse">
        <img src="../assets/home-pepole.png" alt="">
        <div class="back"></div>
        <router-link to="/list/1" replace tag="div" class="science"></router-link>
        <router-link to="/list/0" replace tag="div" class="liberal_arts"></router-link>
        <p class="info">请选择科目，进行答题</p>

        <div class="hand_left"></div>
        <div class="hand_right"></div>
        
        <div class="yes"></div>
        <div class="wrong"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrap {
  width: 100%;
  height: 100%; }

.porse {
  width: 100%;
  height: 100%;
  padding: 0 0.82rem;
  position: relative; }
  .porse img {
    display: block;
    width: 100%; }
  .porse .info {
    width: 100%;
    height: 0.65rem;
    color: #d67230;
    font-size: 0.32rem;
    text-align: center;
    position: absolute;
    top: 3.9rem;
    left: 0; }

@keyframes back_m {
  0% {
    top: -1.65rem; }
  80% {
    top: 1.4rem; }
  100% {
    top: 0.82rem; } }
.back {
  width: 3.2rem;
  height: 1.65rem;
  background: url(../assets/home-title.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: -1.65rem;
  left: 2.16rem;
  animation: back_m ease 0.6s forwards; }

@keyframes moves {
  0% {
    transform: scale(1, 1);
    opacity: 1; }
  100% {
    transform: scale(0.8, 0.8);
    opacity: 0.8; } }
.science, .liberal_arts {
  position: absolute;
  top: 4.6rem;
  animation: moves linear 1.6s infinite alternate; }

.science {
  background: url(../assets/f-like.png) no-repeat;
  background-size: 100% 100%;
  width: 2.63rem;
  height: 1.29rem;
  left: 1.04rem; }

.liberal_arts {
  background: url(../assets/f-wenke.png) no-repeat;
  background-size: 100% 100%;
  width: 2.3rem;
  height: 1.31rem;
  right: 1rem; }

.hand_left {
  width: 0.64rem;
  height: 1.08rem;
  background: url(../assets/home-left-hand.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 6.4rem;
  left: 0; }

.hand_right {
  width: 0.78rem;
  height: 1.39rem;
  background: url(../assets/home-right-hand.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 5.6rem;
  right: 0; }

.yes {
  width: 1rem;
  height: 1.3rem;
  background: url(../assets/home-icon-1.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 9.2rem;
  left: 1.5rem; }

.wrong {
  width: 1rem;
  height: 0.74rem;
  background: url(../assets/home-icon-2.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 9.55rem;
  right: 1.5rem; }
</style>
