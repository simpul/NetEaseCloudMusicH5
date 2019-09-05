<template>
	<view class="four">
		<view class="comment">
			<i class="iconfont">&#xe614;</i>
			<p>{{commentCount}}</p>
		</view>
		<view class="share">
			<i class="iconfont">&#xe607;</i>
			<p>{{shareCount}}</p>
		</view>
		<view class="download">
			<i class="iconfont">&#xe77a;</i>
			<p>下载</p>
		</view>
		<view class="select">
			<i class="iconfont">&#xe60a;</i>
			<p>多选</p>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['commentCount', 'shareCount']
	}
</script>

<style>
	@font-face {
	  font-family: 'iconfont';  /* project id 1386192 */
	  src: url('../../static/font_1386192_sq6vd8eds3s/iconfont.eot');
	  src: url('../../static/font_1386192_sq6vd8eds3s/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../../static/font_1386192_sq6vd8eds3s/iconfont.woff2') format('woff2'),
	  url('../../static/font_1386192_sq6vd8eds3s/iconfont.woff') format('woff'),
	  url('../../static/font_1386192_sq6vd8eds3s/iconfont.ttf') format('truetype'),
	  url('../../static/font_1386192_sq6vd8eds3s/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family:"iconfont" !important;
		font-size:48upx;
		font-style:normal;
		color: #ddd;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.4upx;
		-moz-osx-font-smoothing: grayscale;
	}
	.four {
		display: flex;
		padding: 0 40upx 40upx;
		justify-content: space-around;
	}
	.four p {
		color: #ddd;
		font-size: 32upx;
	}
	.comment, .share, .download, .select {
		text-align: center;
	}
</style>
