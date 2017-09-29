<template>
  <div class="section">
    <div class="box" ref="sec">
      <banner-box></banner-box>
      <list-box></list-box>
      <dynamics-box></dynamics-box>
      <preferential-box></preferential-box>
      <mainlist-box></mainlist-box>
    </div>
  </div>
</template>

<script>
import bannerBox from "./component/banner.vue"
import listBox from "./component/list.vue"
import dynamicsBox from "./component/dynamics.vue"
import preferentialBox from "./component/preferential.vue"
import mainlistBox from "./component/main-list.vue"
export default {
  name: 'section',
  data () {
    return {
      msg: 'ddd'
    }
  },
  components:{
    bannerBox,
    listBox,
    dynamicsBox,
    preferentialBox,
    mainlistBox
  },
  mounted(){
    // console.log(this.$refs.sec.offsetHeight)
  },
  methods:{
    search(){
      console.log("456")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	


</style>
