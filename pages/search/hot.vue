<template>
	<view class="hot">
		<h5>热搜榜</h5>			
		<view class="content">
			<ul>
				<li v-for="(item, index) in hotList" :key="index" @click="search(item.searchWord)">
					<view class="index">{{index+1}}</view>
					<view class="detail">
						<span class="name">{{item.searchWord}}</span><span class="score">{{item.score}}</span>
						<br>
						<span class="cont">{{item.content}}</span>
					</view>
				</li>
			</ul>
		</view>		
	</view>
</template>

<script>
	export default {
		props: ['search'],
		data() {
			return {
				hotList: []
			}
		},
		methods: {
			
		},
		mounted() {
			let self = this;
			uni.request({
				url: 'http://47.112.12.190/search/hot/detail',
				success: (res) => {
					self.hotList = res.data.data;
				}
			})
		}
	}
</script>

<style>
	.hot {
		padding: 20upx;
	}
	.content ul li {
		display: flex;
	}
	.content ul li:first-child .index, .content ul li:nth-child(2) .index, .content ul li:nth-child(3) .index {
		color: red;
	}
	.content ul li:first-child .name, .content ul li:nth-child(2) .name, .content ul li:nth-child(3) .name {
		font-weight: bold;
	}
	.content .index {
		width: 14%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		color: #999;
	}
	.content .detail {
		font-size: 24upx;
		padding-top: 12upx;
		width: 90%;
	}
	.name {
		font-size: 32upx;
	}
	.score {
		color: #ccc;
		margin-left: 20upx;
	}
	.cont {
		color: #999;
	}
</style>
