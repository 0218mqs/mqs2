<template>
  <div class="hello">
    <div class="main_b">
      <router-view></router-view>
    </div>
    <footer>
      <footer-box></footer-box>
    </footer>
  </div>
</template>

<script>
import footerBox from "./index/footer.vue"

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    footerBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.hello{
	width:100%;
	height:100%;
  display: flex;
  background: #f6f5f5;
  flex-direction: column;
}
.main_b{
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y:auto;
}
footer{
  width:100%;
  height: 1rem;
  flex-shrink: 0;
  position: relative;
}


</style>
