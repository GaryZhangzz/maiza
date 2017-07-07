<template>
	
	<div id="nav">
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">卖座·HOPPA演出</div>
		    		</div>
		    		
		    		<div class="iconfont nav-right-div"></div>
    			</nav>
    			<div class="show-main">
    				<ul class="main-list">
    					<router-link :to="{name:'show2'}">
    					<li v-for='item in arr'>
	    						<div class="list-img">
	    							<img :src="item.skuList[0].image">
	    						</div>
	    						<p class="list-inner">{{item.masterName}}</p>
    					</li>
    					
    					<li v-for='list in arr2'>
    						<div class='list-group'>
    							<img :src='list.skuList[0].image'>
    						</div>
    						<p class="list-group-item">{{list.masterName}}</p>
    						<div class="price-item">
    							<div class="coupon-home first-child">
    								<span>¥40</span>
    								<span>适用于680票面</span>
    							</div>
    							<div class="coupon-home2 ">
    								<span>¥161</span>
    								<span>适用于1360票面</span>
    							</div>
    						</div>
    					</li>
    					</router-link>
    				</ul>
    				<p class="last"></p>
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
					{name:'首页',path:'/show'},
					{name:"电影",path:"/movie"},
					{name:"我的",path:"/me"}
				],
				arr:[],
				arr2:[],
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
			
	 	},
	 	created(){
	 		var that=this;
	 		this.$http.get('/schedule?pageSize=6&pageNumber=1&sortKey=sortSalesCount&sort')
	 		.then(function(response){
	 			that.arr=response.data.data.list
	 			//console.log(that.arr);
	 		})
	 		this.$http.get('/schedule?pageSize=6&pageNumber=2&sortKey=sortSa')
	 		.then(function(res){
	 			that.arr2=res.data.data.list
	 			console.log(that.arr2);
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
        z-index: 10000
}
#app{
	background-color: #ebebeb;
	color: #333;
}
#nav{
	position: initial !important;
}
.nav-right-div{
	color:#999;
}
.main-list{
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	position: absolute;
	top: 0;
	overflow: auto;
}
.main-list li{
	background-color: #fff;
    flex: 1;
    margin-top: 5px;
    box-sizing: border-box;
    padding: 10px 10px 15px 10px;
    min-height: 200px;
    overflow-x: hidden;
}
.main-list li .list-img{
	background-color: #ebebeb;
    box-sizing: border-box;
    width: 100%;
    border-radius: 2px;
    width: 355px;
    height: 177.5px;
}
.main-list li .list-img img{
	width: 355px;
    height: 177.5px;
}
.main-list li .list-inner{
	    font-size: 17px;
	        margin: 6px 0 0 0;
    line-height: 1.2em;
}
.show-main{
	width: 100%;
	position: absolute;
	overflow: auto;
	top: 50px;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10000;
}
.list-group{
	width: 355px;
	height:177.5px;
}
.list-group img{
	width: 355px;
    height: 177.5px;
}
.list-group-item{
	font-size: 17px;
	    margin: 6px 0 0 0;
    line-height: 1.2em;
}
.price-item{
	    max-height: 38px;
	        margin-top: 10px;
	        white-space: nowrap;
	    justify-content: flex-start;
	        align-items: center;
    overflow: hidden;
}
.coupon-home {
	    font-size: 14px;
    padding: 4px;
    color: #ff5000;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 84px;
    box-sizing: border-box;
    max-height: 32px;
    display: inline-block;
    margin: 0 0 0 10px;
    margin-left: 0;
    max-height: 38px;
}
.coupon-home2{
	font-size: 14px;
    padding: 4px;
    color: #ff5000;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 84px;
    box-sizing: border-box;
    max-height: 32px;
    display: inline-block;
    margin: 0 0 0 10px;
    margin-left: 0;
    max-height: 38px;
    margin-left: 50px;
}
</style>