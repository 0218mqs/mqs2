<template>
  <div class="shop_list">
    <div class="list_b" v-for="(item,ind) in add_list">
      <div class="btns" :class="item.extend.isSpecial ? 'btn_bg' : ''" @click="submit(ind)">✔</div>
      <div class="imgs"><img :src="item.baseinfo.picUrlNew" alt=""></div>
      <div class="info">
        <p class="text">{{item.name.shortName}}</p>
        <div class="price_btn">
          <div class="price_left">
            <b>×{{item.baseinfo.shopType}}</b>
            <p><span>¥ </span>{{item.price.origPrice}}</p>
          </div>
          <div class="count_b" v-if="!edit_type">
            <span class="reduce"@click="reduceFn(ind)">-</span>
            <span class="count">{{item.baseinfo.shopType}}</span>
            <span class="plus" @click="plusFn(ind)">+</span>
          </div>
          <div class="delete" v-else @click="deleteFn(item.extend.itemActSignId)">
            删除
          </div>
        </div>
      </div>
    </div>
    <delete-dialog :deletes="deletes"></delete-dialog>
  </div>
</template>

<script>

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

import deleteDialog from "../dialog/delete_dialog.vue"

export default {
  name: 'recommend',
  props:["edit_type"],
  data () {
    return {
      count:1,
      flag:false,
      deletes:false,
      id:""
    }
  },
  components:{
    deleteDialog
  },
  created(){
  },
  computed:{
    ...mapState(["add_list"])
  },
  watch:{
    
  },
  mounted(){
    this.$bus.$on("sure",(res) => {
      if(res){
        this.$store.commit("delete_cart",this.id)
      }
      this.deletes = false;
    })
  },
  methods:{
    ...mapActions(["submit","reduceFn","plusFn"]),
    
    deleteFn(id){
      this.id = id;
      this.deletes = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shop_list{
  width:100%;
}
.list_b{
  width:100%;
  display: flex;
  align-items: center;
  position: relative;
  height:2.62rem;
  background: #fff;
  margin-bottom: 0.2rem;
  border-bottom: solid 0.02rem #e5e5e5;
  padding:0.3rem 0.3rem 0.3rem 0.2rem;
}

.imgs{
  width:2.04rem;
  height:100%;
  overflow: hidden;
  border:solid 0.02rem #cccccc;
  margin-right:0.2rem;
  img{
    display: block;
    width:100%;
  }
}
.info{
  flex:1;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0.1rem 0;
  .text{
    width:100%;
    line-height: 0.4rem;
    font-size:0.28rem;
    color:#333;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex-shrink: 0;
  }
}
.price_btn{
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.price_left{
  b{
    font-weight: normal;
    font-size:0.28rem;
    line-height: 0.34rem;
    color:#666666;
  }
  p{
    font-size:0.3rem;
    line-height: 0.34rem;
    color:#fc4141;
    span{
      font-size:0.26rem;
    }
  }
}
.count_b{
  display: flex;
  justify-content: flex-end;
  span{
    display: block;
    height:0.62rem;
    border:solid 0.02rem #e4e4e4;
    width:0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size:0.3rem;
  }
  .reduce{
    border-radius: 0.08rem 0 0 0.08rem;
  }
  .count{
    width:0.9rem;
    border-right:none;
    border-left:none;
  }
  .plus{
    
    border-radius: 0 0.08rem 0.08rem 0;
  }
}
.btns{
  width:0.45rem;
  height:0.45rem;
  font-size:0.3rem;
  line-height: 0.42rem;
  border:solid 0.02rem #cccccc;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  color:#fff;
  margin-right:0.12rem;
}
.btn_bg{
  background: #fc4141;
}
.foot_right{
  display: flex;
  height:100%;
  justify-content: flex-end;
  align-items: center;
  button{
    width:2.55rem;
    height:100%;
    display: block;
    background: #fc4141;
    font-size:0.32rem;
    color:#fff;
    outline: none;
    border:none;
    flex-shrink: 0;
  }
  .total{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:0 0.3rem;
    p{
      color:#333;
      font-size:0.28rem;
      display: flex;
      span{
        display: block;
        line-height: 0.4rem;
      }
      .price_total{
        color:#fc4141;
      }
    }
    b{
      font-weight: normal;
      font-size:0.24rem;
      display: block;
      color:#666;
    }
  }
}
.delete{
  width:0.98rem;
  height:100%;
  background: #fc4141;
  position: absolute;
  right: 0;
  top:0;
  color:#fff;
  font-size:0.36rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 0.35rem;
}
</style>
