<template>
	<view class="bar">
		<cmd-icon @click="goBack" type="chevron-left" size="26" color="#fff"></cmd-icon>
		<view class="text">
			<p class="name">
				<slot name="songName">歌单</slot>
			</p>
		</view>
	</view>
</template>

<script>
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	export default {
		methods: {
			goBack() {
				uni.navigateBack();
			}
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	.bar {
		display: flex;
		padding: 14upx 6upx;
	}
	.bar .cmd-icon {
		margin-left: 10upx;
		line-height: 80upx!important;
	}
	.bar .text {
		display: flex;
		align-items: center;
		margin-left: 20upx;
		color: #FFFFFF;
	}
	.text .name {
		font-size: 40upx;
	}
</style>
