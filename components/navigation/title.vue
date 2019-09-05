<template>
	<view>
		<view class="status_bar"></view>
		<view class="title">
			<cmd-icon type="menu" size="30" color="#000" @click="clickLeft"></cmd-icon>
			<view>
				音乐播放器
			</view>
			<cmd-icon type="search" size="30" color="#000" @click="clickRight"></cmd-icon>
		</view>
	</view>
</template>

<script>
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	export default {
		methods: {
			clickLeft() {
				this.$emit('left');
			},
			clickRight() {
				this.$emit('right');
			}
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80upx;
		padding: 0 10upx;
	}
</style>
