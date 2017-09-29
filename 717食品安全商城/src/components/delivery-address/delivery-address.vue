<template>
  <div class="deliveryAddress">
    <div class="deliveryAddress_tit">
      <span @click="go_to_story"><</span>
      收货地址
      <span></span>
    </div>
    <div class="deliveryAddress_main">
      <!-- <div class="list-address">
        <div class="main_list" v-for="item in get_list">
          <div class="list_user">{{item.name}} {{item.phone}}</div>
          <p class="address_info">{{item.province+"省"+item.city+"市"+item.area+" "+item.area_address}}</p>
          <div class="list_btns">
            <div class="state">
              <div class="btns btn_bg" >✔</div> 默认地址
            </div>
            <div class="edit">
              <span><i class="iconfont">&#xe66e;</i><b>编辑</b></span>
              <span><i class="iconfont">&#xe63d;</i><b>删除</b></span>
            </div>
          </div>
        </div>
      </div> -->
      <list-address :get_list="get_list"></list-address>
      <div class="add_address">
        <router-link tag="button" to="/addContacts" type="button"><span>+</span> 新增地址</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import listAddress from "./list-address"
// import token from "../cookie/getCookie.js"
export default {
  name: 'deliveryAddress',
  data () {
    return {
      get_list:null
    }
  },
  created(){
    let cookie = document.cookie.split(";"),
    token = null;
    cookie.forEach((val,ind) => {
        if(val.indexOf("717_shop") != -1){
          token = val.split("=")[1];
         
        }
    })
    this.axios.get("/get_address_info",{token:token}).then((res) => {
      // console.log(res)
      this.get_list = res.data
    })
    
    
  },
  components:{
    listAddress
  },
  methods:{
    go_to_story(){
      this.$router.replace("/home/mine")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.deliveryAddress{
	width:100%;
	height:100%;
  display: flex;
  background: #f6f5f5;
  flex-direction: column;
}
.deliveryAddress_tit{
  width:100%;
  height:0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;
  font-size:0.34rem;
  background: #fff;
  border-bottom:solid 0.01rem #ccc;
  flex-shrink: 0;
}
.deliveryAddress_tit span{
  font-family: "宋体";
  font-weight: bold;
  font-size:0.38rem;
  display: block;
  width:0.3rem;
}
.deliveryAddress_main{
  width:100%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y:auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.add_address{
  width:100%;
  height:1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.add_address button{
  width:4.6rem;
  height:1.02rem;
  border-radius: 0.51rem;
  background: #fc4141;
  font-size: 0.34rem;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 3px rgba(252,65,65,0.6);
}
.add_address button span{
  font-size:0.6rem;
  display: block;
  margin-right:0.14rem;
}
</style>
