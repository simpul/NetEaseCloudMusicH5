<template>
	<view class="recommend">
		<view class="title">
			<h4>推荐歌单</h4>
			<view class="more">歌单广场</view>
		</view>
		<view class="content">
			<ul>
				<li v-for="(item, index) in recommendList" :key="index" @click="toRecommend(index)">
					<img :src="item.picUrl+'?param=200y200'" :alt="item.name">
					<view class="text">{{item.name}}</view>
					<view class="playcount">
						<cmd-icon type="play" color="#fff" size="16"></cmd-icon>
						<span>{{item.playCount | count}}</span>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import cmdIcon from "../../components/cmd-icon/cmd-icon.vue"
	export default {
		props: ['recommend'],
		computed: {
			recommendList() {
				return this.recommend.slice(0, 6);
			}
		},
		methods: {
			toRecommend(index) {
				uni.navigateTo({
					url: `../recommend/recommend?index=${index}`
				})
			}
		},
		filters: {
			count(value) {
				let count = value + '';
				if (count.length >= 9) {
					let num = count.slice(0, -7);
					return +num/10 + '亿';
				} else if (count.length >= 5) {
					let num = count.slice(0, -3);
					return +num/10 + '万';
				} else {
					return value;
				}
			}
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	.recommend {
		border-top: 2upx solid #ccc;
		margin-top: 40upx;
		padding: 40upx 20upx;
	}
	.title {
		display: flex;
		justify-content: space-between;
	}
	.title .more {
		width: 128upx;
		height: 48upx;
		border: 2upx solid #ccc;
		text-align: center;
		border-radius: 24upx;
		line-height: 48upx;
		font-size: 24upx;
		color: #666;
	}
	.content ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-top: 40upx;
	}
	.content ul li {
		position: relative;
		width: 30%;
	}
	.content li img {
		width: 100%;
		border-radius: 10upx;
	}
	.content li .text {
		display: -webkit-box;
		margin-bottom: 20upx;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		white-space: normal;
		font-size: 24upx;
	}
	.content li .playcount {
		position: absolute;
		top: 0;
		right: 10upx;
		color: #FFFFFF;
		font-size: 24upx;
	}
	.playcount span {
		vertical-align: middle;
	}
</style>
