<template>
	<view class="disk">
		<view class="title">
			<h4>新碟</h4>
			<view class="more">更多新碟</view>
		</view>
		<view class="content">
			<ul>
				<li v-for="(item, index) in newdisklist" :key="index">
					<img :src="item.picUrl" :alt="item.name">
					<view class="text">{{item.name}}</view>
					<view class="artists">{{item.artists | artists}}</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["newdisk"],
		computed: {
			newdisklist() {
				return this.newdisk.slice(0, 6);
			}
		},
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
	.disk {
		padding: 0 20upx;
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
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		white-space: normal;
		font-size: 24upx;
	}
	.content li .artists{
		font-size: 24upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		margin-bottom: 20upx;
		color: #666;
	}
</style>
