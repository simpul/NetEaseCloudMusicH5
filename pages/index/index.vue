<template>
	<view class="index">
		<index-title @left="clickLeft" @right="clickRight"></index-title>
		<index-swiper :banners="banners"></index-swiper>
		<index-menu></index-menu>
		<index-recommend :recommend="recommend"></index-recommend>
		<index-newdisk :newdisk="newdisk"></index-newdisk>
		<index-player v-show="songDetail" @list="goToList"></index-player>
		<list-mini ref="listRef"></list-mini>
	</view>
</template>

<script>
	import indexTitle from '@/components/navigation/title.vue'
	import indexSwiper from '@/pages/index/index-swiper.vue'
	import indexMenu from '@/pages/index/index-menu.vue'
	import indexRecommend from '@/pages/index/index-recommend.vue'
	import indexNewdisk from '@/pages/index/index-newdisk.vue'
	import indexPlayer from '@/pages/index/index-player.vue'
	import listMini from '@/pages/list/list-mini.vue'
	
	import Vuex from 'vuex'
	export default {
		mounted() {
			// 音乐自然播完毕时
			this.audio.onEnded(()=>{
				this.pauseMusic();
			});
		},
		data() {
			return {
				banners: [],
				recommend: [],
				newdisk: []
			}
		},
		computed: {
			...Vuex.mapState(['songDetail', 'audio']),
		},
		onShow() {
			const self = this;
			// 请求轮播图数据
			uni.request({
				url: 'http://47.112.12.190/banner',
				success: (res) => {
					self.banners = res.data.banners;
				}
			})
			
			//请求推荐歌单数据
			uni.request({
				url: 'http://47.112.12.190/personalized',
				success: (res) => {
					self.recommend = res.data.result;
					console.log(self.recommend);
				}
			})
			
			//请求新碟数据
			uni.request({
				url: 'http://47.112.12.190/album/newest',
				success: (res) => {
					self.newdisk = res.data.albums;
					console.log(self.newdisk);
				}
			})
		},
		methods: {
			...Vuex.mapMutations(['pauseMusic']),
			// 菜单栏
			clickLeft() {
				uni.showToast({
					title: '功能开发中(⊙o⊙)',
					duration: 1000,
					icon: 'none'
				})
			},
			
			// 搜索栏
			clickRight() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			goToList() {
				this.$refs.listRef.$refs.popupRef.show();
			}
		},
		components: {
			indexSwiper,
			indexMenu,
			indexRecommend,
			indexNewdisk,
			indexPlayer,
			listMini,
			indexTitle
		}
	}
</script>

<style>
	.index {
		padding-bottom: 100upx;
	}
</style>
