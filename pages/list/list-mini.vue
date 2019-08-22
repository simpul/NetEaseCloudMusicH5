<template>
	<view class="list-mini">
		<popup-layer :direction="'top'" ref="popupRef">
			<view class="list-content">
				<view class="head">
					<view class="mode" @click="switchPlayMode"><i class="iconfont" v-html="modeIcon"></i>{{this.modeText}} (4)</view>
					<!-- 随机&#xe71f; 循环&#xe621; 单曲&#xe610;-->
					<view class="trash"><cmd-icon type="trash" size="24" color="#666"></cmd-icon></view>
				</view>
				<view class="songs">
					<ul>
						<li class="">
							<view class="detail">
								<view class="now">
									<cmd-icon type="volume-plus" size="24" color="red"></cmd-icon>
								</view>
								<view class="song-name ht">
									期待爱
								</view>
								<view class="artists-name ht">
									- 林俊杰/金莎
								</view>								
							</view>
							<span class="delete">
								X
							</span>
						</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
						<li>歌曲</li>
					</ul>
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '@/components/popup/popup-layer.vue'
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	
	import Vuex from 'vuex'
	export default {
		props: ['boolShow'],
		computed: {
			...Vuex.mapState(['playMode']),
			modeIcon() {
				let arr = ['&#xe610;', '&#xe621;', '&#xe71f;'];
				return arr[this.playMode];
			},
			modeText() {
				let arr = ['单曲循环', '列表循环', '随机播放'];
				return arr[this.playMode];
			}
		},
		methods: {
			...Vuex.mapMutations(['switchPlayMode']),
		},
		components: {
			popupLayer,
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
		color: #666;
		font-size:44upx;
		margin-right: 14upx;
		font-style:normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.4upx;
		-moz-osx-font-smoothing: grayscale;
	}
	.list-content {
		height: 50vh;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80upx;
		padding: 20upx 28upx;
		border-bottom: 1px solid #ccc;
	}
	.songs ul {
		height: calc(50vh - 130upx);
		overflow: scroll;
	}
	.songs ul li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 84upx;
		padding: 0 28upx;
	}
	.active .detail{
		color: red;
	}
	.detail {
		display: flex;
		align-items: center;
	}
	.now {
		margin-right: 10upx;
	}
	.song-name {
		max-width: 340upx;
	}
	.artists-name {
		font-size: 28upx;
		color: #666;
		margin-left: 10upx;
		max-width: 230upx;
	}
	.ht {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.delete {
		color: #666;
	}
</style>
