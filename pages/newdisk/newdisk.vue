<template>
	<view class="newdisk">
		<img class="bg" :src="maskImg+'?param=200y200'" alt="maskImg">
		<view class="mask"></view>
		<navigate>
			<template v-slot:songName>
				专辑
			</template>
		</navigate>
		<detail :src="maskImg" :name="name" :info="info"></detail>
		<four :commentCount="info.album.info.commentCount" :shareCount="info.album.info.shareCount"></four>
		<playlist :trackCount="info.album.size" :tracks="info.songs"></playlist>
		<index-player v-show="songDetail" @list="goToList"></index-player>
		<list-mini ref="listRef"></list-mini>
	</view>
</template>

<script>
	import navigate from "@/pages/newdisk/navigate.vue"
	import detail from "@/pages/newdisk/detail.vue"
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
				info: {}
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
				url: 'http://47.112.12.190/album/newest',
				success: (res) => {
					const data = res.data.albums[option.index];
					self.maskImg = data.picUrl;
					self.name = data.name;
					uni.request({
						url: `http://47.112.12.190/album?id=${data.id}`,
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
			four,
			playlist,
			indexPlayer,
			listMini
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
