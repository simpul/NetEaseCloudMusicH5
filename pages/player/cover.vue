<template>
	<view @click="changeBody" class="cover">
		<img :src="songDetail.al.picUrl" >
		<view class="btns">
			<i class="iconfont">&#xe612;</i>
			<i class="iconfont">&#xe663;</i>
			<i class="iconfont">&#xe613;</i>
			<i class="iconfont">&#xe611;</i>
			<i class="iconfont">&#xe728;</i>
		</view>
	</view>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		props: ['changeBody'],
		computed: {
			...Vuex.mapState(['songDetail'])
		}
	}
</script>

<style>
	@font-face {
		font-family: 'iconfont';  /* project id 1354255 */
		src: url('../../static/font_1354255_hvy5bf1x9g/iconfont.eot');
		src: url('../../static/font_1354255_hvy5bf1x9g/iconfont.eot?#iefix') format('embedded-opentype'),
		url('../../static/font_1354255_hvy5bf1x9g/iconfont.woff2') format('woff2'),
		url('../../static/font_1354255_hvy5bf1x9g/iconfont.woff') format('woff'),
		url('../../static/font_1354255_hvy5bf1x9g/iconfont.ttf') format('truetype'),
		url('../../static/font_1354255_hvy5bf1x9g/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family:"iconfont" !important;
		font-size:48upx;
		font-style:normal;
		color: #ccc;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.4upx;
		-moz-osx-font-smoothing: grayscale;
	}
	.cover {
		position: relative;
	}
	.cover img {
		position: absolute;
		top: 15%;
		left: 0;
		right: 0;
		width: 60%;
		border-radius: 50%;
		margin: auto;
		border: 8upx solid rgba(255, 255, 255, .3);
	}
	.btns {
		display: flex;
		width: 100%;
		justify-content: space-around;
		position: absolute;
		bottom: 0;
		left: 0;
	}
</style>
