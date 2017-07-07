<template>
	
	<div id="nav1">
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">卖座商城</div>
		    		</div>
		    		<div class="iconfont nav-right-div"></div>
    			</nav>
    			<div class="home">
    				<div class="banner1" v-if="arr.length !== 0">
    					<mt-swipe :auto="4000">
						  <mt-swipe-item class="bannerImg1">
						  	<img :src="arr[8].imageSrc">
						  </mt-swipe-item>
						  <mt-swipe-item class="bannerImg2">
						  	<img :src="arr[9].imageSrc">
						  </mt-swipe-item>
						  <mt-swipe-item class="bannerImg3">
						  	<img :src="arr[10].imageSrc">
						  </mt-swipe-item>
						</mt-swipe>
    				</div>
    				<div class="billboards"></div>
    				<div class="shops" v-if="fenlei.length !== 0">
    					<li class="shop" v-for="(item,index) in fenlei">
    						<a href="http://aura.maizuo.com/?showwxpaytitle=1#/category/8">
    							<img :src="item.imageSrc">
    							<div class="category-name">{{item.name}}</div>
    						</a>
    						
    					</li>
    					
    				</div>
    				<div class="active">
    					<div class="line"></div>
    					<div class="active-contain">
    						<div class="avtive-left">
    							<img :src="tuijian[0].imageSrc">
    						</div>
    						<div class="active-right">
    							<img :src="tuijian[1].imageSrc">	
    						</div>
    						
    					</div>
    				
    				</div>
    				<div class="price_active">
    					<div class="line"></div>
    					<div class="active-title">— 有品专区 —</div>
    					<div class="active-contain1">
    						<div class="active-center">
    							<div class="center-left">
    								<img :src="shoujike[0].imageSrc">
    							</div>
    							<div class="center-right">
    								<div class="box1">
    									<img :src="shoujike[1].imageSrc">
    								</div>
    								<div class="box2">
    									<img :src="shoujike[2].imageSrc">
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    				<div class="boo">
    					<div v-for="(item1,index) in xhr" class="subject">
	    					<div>
	    						<div class="line"></div>
	    						<div class="subject-center">
	    							<div class="center-img">
	    								<img :src="item1.imageSrc">
	    							</div>
	    							<div class="pic-list" >
	    								<div class="slick-initialized slick-slider">
	    									
	    									<div class="slick-list">
	    										<div v-for="(iten,index) in item1.products" class="list-li">
	    											<div class="control-pic"><img :src="iten.image"></div>
	    											<p class="control-name">{{iten.name}}</p>
	    											<p class="control-price">￥{{iten.price}}</p>
	    										</div>
	    										
	    									</div>
	    								</div>
	    							
	    							</div>
	    						</div>
	    					</div>	

    					</div>
    				</div>
    				<div class="boo1">
    					<div class="container">
    						<div class="title">— 好货精选 —</div>
    						<div class="items">
    							<div class="tailloader">
    								<div v-for="(item,index) in list1" class="item clearfix even">
    									<div class="logo">
    										<div class="logo-img">
    											<img :src="item.skuList[0].image">
    										</div>
    										<div class="logo-name">{{item.masterName}}</div>
    										<div class="content1">
    											<span class="price">￥{{item.skuList[0].price}}</span>
    											<span class="inventory">已售{{item.displaySalesCount}}</span>
    										</div>
    									</div>
    								</div>
    								<div  v-for="(iten,index) in list2" class="item clearfix odd">
    									<div class="logo">
    										<div class="logo-img">
    											<img :src="iten.skuList[0].image">
    										</div>
    										<div class="logo-name">{{iten.masterName}}</div>
    										<div class="content1">
    											<span class="price">￥{{iten.skuList[0].price}}</span>
    											<span class="inventory">已售{{iten.displaySalesCount}}</span>
    										</div>
    									</div>	
    								</div>
    							</div>
    						</div>
    						<div class="tips">~貌似没有更多了~</div>
    					</div>
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
	 
	 import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	
	import MintUI from 'mint-ui';

	 
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
				arr:[],
				fenlei:[],
				tuijian:[],
				shoujike:[],
				xhr:[],
				xhr2:[],
				list:[],
				list1:[],
				list2:[]
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
	 		var that= this;
	 		this.$http.get('/list')
	 		.then(function(response){
	 			that.arr=response.data.data;
	 			response.data.data.map((item,index) => {
	 				if(index >=0 && index <= 7){
	 					that.fenlei.push(item)
	 				}else if(index >=11 && index <=12){
	 					that.tuijian.push(item)
	 				}else if(index >=13 && index <=15){
	 					that.shoujike.push(item)
	 				}else if(index >=16 && index <=21){
	 					that.xhr.push(item)
	 					that.xhr2.push(item.products)
	 				}
	 				//console.log(that.xhr2);
	 				
	 			})
	 			
	 		});
	 		this.$http.get('/recommend/home?page=1&num=20')
	 		.then(function(response){
	 		
	 			that.list=response.data.data.list;
	 			
	 			response.data.data.list.map((item,index)=>{
	 				if(index%2==0){
	 					that.list1.push(item)
	 				}else{
	 					that.list2.push(item)
	 				}
	 			})
	 			console.log(that.list1);
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
#app{
	background-color: #ebebeb;
	color: #333;
}
.nav-right-div{
	color:#999;
}
.home{
	width: 100%;
	height: 4680px;
	position: absolute;
	overflow: auto;
}
.banner1{
	width: 375px;
	height: 108px;
	margin-top: 50px;
}
.banner1 img{
	width: 375px;
	height: 108px;
	    margin-top: 50px;
}
.billboards{
	margin: 0 auto;
}
.shops{
	background-color: #fff;
    padding: 15px 0;
    width: 100%;
    height: 186px;
    position: absolute;
    top: 158px;
}
.shops .shop{
	    width: 24%;
    height: 100%;
    margin: 8px 0;
    text-align: center;
    display: inline-block;
        height: 62px;
}
.shops .shop img{
	width: 40px;
	height: 40px;
}
.category-name{
	    font-size: 12px;
    text-align: center;
    color: #323232;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.home .active{
	background: #fff;
	position: absolute;
    top: 344px;
    width: 100%;
    height: 97px;
}
.active-contain{
	display: flex;
	height: 97px;
	
	justify-content: space-between;
	align-items: center;
}
.line{
	height: 8px;
    background: #f2f2f2;
}
.avtive-left{
	    float: left;
    width: 50%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.avtive-left img{
	width: 175px;
	height: 77px;
}
.active-right{
	    float: left;
    width: 50%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.active-right img{
	width: 175px;
	height: 77px;
}
.price_active{
	width: 100%;
	height: 174px;
	position: absolute;
	top: 442px;
	background: #fff;
}
.active-title{
	    height: 13px;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    margin-top: 10px;
    color: #323232;
}
.active-center{
	    padding-left: 10px;
    padding-right: 10px;
    height: 174px;
    background: #fff;
}
.active-center{
	display: flex;
	justify-content: space-between;
}
.active-center .center-left img{
	width: 175px;
	height: 154px;
	margin-top: 10px;
}
.active-center .center-right .box1 img{
	width: 175px;
	height: 74px;
	margin-top: 10px;
}
.active-center .center-right .box1{
	width: 175px;
	height: 74px;
}
.active-center .center-right .box2 img{
	width: 175px;
	height: 74px;
	margin-top: 20px;
}
.active-center .center-right .box2{
	width: 175px;
	height: 74px;
}
.subject{
	width: 100%;
}
.subject-center{
	padding: 10px;
	background: #fff;
}
.center-img{
	width: 355px;
	height: 80px;
}
.center-img img{
	width: 355px;
	height: 80px;
}
.pic-list{
	height: 140px;
}
.slick-slider{
	position: relative;
	display: block;
	box-sizing: border-box;
}
.slick-list{
	overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
}
.list-li{
	width: 110px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.control-pic{
	width: 85px;
    height: 85px;
}
.control-pic img{
	width: 85px;
    height: 85px;
}
.control-name{
	    font-size: 12px;
    color: #323232;
    height: 16px;
    overflow: hidden;
}
.control-price{
	font-size: 13px;
    color: #ff6640;
    margin-top: 10px;
}
.boo{
	width: 100%;
	position: absolute;
	top: 647px;
}
.boo1{
	width: 100%;
    position: absolute;
    top: 2135px;
}
.container{
	margin: 0 auto;
    max-width: 600px;
    min-width: 320px;
}
.title{
	height: 33px;
    background-color: #f2f2f2;
    line-height: 33px;
    font-size: 13px;
    text-align: center;
    color: #323232;
    margin-bottom: -5px;
}
.items{
	background-color: #f2f2f2;
    min-height: 510px;
    padding-right: 10px;
    padding-left: 10px;
}
.tips{
	text-align: center;
    font-size: 12px;
    color: #999;
}
.item{
	position: relative;
    float: left;
    width: 50%;
    text-align: center;
    padding-top: 5px;
}
.even{
	    padding-right: 2.5px;
}
.odd{
	    padding-left: 2.5px;
}
.logo{
	display: inline-block;
    width: 100%;
    background: #fff;
}
.logo-img{
	width: 175px;
	height: 175px;	
}
.logo .logo-name{
	font-size: 12px;
    height: 34px;
    color: #323232;
    text-align: left;
    padding-left: 6px;
}
.content1{
	text-align: left;
    padding-bottom: 10px;
}
.content1 .price{
	font-size: 13px;
    color: #ff5000;
    padding-left: 6px;
}
.content .inventory{
	    font-size: 9px;
    color: #999;
    margin-left: 15px;
}
.logo-img img{
	width: 175px;
	height: 175px;
}

</style>