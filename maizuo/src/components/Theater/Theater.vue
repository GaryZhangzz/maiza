<template>
	
	<div id="nav">
	    		<nav id="nav">
		    		<div class="nav-left">
		    			<div class="nav-left-icon" @click="goList()">
		    					<i class="nav-left-icons iconfont"></i>
		    			</div>
		    			<div class="nav-left-inner">卖座电影</div>
		    		</div>
		    		<div class="nav-right">
		    				<span>深圳</span>
		    				<span class="icon11">
		    					<i class="icon111 iconfont"></i>
		    				</span>
		    		</div>
		    		<div class="iconfont nav-right-div"></div>
    			</nav>
    			
    			<div class="theater-inner">
    				<div class="inner-div" v-for='arr2(item,index) in arr2'>
    					<div class="inner-div1" @click='zr()'>{{arr2[index]}}</div>
    					<div class="inner-div2" v-show='zzr'>
    						<div class="content1" v-for='arr(item,index) in arr[index]'>
    							<div class="content2">
    								<div class="content1-left">
    									<div class="left-box1">
    										<i class="box1-ico1">{{item.name}}</i>
    										<i class="box1-ico2">座</i>
    										<i class="box1-ico3">通</i>
    									</div>
    									<div class="left-box2">
    										<span>可乐爆米花</span>
    										<span>优惠活动</span>
    									</div>
    									<div class="left-box3">
    										{{item.address}}
    									</div>
    									<div class="left-box4">
    										<span>距离</span>
    										<span>未知</span>
    									</div>
    								</div>
    								<div class="content1-right ">
    									<i class="iconfont"></i>
    								</div>
    							</div>
    						</div>
    						
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
	 
	 
	  export default{
	 	data(){
	 		return{
	 			isSelect: false,
	 			zzr:false,
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
			zr(){
				this.zzr=!this.zzr
				console.log(123);
				
			}
			
	 	},
	 	created(){
	 		
	 		this.$http.get('api/cinema?__t=1499235078194')
	 		.then((response)=>{
	 			this.response=response.data.data.cinemas;
	 			var that =this;
	 			setTimeout(()=>{
	 				that.showList=response.data.data.cinemas
	 			},100)
	 			//console.log(this.response);
	 			setTimeout(()=>{
	 				let arr=[];
	 				let arr2=[];
	 				let j=[];
	 				for(let i=0;i<response.data.data.cinemas.length;i++){
	 					if(arr2.indexOf(response.data.data.cinemas[i].district.name)==-1){
	 						arr2.push(response.data.data.cinemas[i].district.name);
	 						arr.push([response.data.data.cinemas[i]]);
	 		
	 					}else{
	 						j = arr2.indexOf(response.data.data.cinemas[i].district.name);
	 						//console.log(j);
	 						arr[j].push(response.data.data.cinemas[i])
	 					}
	 					
	 				}
	 				this.arr=arr;
	 				this.arr2=arr2;
	 				//console.log(arr);
	 				//console.log(arr2);
	 			},100)
	 		})
	 		.catch((error)=>{
	 			console.log(error);
	 		})
	 		
	 	},
	 	
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
	
	color: #333;
}
.theater-inner{
	position: absolute;
	width: 100%;
	top: 50px;
	overflow: auto;
	height: 618px;
}
.theater-inner .inner-div1{
	    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    cursor: pointer;
}
.theater-inner .inner-div2{
	display: block;
	background: #fff;
}
.theater-inner .inner-div2 .content1{
	margin: 0 auto;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    min-width: 320px;
    height: 121px;
}
.theater-inner .inner-div2 .content2{
	border-radius: 5px;
    padding: 10px 0 12px 16px;
    cursor: pointer;
    height: 120px;
    display: flex;
    justify-content: space-between;
}
.theater-inner .inner-div2 .content1-left{
    width: 75%;
    min-width: 230px;
    float: left;
    cursor: pointer;
    overflow: hidden;
}
.theater-inner .inner-div2 .content1-left .left-box1{
	display: inline-block;
    font-size: 16px;
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 24px;
}
.theater-inner .inner-div2 .content1-left .left-box1 .box1-ico1{
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: text-top;
    max-width: 80%;
    font-style: normal;
}
.theater-inner .inner-div2 .content1-left .left-box1 .box1-ico2{
	color: #fc8558;
    font-style: normal;
    font-size: 12px;
    margin-right: 3px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fc8558;
    border-radius: 50%;
}
.theater-inner .inner-div2 .content1-left .left-box1 .box1-ico3{
	    color: #88aec8;
    font-style: normal;
    margin-right: 3px;
    border: 1px solid #88aec8;
    border-radius: 50%;
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
}
.theater-inner .inner-div2 .content1-left .left-box2{
	    margin-bottom: 5px;
    font-size: 10px;
    height: 18px;
    display: flex;
    align-items: center;
}
.theater-inner .inner-div2 .content1-left .left-box2 span{
	    height: 18px;
    display: flex;
    align-items: center;
}
.theater-inner .inner-div2 .content1-left .left-box2 span:nth-child(1){
    border-radius: 3px;
    padding: 0 5px;
    margin: 0 5px;
    font-style: normal;
    color: #fff;
    height: 15px;
    line-height: 15px;
    background-color: #51add0;
}
.theater-inner .inner-div2 .content1-left .left-box2 span:nth-child(2){
    border-radius: 3px;
    padding: 0 5px;
    margin: 0 5px;
    font-style: normal;
    color: #fff;
    height: 15px;
    line-height: 15px;
    background-color: #ff9658;
}
.theater-inner .inner-div2 .content1-left .left-box3{
	display: inline-block;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #ccc;
    height: 16px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 5px;
}
.theater-inner .inner-div2 .content1-right{
	padding-right: 15px;
    line-height: 36px;
    color: #c6c6c6;
        width: 31px;
    height: 36px;
}
.theater-inner .inner-div2 .content1-right i:before{
	content: '\e604';
}
.theater-inner .inner-div2 .content1-left .left-box4{
	font-size: 12px;
    color: #ccc;
    height: 18px;
    display: flex;
    align-items: center;
}





</style>