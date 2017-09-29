import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let state = {
	now_list:[],
	add_list:[],
	allPrice:0,
	allFlag:false
}
let mutations = {
	now_list_fn(state,data){
		state.now_list = [...data]
	},
	add_fn(state,dataArr){
		let flag = false;
		state.add_list.forEach((val,ind) => {
			if(val.extend.itemActSignId == dataArr[1]){
				val.baseinfo.shopType ++;
				flag = true
			}
		})
		if(!flag){
			state.add_list.unshift(dataArr[0])
		}
			
	},

	// 购物车 start
	submit(state,ind){
		state.add_list[ind].extend.isSpecial = !state.add_list[ind].extend.isSpecial
	},
	priceFn(state){// 总钱数、选中按钮
		let allPrice = 0,count = 0;
		state.add_list.forEach((val,ind) => {
			if(val.extend.isSpecial){
				count++
				allPrice += val.price.origPrice*val.baseinfo.shopType
			}
		})
		if(count == state.add_list.length){
			state.allFlag = true
		}else{
			state.allFlag = false
		}
		state.allPrice = allPrice
	},
	reduceFn(state,ind){// 减少数量
		if(state.add_list[ind].baseinfo.shopType > 1){
			state.add_list[ind].baseinfo.shopType --
		}
	},
	plusFn(state,ind){// 增加数量
		state.add_list[ind].baseinfo.shopType ++
	},
	submit_all(state){// 全选按钮
		state.allFlag = !state.allFlag;
		state.add_list.forEach((val,ind) => {
			val.extend.isSpecial = state.allFlag
		})
	},
	// 购物车 end
	
	delete_cart(state,id){
		state.add_list.forEach((val,ind) => {
			if(val.extend.itemActSignId == id){
				state.add_list.splice(ind,1)
			}
		})
	}

}
let actions = {
	now_list_fn({commit},data){
		commit("now_list_fn",data)
	},
	submit_all({commit}){
		commit("submit_all"),
		commit("priceFn")
	},
	submit({commit},ind){
		commit("submit",ind),
		commit("priceFn")
	},
	reduceFn({commit},ind){
		commit("reduceFn",ind),
		commit("priceFn")
	},
	plusFn({commit},ind){
		commit("plusFn",ind),
		commit("priceFn")
	},
	add_fn({commit},dataArr){
		commit("add_fn",dataArr),
		commit("priceFn")
	}
}
let getters = {
	
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})