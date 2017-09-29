<template>
  <div>
    <div class="fic_main" v-for="item in fic_data">
      <p>{{item.name}}</p>
      <ul class="fic">
      <li v-for="val in item.tabCateList">
        <img :src="val.imgUrl" alt="">
        <span>{{val.name}}</span>
      </li>
    </ul>
    </div>


  </div>
  
</template>

<script>
export default {
  name: 'classification',
  props:["fic_data"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    setTimeout(() => {
      console.log(this.fic_data)
    },300)
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .fic_main{
    width:100%;
    background: #f7f7f7;
    p{
      font-size: 0.3rem;
      height:0.6rem;
      line-height: 0.6rem;
      padding:0.12rem 0.3rem 0;
    }
  }
  .fic{
    width: 100%;
    height:100%;
    overflow-y:auto;
    padding: 0.1rem 0;
    li{
      /* display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap; */
      width:1.6rem;
      height:2.24rem;
      margin:0.08rem;
      /*background: #f7f7f7;*/
      background: #fff;
      float:left;
      img{
        display: block;
        width:100%;
      }
      span{
        display: block;
        text-align: center;
        height:0.65rem;
        overflow: hidden;
        line-height: 0.65rem;
        font-size:0.28rem;
      }
    }
  }
  
</style>
