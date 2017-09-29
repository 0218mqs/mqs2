class alertB{
			constructor(options){
				this.show = this.show.bind(this)
			}

			template({tit,info}){
				return `
					<div class="mask_box">
						<div class="alert_box">
							<div class="box_tit">${tit}</div>
							<div class="box_info">${info}</div>
							<div class="btn_box">
								<button class="queRen">确定</button><button class="quXiao">取消</button>
							</div>
						</div>
					</div>
					`
			}

			createElement(type,props={class:"mask_boxs"},text=''){
				let temp = document.createElement(type);
				for(var key in props){
					temp.setAttribute(key,props[key]);
				}
				temp.innerHTML = text;
				return temp;
			}

			clickFn({callback}){
				this.mask_box.addEventListener("click",()=>{
					this.hide();
				})
				this.mask_box.querySelector(".alert_box").addEventListener("click",(e) => {
					e.stopPropagation()
				})
				this.mask_box.querySelector(".queRen").addEventListener("click",() => {
					this.hide();
					callback && callback("确认")
				})
				this.mask_box.querySelector(".quXiao").addEventListener("click",() => {
					this.hide();
					callback && callback("取消")
				})
			}

			init(options){
				var mask_box = document.querySelector(".mask_box"),
					body = document.querySelector("body");

				if(!mask_box){
					this.mask_box = this.createElement("div",{class:"mask_boxs"},this.template(options))
					body.appendChild(this.mask_box);

					this.clickFn(options);
				}
				
			}

			show(options = {tit:"提示",info:"提示内容",callback(){},btnArr:["确认","取消"]}){
				this.init(options);
			}

			hide(){
				document.querySelector("body").removeChild(this.mask_box);
			}
		}

		export default new alertB()