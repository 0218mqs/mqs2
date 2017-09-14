import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let state = {
	dataAll:null,
	datalist:null,
	noticeData:null
}
let mutations = {
	change(state,data){
		state.dataAll = data;
	},
	get_data(state,id){
		let arr = [], 
			dataArr = [];
		if(id == 0){
			var empt = []
			Object.values(state.dataAll).forEach((val,ind) => {
				if(val.type != 1){
					empt.push(val)
				}
			})
		}else if(id == 1){
			var empt = []
			Object.values(state.dataAll).forEach((val,ind) => {
				if(val.type == 1 || val.type == 2){
					empt.push(val)
				}
			})
		}

		while(arr.length<4){
			let em = auto(empt.length)
			if(arr.indexOf(em) == -1){
				arr.push(em)
			}
		}
		
		arr.forEach((val,ind) => {
			dataArr.push(empt[val])
		})
		// console.log(arr)

		state.datalist = dataArr

		function auto(max,min){
			return Math.floor(Math.random()*max)
		}
	},
	notice(state,data){
		state.noticeData = data
	}
}
let actions = {
	change_fn({commit},data){
		commit("change",data)
	},
	get_data({commit},id){
		commit("get_data",id)
	},
	notice({commit},data){
		commit("notice",data)
	}
}
let getters = {
	get_notice(state){
		function auto(max,min){
			return Math.ceil(Math.random()*max)
		}
		let num = auto(Object.values(state.noticeData).length),
			p = num < 10 ? "0" + num : num;

		return state.noticeData["school"+p]
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})