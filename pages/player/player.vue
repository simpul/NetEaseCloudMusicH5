<template>
	<view :class="{player: true, deeper: isDeep}" >
		<view class="status_bar"></view>
		<view>
			<bar>
				<template #songName>
					{{songDetail.name}}
				</template>
				<template #artists>
					{{songDetail.ar | artists}}
				</template>
			</bar>
			<transition name="fade" mode="out-in">
				<keep-alive>
					<component :changeBody="switchBody" class="comp" :is="body"></component>
				</keep-alive>
			</transition>
			<prog></prog>
			<control @list="toList"></control>
			<list-mini ref="listRef"></list-mini>
		</view>
		<img class="mask" :src="songDetail.al.picUrl" >
	</view>
</template>

<script>
	import bar from '@/components/navigation/bar.vue'
	import cover from '@/pages/player/cover.vue'
	import lyrics from '@/pages/player/lyrics.vue'
	import prog from '@/pages/player/progress.vue'
	import control from '@/pages/player/control.vue'
	import listMini from '@/pages/list/list-mini.vue'

	import Vuex from 'vuex'
	export default {
		data() {
			return {
				body: cover,
				isDeep: false
			}
		},
		methods: {
			switchBody() {
				if (this.body === cover) {
					this.body = lyrics;
					this.isDeep = true;
				} else {
					this.body = cover;
					this.isDeep = false;
				}
			},
			toList() {
				this.$refs.listRef.$refs.popupRef.show();
			}
		},
		computed: {
			...Vuex.mapState(['songDetail'])
		},
		filters: {
			artists(value) {
				let arr = value;
				let str = '';
				for (let i of arr) {
					str += i.name + '/';
				}
				return str.slice(0, -1)
			}
		},
		components: {
			bar,
			prog,
			control,
			listMini
		}
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .1s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.player {
		height: 100vh;
		background-color: rgba(0, 0, 0, .5);
		transition: 1s;
	}
	.deeper {
		background-color: rgba(0, 0, 0, .6)!important;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.comp {
		height: calc(100vh - 340upx);
	}
	.mask {
		position: fixed;
		-webkit-filter: blur(50upx);
		filter: blur(50upx);
		width: 200vw;
		height: 100vh;
		top: 0;
		left: -50vw;
		z-index: -1;
	}
</style>
