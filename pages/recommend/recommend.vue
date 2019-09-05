<template>
	<view class="recommend">
		<img class="bg" :src="maskImg+'?param=200y200'" alt="maskImg">
		<view class="mask"></view>
		<navigate>
			<template v-slot:artists>
				{{title}}
			</template>
		</navigate>
		<detail :src="maskImg" :name="name" :playCount="playCount" :trackCount="trackCount" :info="info"></detail>
		<four :commentCount="info.playlist.commentCount" :shareCount="info.playlist.shareCount"></four>
		<playlist :trackCount="trackCount" :subscribedCount="info.playlist.subscribedCount" :tracks="info.playlist.tracks"></playlist>
		<index-player v-show="songDetail" @list="goToList"></index-player>
		<list-mini ref="listRef"></list-mini>
	</view>
</template>

<script>
	import navigate from "@/pages/recommend/navigate.vue"
	import detail from "@/pages/recommend/detail.vue"
	import four from "@/pages/recommend/four.vue"
	import playlist from "@/pages/recommend/playlist.vue"
	import indexPlayer from '@/pages/index/index-player.vue'
	import listMini from '@/pages/list/list-mini.vue'
	import Vuex from 'vuex'
	export default {
		data() {
			return {
				maskImg: '',
				title: '',
				name: '',
				playCount: 0,
				trackCount: 0,
				info: {},
			}
		},
		computed: {
			...Vuex.mapState(['songDetail'])
		},
		methods: {
			goToList() {
				this.$refs.listRef.$refs.popupRef.show();
			}
		},
		onLoad(option) {
			const self = this;
			uni.request({
				url: "http://47.112.12.190/personalized",
				success: (res) => {
					const data = res.data.result[option.index];
					self.maskImg = data.picUrl;
					self.title = data.copywriter;
					self.name = data.name;
					self.playCount = data.playCount;
					self.trackCount = data.trackCount;
					uni.request({
						url: `http://47.112.12.190/playlist/detail?id=${data.id}`,
						success: (res) => {
							self.info = res.data;
						}
					})
				}
			})
		},
		components: {
			navigate,
			detail,
			indexPlayer,
			listMini,
			four,
			playlist
		}
	}
</script>

<style>
	.bg {
		position: fixed;
		top: -10%;
		left: -10%;
		z-index: -999;
		width: 120vw;
		height: 70vh;
		-webkit-filter: blur(50upx);
		filter: blur(50upx);
	}
	.mask {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: -100;
		background-color: rgba(0, 0, 0, .5);
	}
</style>
