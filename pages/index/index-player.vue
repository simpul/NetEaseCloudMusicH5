<template>
	<view class="player" v-if="songDetail.name">
		<view class="pic" @click="toPlayer">
			<img :src="songDetail.al.picUrl+'?param=50y50'">
		</view>
		<view class="detail" @click="toPlayer">
			<p class="name onerow">{{songDetail.name}}</p>
			<p class="artists onerow">{{songDetail.ar | artists}}</p>
		</view>
		<view class="control">
			<cmd-icon :type="playState ? 'pause' : 'play'" color="#000" @click="switchState"></cmd-icon>
		</view>
		<view class="list">
			<cmd-icon type="playlist" color="#000" @click="toList"></cmd-icon>
		</view>
	</view>
</template>

<script>
	import cmdIcon from '@/components/cmd-icon/cmd-icon.vue'
	import Vuex from 'vuex';
	export default {
		computed: {
			...Vuex.mapState(['playState', 'songId', 'songDetail', 'audio']),
		},
		methods: {
			...Vuex.mapMutations(['playMusic', 'pauseMusic', 'startRotate', 'stopRotate']),
			switchState() {
				if (this.playState) {
					this.pauseMusic();
				} else {
					this.playMusic();
				}
			},
			toPlayer() {
				uni.navigateTo({
					url: '../player/player'
				})
			},
			toList() {
				this.$emit('list');
			}
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
		watch: {
			playState(newState, oldState) {
				if (newState) {
					this.startRotate();
				} else {
					this.stopRotate();
				}
			}
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	.player {
		position: fixed;
		z-index: 2;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 100upx;
		padding-top: 20upx;
		background-color: rgba(255, 255, 255, .9);
		border-top: 1px solid #ccc;
	}
	.onerow {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.pic img {
		height: 80upx;
		width: 80upx;
		border-radius: 50%;
	}
	.detail {
		width: 60%;
	}
	.detail .name {
		font-size: 36upx;
	}
	.detail .artists{
		color: #999;
		font-size: 28upx;
	}
	.control, .list {
		width: 80upx;
		text-align: center;
		line-height: 70upx;
	}
</style>
