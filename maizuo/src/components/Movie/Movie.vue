<template>
	<div>
	  	<div id="movie">
	 		<div id="nav">
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
		    		
    			
	    	</div>
			<div class="banner">
	    		<mt-swipe :show-indicators="false">
				  <mt-swipe-item class="bannerImg1">
				  	<img :src="bannerArr1">
				  </mt-swipe-item>
				  <mt-swipe-item class="bannerImg2">
				  	<img :src="bannerArr2">
				  </mt-swipe-item>
				  <mt-swipe-item class="bannerImg3">
				  	<img :src="bannerArr3">
				  </mt-swipe-item>
				</mt-swipe>
	    	</div>
	    	<div class="movie1">
	    		<div class="movie-inner">
	    			<ul class="list-movie1">
	    				
		    				
			    				<li class="list-li" v-for ="(item, index) in mainArr " @click="goTo(item.id)">
			    					<router-link :to="{name:'detail',params:{id: item.id , title:item.name}}">
			    					<div class="li-img">
			    						<img :src="item.cover.origin">
			    					</div>
			    					<div class="li-inner">
			    						<div class="inner-inner">
			    							<p>{{item.name}}</p>
			    							<p>
			    								<span>{{item.cinemaCount}}</span><span>家影院上映</span><span>{{item.watchCount}}</span><span>人购票</span>	
			    							</p>
			    						</div>
			    						<div class="Evaluation">{{item.grade}}</div>
			    					</div>
			    					</router-link>
			    				</li>
		    				
	    				
	    			</ul>
	    		</div>
	    		<router-link :to="{name:'video'}">
	    			<div class="more-movie1">更多热映电影</div>
	    		</router-link>
	    	</div>
	    	<div class="movie2">
	    		<div class="movie2-inner">
	    			<div >即将上映</div>
	    		</div>
	    		<div class="movie2-inner2">
	    			<ul class="movie2-list">
	    				<li class="list2-li" v-for ='arr in footerArr'>
	    				
	    					<router-link :to="{name:'detail2',params:{id: arr.id,title:arr.name}}">
		    					<div class="li-div">
		    						<div class="div-img">
		    							<img :src="arr.cover.origin">
		    						</div>
		    						<div class="div-inner">
		    							<div class="inner1">{{arr.name}}</div>
		    							<div class="inner2">{{arr.premiereAt|formaDate}}</div>
		    						</div>
		    					</div>
	    					</router-link>
	    				</li>
	    				
	    			</ul>
	    		</div>
	    		<router-link :to="{name:'video2'}">
	    			<div class="movie3">更多即将上映电影</div>
	    		</router-link>
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
	 	<router-view></router-view>
 	</div>
</template>

<script>
	import Vue from 'vue'
	import router from '../../router'
	import '../../assets/movie.css'
	
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	
	import MintUI from 'mint-ui';
	import api from '../../api.js'
	
	
	
	export default {
		data(){
			return{
				selected:1,
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
				arr:[],
				bannerArr1:[],
				bannerArr2:[],
				bannerArr3:[],
				mainArr:[],
				footerArr:[]
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
			},
			goTo(index){
				console.log(index);
				router.push('/movie/detail/'+index);
			}
		},
		created(){
			var that = this;
			this.$http.get('/api/billboard/home?__t=1499045856283')
			.then(function(response){
				response=response.data;
				response=response.data;
				response=response.billboards;
				that.arr=response;
				that.bannerArr1=that.arr[0].imageUrl;
				that.bannerArr2=that.arr[1].imageUrl;
				that.bannerArr3=that.arr[2].imageUrl;
			})
			this.$http.get('/api/film/now-playing?__t=1499045856293&page=1&count=5')
			.then(function(refs){
				refs=refs.data;
				refs=refs.data;
				refs=refs.films;
				that.mainArr=refs;
				console.log(that.mainArr)
				
			})
			this.$http.get('/api/film/coming-soon?__t=1499045856301&page=1&count=3')
			.then(function(coming){
				
				coming=coming.data;
				coming=coming.data;
				coming=coming.films;
				that.footerArr=coming
				
			})
			.catch(function(error){
				console.log(error)
			});
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

