<template>
	
	<div id="nav">
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">{{obj.name}}</div>
		    		</div>
		    		<div class="nav-right">
		    				<span>深圳</span>
		    				<span class="icon11">
		    					<i class="icon111 iconfont"></i>
		    				</span>
		    		</div>
		    		<div class="iconfont nav-right-div"></div>
    			</nav>
    			
    			<div class="detail-inner">
    				<div class="item-img">
    					<img :src="obj.cover.origin">
    				</div>
    				<div class='item-inner'>
    					<div class="inner-left1">
    						影片简介
    					</div>
    					<div class="inner-left2">
    						导 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span>{{obj.director}}</span>
    					</div>
    					<div class="inner-left2">
    						主 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for ='item in obj.actors'>{{item.name}}</span>
    					</div>
    					<div class="inner-left2">
    						地区语言：<span>{{obj.nation}}</span><span>{{obj.language}}</span>	
    					</div>
    					<div class="inner-left2">
    						类 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：<span>{{obj.category}}</span>	
    					</div>
    					<div class="inner-left2">
    						上映日期：<span>{{obj.premiereAt|formaDate}}</span>	
    					</div>
    					<div class="inner-left3">
    						<span>
    							{{obj.synopsis}}
    						</span>
    					</div>
    				</div>
    				<div class="btn-top">
    					<div class="btn">立即购票</div>
    				</div>
    			</div>
    			
    			
    			
    			
    			
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
.nav-right-div{
	color:#999;
}
.detail-inner{
	width: 100%;
	position: absolute;
	top: 50px;
}
.detail-inner .item-img{
	width: 100%;
	height: 211px;
}
.detail-inner .item-img img{
	width: 100%;
    transition: all 1.2s ease;
    opacity: 1;
}
.detail-inner .item-inner{
	width: 100%;
}
.detail-inner .btn-top{
	position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.detail-inner .btn{
	width: 156px;
	height: 36px;
	background: #fe8233;
	border-radius: 5px;
	text-align: center;
	color: #fff;
	font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: 18px;
}
.inner-left1{
	margin: 16px auto;
    border-left: 16px solid RGB(228, 200, 156);
    font-size: 16px;
    padding-left: 4px;
    height: 24px;
    line-height: 24px;
}
.inner-left2{
	height: 18px;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 12px;
    line-height: 18px;
}
.inner-left2 span{
	margin-left:5px;
}
.inner-left3 {
	width: 375px;
	height: 126px;
	font-size: 14px;
	line-height: 14px;
	text-overflow: ellipsis;
    margin-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    color: #333;
}

</style>