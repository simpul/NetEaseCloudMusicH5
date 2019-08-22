<template>
	<view class="menu">
		<ul>
			<li>
				<view>
					<i class="iconfont">&#xe652;</i>
				</view>
				<text>每日推荐</text>
			</li>
			<li>
				<view>
					<i class="iconfont">&#xe78a;</i>
				</view>
				<text>歌单</text>
			</li>
			<li>
				<view>
					<i class="iconfont">&#xe782;</i>
				</view>
				<text>排行榜</text>
			</li>
			<li>
				<view>
					<i class="iconfont">&#xe61b;</i>
				</view>
				<text>电台</text>
			</li>
			<li>
				<view>
					<i class="iconfont">&#xe647;</i>
				</view>
				<text>直播</text>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.menu ul {
		display: flex;
		justify-content: space-around;
	}
	.menu ul li {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.menu li text {
		margin-top: 16upx;
		font-size: 24upx;
	}
	.menu li view {
		width: 80upx;
		height: 80upx;
		background-color: red;
		border-radius: 50%;
		text-align: center;
		line-height: 80upx;
	}
	.menu li i {
		font-size: 40upx;
		color: #fff;
	}
	
	@font-face {
	  font-family: 'iconfont';  /* project id 1344220 */
	  src: url('../../static/font_1344220_msdpw9iobki/iconfont.eot');
	  src: url('../../static/font_1344220_msdpw9iobki/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../../static/font_1344220_msdpw9iobki/iconfont.woff2') format('woff2'),
	  url('../../static/font_1344220_msdpw9iobki/iconfont.woff') format('woff'),
	  url('../../static/font_1344220_msdpw9iobki/iconfont.ttf') format('truetype'),
	  url('../../static/font_1344220_msdpw9iobki/iconfont.svg#iconfont') format('svg');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 32upx;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
</style>
