<template>
	<view class="detail">
		<view class="image">
			<img :src="src+'?param=200y200'" :alt="name">
			<view class="black"></view>
		</view>
		<view class="text">
			<p>{{name}}</p>
			<view class="artists">
				<span>歌手: {{info.album.artists | artists}}</span>
			</view>
			<p class="description">{{info.album.description}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['src', 'name', 'info'],
		filters: {
			artists(value) {
				let arr = value;
				let str = '';
				for (let i of arr) {
					str += i.name + ',';
				}
				return str.slice(0, -1)
			}
		}
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
	.image .black {
		position: absolute;
		z-index: -1;
		top: -10%;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #000000;
	}
	.image img {
		
		width: 36vw;
		border-radius: 10upx;
	}
	.text {
		width: 48vw;
		margin-left: 40upx;
	}
	.text p:first-child {
		color: #fff;
		font-weight: bold;
		font-size: 36upx;
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
	.text .artists {
		margin: 28upx 0;
		display: flex;
		align-items: center;
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
