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
				lycIndex: 0, // 激活歌词的index值
			}
		},
		mounted() {
			this.audio.onTimeUpdate(() => {
				this.countLycIndex();
			});
		},
		methods: {
			countLycIndex() {
				if (!this.haveLyric) return true;
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
			...Vuex.mapState(['currentTime', 'audio', 'haveLyric', 'lyric']),
			lycArr() {
				if (!this.haveLyric) return "";
				let arr = [];
				for (let v of this.lyric.split('\n')) {
					v.replace(/^\[([0-9:\.]+)\](.+)/, (s, a, b) => {
						arr.push({time: a, text: b});
					})
				}
				return arr;
			}
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
