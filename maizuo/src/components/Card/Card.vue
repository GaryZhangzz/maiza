<template>
	
	<div id="nav1">
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">查询/绑定/激活卖座卡</div>
		    		</div>
		    		<div class="nav-right">
		    				<span>深圳</span>
		    				<span class="icon11">
		    					<i class="icon111 iconfont"></i>
		    				</span>
		    		</div>
		    		<div class="iconfont nav-right-div"></div>
    			</nav>
    			<section class="card-query">
    				<div class="card_query_form">
    					<ul class="list-inline tab">
    						<li class="active">
    							<a>卖座卡</a>
    						</li>
    						<li>
    							<a>电子卖座卡</a>
    						</li>
    					</ul>
    					<div class="material">
    						<div class="data-reactid">
    							<label>卡号：</label>
    							<input type="text" placeholder="请输入卡号" />
    							<i class=" iconfont icon-qrcode qrcode hidden"></i>
    							<div class="line"> </div>
    						</div>
    						<div class="data-reactid"></div>
    					</div>
    				</div>
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
.card-query{
	font-size: 14px;
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #fcfcfc
}
.card_query_form .tab{
	background-color: #fff;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    color: #ccc;
}
.card_query_form ul{
	display:flex ;
}
.card_query_form ul li{
	text-align: center;
    font-size: 16px;
    line-height: 45px;
    box-shadow: 0 -1px #ff7100 inset;
    transition: all 0.2s ease;
    width: 50%;
}
.card_query_form ul li.active {
    box-shadow: 0 -4px #ff7100 inset    
}
.material {
    margin-top: 20px;
    padding: 0 32px;
}
.card-query .card_query_form .material .qrcode{
	font-size: 24px;
    color: #26a69a;
    float: right;
    margin-right: 15px;
}
.card-query .card_query_form .material .line {
    border-width: 0px 1px 1px;
    border-style: solid;
    border-color: #ccc;
    height: 5px;
    margin-top: -5px 
}
</style>