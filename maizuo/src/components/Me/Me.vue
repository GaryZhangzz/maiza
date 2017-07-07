<template>
	
	<div id="nav">
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">我的</div>
		    		</div>
		    		<div class="nav-right">
		    				<span>深圳</span>
		    				<span class="icon11">
		    					<i class="icon111 iconfont"></i>
		    				</span>
		    		</div>
		    		<div class="iconfont nav-right-div"></div>
    			</nav>
    			<section class="center-home-view">
    				<div class="center-header-wrap">
    					<div class="img"></div>
    					<div class="div">
    						<p>手机用户6372</p>
    						<p>ID:217108371</p>
    						<p>退出</p>
    					</div>
    				</div>
    				<section class="center-nav">
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>影票订单</span>
    							</div>
    							<div>
    								<span>0张</span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    				
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>影票待付订单</span>
    							</div>
    							<div>
    								<span>0张</span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>商城订单</span>
    							</div>
    							<div>
    								<span></span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>演出订单</span>
    							</div>
    							<div>
    								<span>0张</span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>我的现金劵</span>
    							</div>
    							<div>
    								<span>0张</span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>账户余额</span>
    							</div>
    							<div>
    								<span>0元</span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>我的卖座卡</span>
    							</div>
    							<div>
    								<span>0张</span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					<div class="menu-wrapper ">
    						<div class="center-block">
    							<div>
    								<i class="iconfont iconn"></i>
    								<span>设置</span>
    							</div>
    							<div>
    								<span></span>
    								<i class="iconfont iconn2"></i>
    							</div>
    						</div>
    					</div>
    					
    				</section>
    			</section>
    			
    			
    			
    			
    			
    			
    			<!-- 遮罩层-->
	 			<transition name='fade1'>
	 				<div class="zzBox" v-if='isSelect' @click='zzBox'></div>
	 			</transition>
	 			<!-- 侧边栏-->
	 			<transition name='fade'>
	 				<div class="tabs" v-if='isSelect'>
		 				<ul>
		 					<div class="kong"></div>
		 					<router-link v-for="item in tabs" :to='item.path' class="router_a">
		 						<li @click='fanhui'>
		 							<span>{{item.name}}</span>
		 							<span class="iconfont ico"></span>
		 						</li>
		 					</router-link>
		 				</ul>
	 				</div>
	 			</transition>
	</div>

</template>

<script>
	 import Vue from 'vue';
	 import router from '../../router'
	 import '../../assets/movie.css'
	 

	 
	 export default{
	 	data(){
	 		return{
	 			isSelect: false,
	 			tabs:[
					{name:'首页',path:'/movie'},
					{name:"影片",path:"/video"},
					{name:"影院",path:"/theater"},
					{name:"商城",path:"/mall"},
					{name:"演出",path:"/show"},
					{name:"我的",path:"/me"},
					{name:"卖座卡",path:"/card"}
				],
				obj:{},
				
	 		}
	 	},
	 	methods:{
	 		goList(){
				this.isSelect=!this.isSelect
			},
			zzBox(){
				this.isSelect=!this.isSelect
			},
			fanhui(){
				this.isSelect=!this.isSelect
			}
	 	},
	 	created(){
	 		var that=this;
	 		console.log(this.$route.params.id);
	 		this.$http.get('/api/film/'+this.$route.params.id)
	 		.then(function(response){
	 			that.obj=response.data.data.film;
	 			that.timer = response.data.data.film.premiereAt;
				that.newDate = new Date(timer);
				that.time = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + "";
				console.log(that.time);
	 			
	 		})
	 	},
	 	filters:{
	 		formaDate(item){
	 			let date = new Date(item*1),
		 			month = date.getMonth()+1 > 9?date.getMonth()+1:'0'+(date.getMonth()+1),
		 			day =date.getDate()>9?date.getDate():'0'+date.getDate();
		 			return `${month}月${day}日上映`
	 		}
	 	}
	 }
</script>
<style>
.nav-right-div {
    position: absolute;
    right: 30px;
    color: #fff;
}
.nav-left-inner{
	
}
	.tabs {
    border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: absolute;
    display: block;
    top: 0;
    right: 110px;
    bottom: 0;
    left: 0;
    height: 760px;
}
#app{
	background-color: #ebebeb;
	color: #333;
}
.center-home-view{
	position: absolute;
    width: 100%;
	top: 50px;
	overflow: auto;
	    height: 610px;
}
.center-header-wrap .img{
	width: 92px;
	height: 92px;
	background: #ccc;
}
.center-header-wrap{
	background-color: #303030;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-wrapper {
	    width: 100%;
    margin: 14px 0;
    line-height: 59px;
    background-color: #fff;
    cursor: pointer;
    font-size: 12px;
    color: #222;
}
.center-block{
	margin: 0 12px;
	line-height: 59px;
    cursor: pointer;
    font-size: 12px;
    color: #222;
    display: flex;
    justify-content: space-between;
}
.iconn:before{
	content: '\e658';
}
.iconn2:before{
	content:'\e604';
}
</style>