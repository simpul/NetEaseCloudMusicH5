<template>
	<view class="search">
		<query :hotSearch="hotSearch" :keyword="keyword" @confirmed="barSearchInputConfirmed" @change="barSearchInputChanged"></query>
		<history v-show="showHistory" :search="search"></history>
		<result :result="searchResult" v-show="showResult"></result>
		<hot v-show="showHot" :search="search"></hot>
	</view>
</template>

<script>
	import query from '@/components/navigation/query.vue'
	import history from '@/pages/search/history.vue'
	import hot from '@/pages/search/hot.vue'
	import result from '@/pages/search/result.vue'
	
	import Vuex from 'vuex';
	export default {
		mounted() {
			const self = this;
			uni.request({
				url: 'http://47.112.12.190/search/default',
				success: (res) => {
					self.hotSearch = res.data.data.realkeyword;
				}
			})
		},
		data() {
			return {
				keyword: '',
				searchResult: [],
				showHot: true,
				showResult: false,
				hotSearch: ''
			}
		},
		methods: {
			...Vuex.mapMutations(['addHistoryList', 'setSearchKeyWord']),
			search(keyword) {
				let self = this;
				self.keyword = keyword;
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
			},
			barSearchInputConfirmed(text) {
				if (text.trim()) {
					this.search(text);
				} else {
					this.search(this.hotSearch);
				}
			},
			barSearchInputChanged(text) {
				if(!text.trim()) {
					this.showResult = false;
					this.showHot = true;
				}
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
			result,
			query
		}
	}
</script>

<style>
</style>
