<template>
  <div class="noticeLoad">
    <div class="log"></div>
    <div class="pencil"></div>
    <p class="text">高考结果正在查询中...</p>
  </div>
</template>

<script>

export default {
  name: 'notice',
  data () {
    return {
    }
  },
  mounted(){
    this.axios.get("/notice").then((data) => {
      this.$store.dispatch("notice",data.data)
      setTimeout(()=>{
        this.$router.replace("/notice")
      },2000)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.noticeLoad {
  width: 100%;
  height: 100%;
  position: relative; }

.log {
  width: 1.07rem;
  height: 1.13rem;
  position: absolute;
  top: 1.52rem;
  left: 3.2rem;
  background: url(../assets/logo-onload.png) no-repeat;
  background-size: 100% 100%; }

.pencil {
  width: 1.33rem;
  height: 1.09rem;
  background: url(../assets/pen.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 2.5rem;
  left: 4rem; }

.text {
  width: 100%;
  height: 0.52rem;
  line-height: 0.52rem;
  font-size: 0.3rem;
  position: absolute;
  top: 4.06rem;
  left: 0;
  text-align: center; }

</style>
