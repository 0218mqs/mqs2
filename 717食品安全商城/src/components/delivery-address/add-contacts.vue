<template>
  <div class="addContacts">
    <div class="addContacts_tit">
      <span  @click="go_to_story"><</span>
      收货人
      <span></span>
    </div>
    <div class="addContacts_info">
      <div class="input">
        <input type="text" v-model="name" placeholder="收货人姓名">
      </div>
      <div class="input">
        <input type="text" v-model="phone" placeholder="手机号">
      </div>

      <div class="input flex_box">
        <div class="dropDown half">
          <span>﹀</span>
          <select name="province_id" v-model="province" id="province">
            <option value="0" :selected = "selected">请选择省</option>
            <option v-for="item in province_list" :value="item.name" >{{item.name}}</option>
            
          </select>
        </div>
        <div class="dropDown half">
          <span>﹀</span>
          <select name="province_id" v-model="city" id="province">
            <option value="0" :selected = "selected">请选择市</option>
            <option v-for="item in city_list" :value="item.name">{{item.name}}</option>
            
            
          </select>
        </div>
      </div>
      <div class="input">
        <div class="dropDown">
          <span>﹀</span>
          <select name="province_id" v-model="area" id="province">
            <option value="0" :selected = "selected">请选择区</option>
            <option v-for="item in area_list" :value="item">{{item}}</option>
          </select>
        </div>
      </div>
      <div class="input">
        <input type="text" v-model="area_address" placeholder="详细地址">
      </div>
    </div>
    <div class="state">
      <div class="btns" :class={btn_bg:bg_flag} @click="bg_flag_fn">✔</div> 设为默认地址
    </div>
    <div class="add_address">
      <button type="button" @click="preservation">保存</button>
    </div>
    <dialog-box :flag="flag" :text="text"></dialog-box>
  </div>
</template>

<script>
import dialogBox from "../dialog/dialog"
// import token from "../cookie/getCookie.js"
export default {
  name: 'addContacts',
  data () {
    return {
      name:"",
      phone:"",
      province:0,
      city:0,
      area:0,
      area_address:"",
      province_list:null,
      city_list:null,
      area_list:null,
      selected:true,
      phoneReg:/1[5|8|7|3]{1}[0-9]{9}/,
      text:"",
      flag:false,
      bg_flag:true
    }
  },
  methods:{
    go_to_story(){
      history.go(-1)
    },
    preservation(){
      let cookie = document.cookie.split(";"),
    token = null;
    cookie.forEach((val,ind) => {
        if(val.indexOf("717_shop") != -1){
          token = val.split("=")[1];
         
        }
    })
      let str = "";
      if(!this.name){
        str = "请输入姓名"
      }else if(!this.phoneReg.test(this.phone)){
        str="手机号有误，请重新输入"
      }else if(!(this.province&&this.city&&this.area)){
        str = "请选择区"
      }else if(!this.area_address){
        str = "请输入详细地址"
      }else{
        str = "";
        this.axios.post("/add_address",{
          name:this.name,
          phone:this.phone,
          province:this.province,
          city:this.city,
          area:this.area,
          area_address:this.area_address,
          token:token,
          bg_flag:this.bg_flag
        }).then((res) => {
          if(res.data){
            console.log("aaaaaa")
            this.$router.replace("/deliveryAddress")
          }
        })
      }

      if(str){
        this.text = str;
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        },1000)
      }
    },
    bg_flag_fn(){
      this.bg_flag = !this.bg_flag;
    }
  },
  directives:{
    
  },
  created(){
    this.axios.get("/province").then((res) => {
      
      this.province_list = res.data;
    })
  },
  watch:{
    province(params){
      this.province_list.forEach((val,ind) => {
        if(val.name == params){
          this.city_list = val.city;
          this.area_list = null;
          this.city = 0;
          this.area = 0;
        }
      })
    },
    city(params){
      this.city_list.forEach((val,ind) => {
        if(val.name == params){
          this.area_list = val.area
        }
      })
    }
  },
  components:{
    dialogBox
  },
  mounted(){
    // console.log(token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
select{
  border:none;
  outline: none;

}
.addContacts{
	width:100%;
	height:100%;
  display: flex;
  background: #f3f3f3;
  flex-direction: column;
}
.addContacts_tit{
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
.addContacts_tit span{
  font-family: "宋体";
  font-weight: bold;
  font-size:0.38rem;
  display: block;
  width:0.3rem;
}
.addContacts_info{
  width:100%;
  padding:0 0.3rem;
}
.input{
  width:100%;
  margin-top: 0.3rem;
  height:0.9rem;
}
.input input{
  background: #fff;
  width:100%;
  height: 100%;
  display: block;
  border-radius: 0.08rem;
  padding:0 0.2rem;
}
.input input::-webkit-input-placeholder{
  color:#999999;
  font-size:0.32rem;
}
.flex_box{
  display: flex;
  justify-content: space-between;
}
.dropDown{
  height:100%;
  position: relative;
  font-size:0.32rem;
  background: #fff;
  color:#333;
  border-radius: 0.08rem;
  overflow: hidden;
}
.dropDown select{
  padding:0 0.2rem;
  width:100%;
  height:100%;
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
}
.dropDown span{
  position: absolute;
  right:0.2rem;
  top:0;
  line-height: 1rem;
  font-weight: bold;
  font-size:0.3rem;
  font-family: "宋体";
}
.flex_box .half{
  width:3rem;
  height:100%;
}
.state{
  width:100%;
  display: flex;
  height:1rem;
  padding:0 0.3rem;
  align-items: center;
  font-size:.032rem;
  color:#666;
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
  color:#f3f3f3;
  margin-right:0.12rem;
}
.btn_bg{
  background: #fc4141;
  color:#ffffff;
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
</style>
