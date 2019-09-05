<template>
	<view class="control">
		<i @click="switchMode" class="iconfont" v-html="mode"></i> <!-- 随机&#xe71f; 循环&#xe621; 单曲&#xe610;-->
		<i @click="prev" class="iconfont">&#xe600;</i>
		<cmd-icon @click="switchState" :type="playState ? 'pause' : 'play'" size="50" color="#ccc"></cmd-icon>
		<i @click="next" class="iconfont rotate">&#xe600;</i>
		<i @click="toList" class="iconfont fs30">&#xe61a;</i>
	</view>
</template>

<script>
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	import Vuex from 'vuex'
	export default {
		computed: {
			...Vuex.mapState(['playState', 'playMode']),
			mode() {
				let arr =['&#xe610;', '&#xe621;', '&#xe71f;'];
				return arr[this.playMode];
			}
		},
		methods: {
			...Vuex.mapMutations(['playMusic', 'pauseMusic', 'switchPlayMode']),
			...Vuex.mapActions(['nextSong', 'prevSong']),
			switchState() {
				if (this.playState) {
					this.pauseMusic();
				} else {
					this.playMusic();
				}
			},
			switchMode() {
				this.switchPlayMode();
			},
			toList() {
				this.$emit("list");
			},
			prev() {
				this.prevSong();
			},
			next() {
				this.nextSong();
			}
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	@font-face {
		font-family: 'iconfont';  /* project id 1356499 */
		src: url('../../static/font_1356499_ktar15m6upo/iconfont.eot');
		src: url('../../static/font_1356499_ktar15m6upo/iconfont.eot?#iefix') format('embedded-opentype'),
		url('../../static/font_1356499_ktar15m6upo/iconfont.woff2') format('woff2'),
		url('../../static/font_1356499_ktar15m6upo/iconfont.woff') format('woff'),
		url('../../static/font_1356499_ktar15m6upo/iconfont.ttf') format('truetype'),
		url('../../static/font_1356499_ktar15m6upo/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family:"iconfont" !important;
		color: #ccc;
		font-size:52upx;
		font-style:normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.4upx;
		-moz-osx-font-smoothing: grayscale;
	}
	.rotate {
		transform: rotate(180deg);
	}
	.control {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 20upx;
	}
	.fs30 {
		font-size: 60upx;
	}
</style>
