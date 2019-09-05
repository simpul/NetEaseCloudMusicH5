<template>
	<view class="list-mini">
		<popup-layer :direction="'top'" ref="popupRef">
			<view class="list-content">
				<view class="head">
					<view class="mode" @click="switchPlayMode"><i class="iconfont" v-html="modeIcon"></i>{{this.modeText}} ({{this.listArr.length}})</view>
					<!-- 随机&#xe71f; 循环&#xe621; 单曲&#xe610;-->
					<view class="trash" @click="deleteAllSong"><cmd-icon type="trash" size="24" color="#666"></cmd-icon></view>
				</view>
				<view class="songs">
					<ul>
						<li v-for="(item, index) in listArr" :key="index">
							<view class="detail" @click="play({id:item.id, index})">
								<view v-if="songId === item.id" class="now">
									<cmd-icon type="volume-plus" size="24" color="red"></cmd-icon>
								</view>
								<view :class="{'song-name': true, 'ht': true, active: songId === item.id}">
									{{item.name}}
								</view>
								<view class="artists-name ht">
									- {{item.artists | artists}}
								</view>								
							</view>
							<span class="delete" @click="removeSong(index)">
								X
							</span>
						</li>
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
		computed: {
			...Vuex.mapState(['playMode', 'listArr', 'songId']),
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
			...Vuex.mapMutations(['switchPlayMode', 'deleteAllSong', 'removeSong', 'setPlayIndex']),
			...Vuex.mapActions(['setSrc']),
			play(obj) {
				if (obj.id !== this.songId) {
					this.setSrc(obj.id);
					this.setPlayIndex(obj.index);
				}
			}
		},
		filters: {
			artists(value) {
				let arr = value;
				let str = '';
				for (let i of arr) {
					str += i.name + ',';
				}
				return str.slice(0, -1)
			}
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
	.active {
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
