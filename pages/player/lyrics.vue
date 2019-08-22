<template>
	<view @click="changeBody" class="lyrics">
		<view class="havelyric" v-if="haveLyric">
			<ul :style="`margin-top: ${-120*lycIndex}upx`">
				<li v-for="(item, index) in lycArr" :key="index" :class="{active: index==lycIndex}">
					{{item.text}}
				</li>
			</ul>
		</view>
		<view class="nolyric" v-else>
			该歌曲没有歌词，请您欣赏
		</view>
	</view>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		props: ['changeBody'],
		data() {
			return {
				haveLyric: false,
				rawLyric: '',
				lycArr: [],
				lycIndex: 0, // 激活歌词的index值
			}
		},
		mounted() {
			let self = this;
			uni.request({
				url: `http://47.112.12.190/lyric?id=${self.songId}`,
				success: (res) => {
					// res.data.nolyric  true没有歌词 undefined有歌词
					self.haveLyric = !res.data.nolyric;
					if (self.haveLyric) {
						self.rawLyric = res.data.lrc.lyric;
						self.getLyricArr();
						self.audio.onTimeUpdate(()=>{
							self.countLycIndex();
						});
					}
				}
			})
		},
		methods: {
			getLyricArr() {
				for (let v of this.rawLyric.split('\n')) {
					v.replace(/^\[([0-9:\.]+)\](.+)/, (s, a, b) => {
						this.lycArr.push({time: a, text: b});
					})
				}
			},
			countLycIndex() {
				let index = -1;
				for (var v of this.lycArr) {
					if (this.currentTime >= v.time) {
						index++;
					} else {
						break
					}
				}
				this.lycIndex = index;
			}
		},
		computed: {
			...Vuex.mapState(['songId', 'currentTime', 'audio']),
		}
	}
</script>

<style>
	.lyrics {
		overflow: hidden;
	}
	.nolyric {
		color: #fff;
		text-align: center;
		padding-top: 50%;
	}
	.havelyric ul {
		padding-top: 80%;
		transition: .5s;
	}
	.havelyric ul li {
		text-align: center;
		color: #999;
		height: 120upx;
		padding: 0 40upx;
	}
	.active {
		color: #fff!important;
	}
</style>
