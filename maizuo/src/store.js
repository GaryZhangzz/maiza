import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

////全局的状态对象，state是不变，需要通过计算改变。
const state = {
	active:false,
}	
//触发状态

const mutations={
		goList(state){
			console.log('触发了')
			state.active = true;
		}
	}
const actions={
		goList(context,...rest){
			context.commit('goList')
		}
	}



export default new Vuex.Store({
	'state':state,
	'mutations':mutations,
	'actions': actions
})
