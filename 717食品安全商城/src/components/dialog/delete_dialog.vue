<template>

    <div class="delete_dialog" v-if="deletes">
      <div class="content_tetxt">
        你确认删除此商品？
      </div>
      <div class="btns">
        <button type="button" @click="sure">确定</button>
        <button type="button" @click="cancel">取消</button>
      </div>
    </div>

</template>

<script>

export default {
  props:["deletes"],
  name: 'delete_dialog',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    sure(){
      this.$bus.$emit("sure",1)
    },
    cancel(){
      this.$bus.$emit("sure",0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .delete_dialog{
    width:5.63rem;
    height:2.72rem;
    border-radius: 0.2rem;
    position: absolute;
    top:3.45rem;
    left:50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.7);
    z-index: 999;
    color:#fff;
    overflow: hidden;
  }
  .content_tetxt{
    width:100%;
    height:1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:0.32rem;
    border-bottom:solid 0.01rem #fff;
  }
  .btns{
    width:100%;
    height:1.2rem;
    display: flex;
    button{
      display: block;
      flex:1;
      background: none;
      outline: none;
      font-size:0.36rem;
      color:#fff;
      &:nth-of-type(1){
        border-right:solid 0.01rem #fff;
      }
    }
  }
</style>
