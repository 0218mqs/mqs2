<template>
	<div class="sign">
		<div class="main">
			<div class="top">
				<span @click="go_to_home"><b><</b></span>
				登录717
				<router-link to="/register" tag="span">注册</router-link>
			</div>
			<div class="input_box">
				<div class="input_s user">
					<label for="username"><i class="iconfont">&#xe63e;</i></label>
					<p><input type="text" id="phone" v-model="phone" placeholder="请输入您的手机号"></p>
				</div>
				<div class="input_s password">
					<label for="pwd"><i class="iconfont">&#xe614;</i></label>
					<p><input type="password" id="pwd" v-model="password" placeholder="请输入您的密码"></p>
				</div>
			</div>
			<div class="prompt_box">
				<div class="prompt" v-if="flag">{{prompt}}</div>
			</div>
			<div class="sign_in_btn"><button type="button" @click="register">立即登录</button></div>
			<p class="forget">忘记密码？</p>
		</div>
		
		<div class="offline">
			<span class="tit">使用第三方账号登录</span>
			<dl>
				<dt><i class="iconfont">&#xe61c;</i></dt>
				<dd>微信</dd>
			</dl>
			<dl>
				<dt><i class="iconfont">&#xe61c;</i></dt>
				<dd>QQ</dd>
			</dl>
			<dl>
				<dt><i class="iconfont">&#xe61c;</i></dt>
				<dd>微博</dd>
			</dl>
		</div>
	</div> 
</template>
<script>
	export default {
		data(){
			return {
				phone:"",
				password:"",
				prompt:"",
				flag:false
			}
		},
		methods:{
			go_to_home(){
				this.$router.replace("/home/index")
			},
			register(){
				let ls = window.localStorage,
					getItem = JSON.parse(ls.getItem("shopUser"));
				
				getItem.forEach((val,ind) => {
					console.log(this.phone+"  "+this.password)
					console.log(val.phone+"  "+val.pwd)
					if(val.phone == this.phone && val.pwd == this.password){
						
						this.prompt = "";
						this.axios.post("/signIn").then((res) => {
							if(res.data.code){
								document.cookie = "717_shop="+this.phone;
								this.$router.push("/home/mine")
							}
						})
					}else{
						this.prompt = "账号/密码输入有误！";
					}
				})
		

				if(this.prompt){
					this.flag = true;
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
	.offline{
		display: flex;
		height:3.9rem;
		width:6rem;
		margin:0 auto;
		padding-top:0.6rem;
		position: relative;
		justify-content: center;
		border-top:solid 0.01rem #ddd;
	}
	.offline .tit{
		font-size:0.32rem;
		color:#333;
		padding:0 0.2rem;
		background: #f4f4f4;
		position: absolute;
		top:-0.24rem;
		white-space: nowrap;
		left:50%;
		transform: translateX(-50%);
	}
	.offline dl{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin:0 0.3rem;
	}
	.offline dl .iconfont{
		font-size:1.2rem;
		color:#3cd656;
	}
	.offline dl:nth-of-type(2) .iconfont{
		color:#2ebdf2;
	}
	.offline dl:nth-of-type(3) .iconfont{
		color:#fa7065;
	}
	.offline dl dd{
		font-size:0.3rem;
		line-height: 0.7rem;
	}
</style>