<template>
	<div id="nav">
		<div>
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">卖座电影</div>
		    			<div class="nav-right">
		    				<span>深圳</span>
		    				<span class="icon11">
		    					<i class="icon111 iconfont"></i>
		    				</span>
		    			</div>
		    			<div class="iconfont nav-right-div"></div>
		    		</div>
		    		<div class="nav-right"></div>
    			</nav>
    			<div class="film-list-wrap">
    				<div class="film-list-nav">
    					<div class="now-playing active">
    						正在热映
    					</div>
    					<router-link :to="{name:'video2'}">
	    					<div class="coming">
	    						即将上映
	    					</div>
    					</router-link>
    				</div>
    				<div class="film-list">
    					<ul class="list">
    						
    						<li class="li-list" v-for ="(item,index) in list">
    							<router-link :to="{name:'detail',params:{id:item.id,title:item.name}}">
	    							<div class="film-item">
	    								<div class="film-item-img">
	    									<img :src="item.poster.origin" class="item-img"/>
	    								</div>
	    								<div class="film-item-inner">
	    									<div class="item-inner1">
	    										<span>{{item.name}}</span>
	    										<div>
	    											<span class="item-grade">{{item.grade}}</span>
	    											<span class="iconfont icon21"></span>
	    										</div>
	    									</div>
	    									<div class="item-inner2">{{item.intro}}</div>
	    									<div class="item-inner3">
	    										<span>{{item.cinemaCount}}家影院上映</span>
	    										<span>{{item.watchCount}}人购票</span>
	    									</div>
	    								</div>
	    							</div>
    							</router-link>
    						</li>

    					</ul>
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
				list:[
					{path:"/video/now"},
					{path:'/video/coming'}
				]
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
	 		var that = this;
	 		this.$http.get('/api/film/now-playing?__t=1499130975497&page=1&count=20')
			.then(function(response){
				
				response=response.data;
				response=response.data;
				response=response.films;
				that.list=response;
				console.log(that.list);
			})
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
.film-list-wrap {
    padding-left: 15px;
    padding-right: 15px;
    background-color: #f9f9f9;
    width: 100%;
    position: absolute;
    top: 50px;
    min-height: 100%;
    height: 630px;
    overflow: auto;
}
.film-list-wrap .film-list-nav{
	height: 46px;
    margin: 0 auto;
    border-bottom: solid #fe6e00 1px;
}
.film-list-nav .now-playing{
	float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #6a6a6a;
    cursor: pointer;
}
.active{
	color: #fe6e00 !important;
    border-bottom: solid;
}
.film-list-nav .coming{
	float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #6a6a6a;
    cursor: pointer;
}
.list{
	margin: 0;
    padding: 0;
    list-style: none;
    height: 125px;
}
.list .li-list .film-item{
	width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
    height: 125px;
}
.list .li-list .film-item .film-item-img{
	width: 60px;
    float: left;
    overflow: hidden;
    width: 60px;
	height: 83px;
	
}
.list .li-list .film-item .film-item-inner{
	padding-left: 15px;
    display: inline-block;
    width: 75%;
}
.item-img{
	width: 100%;
    transition: all 1.2s ease;
    opacity: 1;
}
.item-inner1{
	font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
}
.item-inner1 .item-grade{
    font-size: 16px;
    line-height: 32px;
    color: #fc7103;
}
.item-inner1 .icon21{
	float: right;
    line-height: 29px;
    color: #c6c6c6;
}
.item-inner1 .icon21:before{
	content: "\e604";
	
}
.item-inner2{
	    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}
.item-inner3{
	line-height: 2px;
    color: #8e8e8e;
    font-size: 12px;
}




</style>