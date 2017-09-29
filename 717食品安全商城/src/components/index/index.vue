<template>
  <div class="section">

    <header>
      <header-box></header-box>
    </header>
    <section @scroll="loaderMore">
      <div class="index_main" ref="index_main">
        <section-box></section-box>
      </div>
    </section>
  </div>
</template>

<script>
import headerBox from "./header.vue"
import sectionBox from "./section.vue"

export default {
  name: 'section',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    headerBox,
    sectionBox
  },
  mounted(){
    this.dataFn();
    
    this.$nextTick(() => {
       console.log(this.$refs.index_main.offsetHeight)
    })
   
  },
  methods:{
    dataFn(){
        this.axios.get("/now_list").then((data) => {
          this.$store.dispatch("now_list_fn",data.data.itemList)
        })
    },
    loaderMore(){
      // let list_h = this.$refs.section;
      console.log("123")
      console.log(this.$refs.index_main.scrollTop)
      // this.dataFn()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.section{
	width:100%;
	height:100%;
  background: #f6f5f5;
  display: flex;
  flex-direction: column;
}
header{
  width:100%;
  height: 1rem;
  position: absolute;
  top:0;
  left:0;
  z-index: 999;
  flex-shrink: 0;
  background: #fff;
}
section{
  width:100%;
  /*height:26rem;*/
  padding-top:1rem;
  /*flex-shrink: 1;*/
  /*flex-flow: 1;*/
  overflow-y:scroll;
}
.index_main{
}


</style>
