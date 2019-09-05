<template>
	<view class="detail">
		<view class="image">
			<img :src="src+'?param=200y200'" :alt="name">
			<view class="playcount">
				<cmd-icon type="play" color="#fff" size="16"></cmd-icon>
				<span>{{playCount | count}}</span>
			</view>
		</view>
		<view class="text">
			<p>{{name}}</p>
			<view class="creator">
				<img :src="info.playlist.creator.avatarUrl+'?param=50y50'" />
				<span>{{info.playlist.creator.nickname}}</span>
			</view>
			<p class="description">{{info.playlist.description}}</p>
		</view>
	</view>
</template>

<script>
	import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
	export default {
		props: ['src', 'name', 'playCount', 'trackCount', 'info'],
		components: {
			cmdIcon
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
	}
</script>

<style>
	.detail {
		display: flex;
		padding: 40upx;
	}
	.image {
		position: relative;
	}
	.image img {
		width: 36vw;
		border-radius: 10upx;
	}
	.image .playcount {
		position: absolute;
		top: 0;
		right: 10upx;
		color: #FFFFFF;
		font-size: 24upx;
	}
	.text {
		width: 48vw;
		margin-left: 40upx;
	}
	.text p {
		color: #fff;
		font-size: 32upx;
	}
	.text img {
		width: 60upx;
		border-radius: 50%;
		margin-right: 16upx;
	}
	.text span {
		color: #eee;
		font-size: 28upx;
	}
	.text .creator {
		margin: 28upx 0;
		display: flex;
		align-items: center;
	}
	.creator span {
		
	}
	.text .description {
		display: -webkit-box;
		height: 2.6em;
		color: #ccc;
		font-size: 0.5em;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		white-space: normal;
	}
</style>
