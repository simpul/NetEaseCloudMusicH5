<template>
	<view class="search">
		<history v-show="showHistory" :search="search"></history>
		<result :result="searchResult" v-show="showResult"></result>
		<hot v-show="showHot" :search="search"></hot>
	</view>
</template>

<script>
	import history from '@/pages/search/history.vue'
	import hot from '@/pages/search/hot.vue'
	import result from '@/pages/search/result.vue'
	
	import Vuex from 'vuex';
	export default {
		mounted() {
			//console.log(this);
		},
		data() {
			return {
				searchResult: [],
				showHot: true,
				showResult: false,
			}
		},
		onNavigationBarSearchInputConfirmed(e) {
			if (e.text) {
				this.search(e.text);
			} else {
				uni.showToast({
					title: '搜索内容不能为空噢',
					duration: 2000,
					icon: 'none'
				})
			}
		},
		onNavigationBarSearchInputChanged(e) {
			if(!e.text) {
				this.showResult = false;
				this.showHot = true;
			}
		},
		methods: {
			...Vuex.mapMutations(['addHistoryList', 'setSearchKeyWord']),
			search(keyword) {
				let self = this;
				uni.request({
					url: `http://47.112.12.190/search?keywords=${keyword}`,
					success: (res) => {
						if (self.historyList.indexOf(keyword) === -1) self.addHistoryList(keyword);
						self.showResult = true;
						self.showHot = false;
						self.searchResult = res.data.result.songs;
						self.setSearchKeyWord(keyword);
					}
				})
			}
		},
		computed: {
			...Vuex.mapState(['historyList']),
			showHistory() {
				return !!this.historyList.length;
			}
		},
		components: {
			history,
			hot,
			result
		}
	}
</script>

<style>
</style>
