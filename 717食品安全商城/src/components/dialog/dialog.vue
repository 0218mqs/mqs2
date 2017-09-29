<template>
  <transition name="fade">
    <div class="dialog" v-if="flag">
      {{text}}
    </div>
  </transition>
</template>

<script>

export default {
  props:["flag","text"],
  name: 'dialog',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.dialog{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 999;
	padding:0 0.44rem;
  height:0.66rem;
  line-height: 0.66rem;
  font-size:0.3rem;
  color:#fff;
  border-radius: 0.33rem;
  background: rgba(0,0,0,0.6);
}
.dialog_box{
  
}
</style>
