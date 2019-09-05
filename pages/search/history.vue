<template>
	<view class="history">
		<view class="title">
			<h5>历史记录</h5>
			<cmd-icon type="trash" color="#999" size="18" @click="deleteHistoryList"></cmd-icon>			
		</view>
		<view class="content">
			<ul>
				<li v-for="(item, index) in historyList" :key="index" @click="search(item)">
					{{item}}
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	import Vuex from 'vuex';
	export default {
		props: ["search"],
		computed: {
			...Vuex.mapState(['historyList']),
		},
		methods: {
			...Vuex.mapMutations(['deleteHistoryList']),
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	.history {
		padding-bottom: 20upx;
	}
	.title {
		padding: 20upx;
		display: flex;
		justify-content: space-between;
	}
	.content {
		height: 70upx;
		overflow: hidden;
	}
	.content ul {
		display: -webkit-box;
		overflow-x: scroll;
		padding-bottom: 20upx;
	}
	.content ul li {
		background-color: rgba(204, 204, 204, .3);
		border-radius: 40upx;
		font-size: 28upx;
		padding: 12upx 20upx;
		margin-left: 20upx;
	}
</style>
