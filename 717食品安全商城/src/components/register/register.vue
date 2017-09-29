<template>
	<div class="sign">
		<div class="main">
			<div class="top">
				<span><b><</b></span>
				注册717
				<router-link to="/signIn" tag="span">登录</router-link>
			</div>
			<div class="input_box">
				<div class="input_s">
					<label for="username"><i class="iconfont">&#xe63e;</i></label>
					<p><input type="text" id="username" placeholder="请输入您的手机号" v-model.trim="username"></p>
				</div>
				<div class="input_s">
					<label for="verific"><i class="iconfont">&#xe652;</i></label>
					<p><input type="verification" v-model.trim="verification" id="verific" placeholder="请输入验证码"><span class="verification " @click="verificationFn">获取验证码</span></p>
				</div>
				<div class="input_s">
					<label for="pwd"><i class="iconfont">&#xe614;</i></label>
					<p><input type="password" id="pwd" placeholder="请输入您的密码" v-model.trim="password"></p>
				</div>
			</div>
			<div class="prompt_box">
				<div class="prompt" v-if="flag">{{prompt}}</div>
			</div>
			<div class="sign_in_btn"><button type="button" @click="register">立即注册</button></div>
			<p class="forget">忘记密码？</p>
		</div>
		
	</div> 
</template>
<script>
	export default {
		data(){
			return {
				username:"",
				verification:"",
				password:"",
				prompt:"",
				flag:false,
				userReg : /1[3|5|7|8]{1}[0-9]{9}/,
				pwdReg : /^[a-zA-Z0-9]{8,16}$/,
				ver:null
			}
		},
		methods:{
			verificationFn(){
				if(!this.userReg.test(this.username)){
					this.prompt = "请输入正确的手机号"
				}else{
					this.prompt = ""
					this.axios.post("/verification").then((res) => {
						console.log(res)
						this.ver = res.data.key
					})
				}
				if(this.prompt){
					this.flag = true
				}else{
					this.flag = false
				}
			},
			register(){
				if(!this.username || !this.verification || !this.password){
					this.prompt = "输入框不能为空"
				}else if(!this.userReg.test(this.username)){
					this.prompt = "请输入正确的手机号"
				}else if(!(this.ver == this.verification)){
					this.prompt = "验证码有误"
				}else if(!this.pwdReg.test(this.password)){
					this.prompt = "请输入8-16位数字/字母（支持大小写）"
				}else{
					this.axios.post("/register").then((res) => {
						console.log(res)
						if(res.data.code){
							let ls = window.localStorage,
								arr = [],
								obj={phone:this.username,pwd:this.password}

							if(ls.getItem("shopUser")){
								arr = [...JSON.parse(ls.getItem("shopUser"))]
								
							}
							arr.push(obj)
							ls.setItem("shopUser",JSON.stringify(arr));

							this.$router.push("/signIn")
						}
					})
					this.prompt = ""
				}

				if(this.prompt){
					this.flag = true
				}else{
					this.flag = false
				}
			}
		}
	}
</script>
<style scoped>
	.sign{
		width:100%;
		height:100%;
		background: #f4f4f4;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.top{
		width:100%;
		height:0.94rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 0.22rem;
		font-size:0.34rem;
		background: #fafafb;
		margin-bottom:0.2rem;
		
	}
	.top span:nth-of-type(2){
		font-size:0.3rem;
		color:#fc4141;
	}
	.top b{
		font-family: "宋体"
	}
	.input_box{
		width:100%;
		background: #fff;
		padding-left:0.3rem;
	}
	.input_s{
		width:100%;
		height:1.2rem;
		display: flex;
		align-items: center;
	}
	.input_s label{
		display: block;
		width:0.64rem;
		line-height: 1.2rem;
		margin-right:0.1rem;
	}
	.input_s .iconfont{
		font-size:0.52rem;
		color:#333333;
		display: block;
	}
	.input_s p{
		flex:1;
		height:100%;
		display: flex;
		align-items: center;
		border-bottom:solid 0.01rem #e5e5e5;
	}
	.input_s p input{
		display: block;
		height:100%;
		line-height: 1.2rem;
		font-size:0.3rem;
		padding:0 0.1rem;
	}
	.input_s p input::-webkit-input-placeholder{
		color:#ccc;
	}
	.prompt_box{
		width:100%;
		height:1.04rem;
		margin-top:0.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.prompt{
		padding:0 0.3rem;
		height:0.68rem;
		border-radius: 0.34rem;
		background: rgba(0,0,0,0.6);
		line-height: 0.7rem;
		color:#fff;
		font-size: 0.3rem;
	}
	.sign_in_btn{
		width:100%;
		display: flex;
		justify-content: center;
	}
	.sign_in_btn button{
		display: block;
		width:5.6rem;
		height:1.1rem;
		border-radius: 0.55rem;
		background: #fc4141;
		font-size:0.36rem;
		color:#fff;
	}
	.forget{
		padding:0 0.82rem;
		height: 0.86rem;
		line-height: 0.86rem;
		font-size:0.3rem;
		text-align: right;
		text-decoration: underline
	}
	.verification{
		width:2.04rem;
		height:0.82rem;
		font-size: 0.34rem;
		color:#fc4141;
		border:solid 0.01rem #fc4141;
		line-height: 0.82rem;
		text-align: center;
		margin-right:0.3rem;
		border-radius: 0.41rem;
	}
</style>