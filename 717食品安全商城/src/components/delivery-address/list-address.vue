<template>

  <div class="list-address">
    <div class="main_list" v-for="item in get_list">
      <div class="list_user">{{item.name}} {{item.phone}}</div>
      <p class="address_info">{{item.province+"省"+item.city+"市"+item.area+" "+item.area_address}}</p>
      <div class="list_btns">
        <div class="state">
          <div class="btns " :class="item.bg_flag ? 'btn_bg' : ''">✔</div> 默认地址
        </div>
        <div class="edit">
          <span><i class="iconfont">&#xe66e;</i><b>编辑</b></span>
          <span><i class="iconfont">&#xe63d;</i><b>删除</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import token from "../cookie/getCookie.js"
export default {
  name: 'deliveryAddress',
  props:["get_list"],
  data () {
    return {
      address_list:null
    }
  },
  created(){
    
    this.axios.post("/address",{
      token:token
    }).then((res) => {
      this.address_list = res.data
      // console.log(res.data)
    })
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.main_list{
  width:100%;
  padding-left:0.3rem;
  background: #fff;
  margin-bottom:0.2rem;
  flex-shrink: 0;
}
.list_user{
  height:0.98rem;
  width:100%;
  line-height: 0.98rem;
  font-size:0.32rem;
}
.address_info{
  width:100%;
  margin-bottom:0.2rem;
  line-height: 0.36rem;
  font-size:0.28rem;
  color:#666666;
}
.list_btns{
  width:100%;
  height:0.96rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#666666;
  font-size:0.3rem;
  border-top:solid 0.01rem #e5e5e5;
}
.list_btns .state{
  width:100%;
  display: flex;
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
.edit{
  display: flex;
  height:100%;
  flex-shrink: 0;
}
.edit span{
  display: flex;
  margin-right:0.3rem;
  line-height: 0.98rem;
}
.edit span .iconfont{
  font-size:0.34rem;
  display: block;
  margin: 0 0.1rem;
}
.edit span b{
  display:block;
  flex-shrink: 0;
  white-space: normal;
  font-weight: normal;
}
</style>
