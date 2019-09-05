<template>
	<view>
		<view class="status_bar"></view>
		<view class="query">
			<cmd-icon @click="goBack" type="chevron-left" size="26" color="#000"></cmd-icon>
			<input :value="keyword" @confirm="doSearch" @input="changing" focus="true" type="text" :placeholder="hotSearch"/>
		</view>
	</view>
</template>

<script>
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	export default {
		props: ['keyword', 'hotSearch'],
		methods: {
			goBack() {
				uni.navigateBack();
			},
			doSearch(e) {
				this.$emit('confirmed', e.detail.value);
			},
			changing(e) {
				this.$emit('change', e.detail.value);
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
	.query {
		display: flex;
		align-items: center;
		height: 80upx;
		padding: 0 10upx;
	}
	.query input {
		width: 80%;
		margin-left: 20upx;
	}
</style>
