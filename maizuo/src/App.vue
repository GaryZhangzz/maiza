<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	
	
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	a{
			text-decoration: none;
		}
	html,body,#app{
		width: 100%;
		height: 100%;
	}
#app .header{
	width: 100%;
	height: 44px;
	position: absolute;
	left: 0;
	top: 0;
	background: lightseagreen;
}
#app .header .title{
	width: 100%;
	height: 44px;
	line-height: 44px;
	text-align: center;
	font-size: 24px;
	color: #fff;
}
.left-btn, .right-btn{
	width: 50px;
	height: 34px;
	position: absolute;
	top: 5px;
	border: 1px solid #fff;
	border-radius: 5px;
	color: #fff;
	text-align: center;
	line-height: 34px;
}
.left-btn{
	left: 10px;
}
.right-btn{
	right: 10px;
}
#app .content{
	width: 100%;
	position: absolute;
	top: 44px;
	bottom: 49px;
	background: #fff;
	z-index: 10;
}
</style>