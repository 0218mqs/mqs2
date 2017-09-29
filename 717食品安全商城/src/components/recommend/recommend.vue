<template>
  <div class="list">
    <dl v-for="(item,ind) in listData" @click="enter_details(item.extend.itemActSignId)">
      <dt><img :src="item.baseinfo.picUrlNew" alt=""></dt>
      <dd class="name">{{item.name.shortName}}</dd>
      <dd class="price"><span>¥ {{item.price.origPrice}}</span> <p @click.stop="addFn(ind)"><img src="../../assets/icon/car.png" alt=""></p></dd>
    </dl>

      <dialog-box :flag="flag" :text="text"></dialog-box>

    
  </div>
</template>

<script>

import dialogBox from "../dialog/dialog"

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

export default {
  name: 'main_list',
  props:["listData"],
  data () {
    return {
      flag:false,
      text:"加入购物车成功"
    }
  },
  components:{
    dialogBox
  },
  methods:{
    addFn(ind){
      this.axios.get("/add_success").then((res)=>{
        if(res.data){
          this.flag = true;
          setTimeout(() => {
            this.flag = false;
          },1000)

           this.$store.dispatch("add_fn",[this.listData[ind],this.listData[ind].extend.itemActSignId])
        }
      })
    },
    enter_details(id){
      this.$router.push("/details/"+id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.list{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  dl{
    width:3.68rem;
    background: #fff;
    padding-bottom:0.2rem;
    margin-bottom:0.14rem;
  }
  img{
    display: block;
    width:100%;
    height:100%;
  }
  dt{
    width:100%;
    height:3.68rem;
    margin-bottom:0.1rem;
  }
  dd{
    width:100%;
    font-size:0.28rem;
    line-height: 0.38rem;
    padding:0 0.14rem;
  }
  .name{
    height:0.76rem;
    overflow: hidden;
    margin-bottom:0.1rem;
  }
  .price{
    display: flex;
    align-items: center;
    font-size:0.3rem;
    justify-content: space-between;
    span{
      color:#fc4141;
    }
  }
  p{
    width:0.46rem;
  }
}

</style>
