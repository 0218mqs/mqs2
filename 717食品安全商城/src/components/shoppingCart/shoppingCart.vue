<template>
  <div class="recommend">
    <div class="top">
      <span></span>
      购物车
      <span @click="editFn">{{text}}</span>
    </div>
    <div class="main">
      <div class="cart_main">
        <div class="empt_box" v-if="flag">
          <div class="empt_imgs"><img src="../../assets/icon/cart_empt_03.png" alt=""></div>
          <p>购物车为空</p>
          <router-link to="/home/index" tag="span">去逛逛</router-link>
        </div>
        <div v-else>
          <cart-box  :edit_type="edit_type"></cart-box>
        </div>
        
      </div>
      <title-box></title-box>
      <recommend-box :listData = "now_list"></recommend-box>
      
      <div class="bottom">
        到底了噢！
      </div>
    </div>
    <div class="foot">
      <div class="foot_left">
        <div class="btns" :class="allFlag ? 'btn_bg' : ''" @click="submit_all">✔</div><span>全选</span>
      </div>
      <div class="foot_right">
        <div class="total">
          <p><span>合计：</span><span class="price_total">{{allPrice.toFixed(2)}}</span></p>
          <b>运费：0.00</b>
        </div>
        <button type="button">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import recommendBox from "../recommend/recommend.vue"
import cartBox from "./cart.vue"
import titleBox from "../recommend/title.vue"

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

export default {
  name: 'recommend',
  data () {
    return {
      add_list:null,
      now_list:null,
      flag:true,
      text:"编辑",
      edit_type:false
    }
  },
  components:{
    recommendBox,
    cartBox,
    titleBox
  },
  computed:{
    ...mapState(["allPrice","allFlag"])
  },
  methods:{
    ...mapActions(["submit_all"]),
    editFn(){
      if(this.text == "编辑"){
        this.text = "完成"
        this.edit_type = true
      }else{
        this.text = "编辑"
        this.edit_type = false
      }
    }
  },
  mounted(){
    setTimeout(() => {
      this.add_list = this.$store.state.add_list;
      this.now_list = this.$store.state.now_list;
      if(this.add_list.length > 0){
        this.flag = false
      }
    },300);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.recommend{
	width:100%;
	height:100%;
  background: #f6f5f5;
}
.top{
  width:100%;
  height:0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafb;
  font-size:0.34rem;
  flex-shrink: 0;
  position: absolute;
  top:0;
  left:0;
  padding:0 0.3rem;
  color:#333333;
  border-bottom: solid 0.02rem #e5e5e5;
  z-index: 999;
  span{
    display: block;
    width:0.7rem;
    font-size:0.26rem;
  }
}
.empt_box{
  flex-shrink: 0;
  width: 100%;
  height:6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-direction: column;
  .empt_imgs{
    width:1.36rem;
    height:1.36rem;
    img{
      display: block;
      width:100%;
    }
  }
  p{
    width:100%;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.3rem
  }
  span{
    display: block;
    width: 1.62rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    color: #fc4141;
    font-size: 0.3rem;
    border:solid 0.01rem #fc4141;
    border-radius: 0.12rem;
    margin-top: 0.2rem
  }
}
.main{
  width:100%;
  padding:0.9rem 0 0.94rem;
}
.bottom{
  width:100%;
  height: 1.7rem;
  line-height: 2rem;
  font-size: 0.3rem;
  color:#666;
  text-align: center;
}
.foot{
  width:100%;
  height:0.94rem;
  background: #fff;
  position: absolute;
  bottom:1rem;
  left:0;
  border-top:solid 0.02rem #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:0.2rem;
}
.foot_left{
  display: flex;
  flex-shrink: 0;
  span{
    font-size:0.32rem;
    color:#333;
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
</style>
