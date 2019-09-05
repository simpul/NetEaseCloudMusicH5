<template>
	<view class="playlist">
		<view class="head">
			<view class="playall">
				<cmd-icon class="icon" type="play" size="22" color="#000"></cmd-icon>
				<span>播放全部</span>
				<span>(共{{trackCount}}首)</span>
			</view>
			<view class="collect" v-if="subscribedCount">
				+ 收藏 ({{subscribedCount | count}})
			</view>
		</view>
		<view class="songs">
			<ul>
				<li v-for="(item, index) in tracks" :key="index" @click="playlist(index)">
					<view class="index">
						<cmd-icon v-if="item.id === songId" type="volume-plus" size="24" color="red"></cmd-icon>
						<span v-else>{{index + 1}}</span>
					</view>
					<view class="song">
						<p>{{item.name}}</p>
						<p class="ar">{{item.ar | artists}} - {{item.al.name}}</p>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
	import Vuex from 'vuex'
	export default {
		props: ['trackCount', 'subscribedCount', 'tracks'],
		computed: {
			...Vuex.mapState(['songId'])
		},
		methods: {
			...Vuex.mapMutations(['addSong', 'deleteAllSong', 'setPlayIndex']),
			...Vuex.mapActions(['setSrc']),
			playlist(index) {
				this.deleteAllSong();
				for (let v of this.tracks) {
					let song = {};
					song.id = v.id;
					song.name = v.name;
					song.artists = v.ar;
					this.addSong(song);
				}
				this.setSrc(this.tracks[index].id);
				this.setPlayIndex(index);
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
			},
			count(value) {
				let count = value + '';
				if (count.length >= 9) {
					let num = count.slice(0, -7);
					return +num/10 + '亿';
				} else if (count.length >= 5) {
					let num = count.slice(0, -3);
					return +num/10 + '万';
				} else {
					return value;
				}
			}
		},
		components: {
			cmdIcon
		}
	}
</script>

<style>
	.playlist {
		background-color: #fff;
		min-height: calc(100vh - 728upx);
		padding-bottom: 124upx;
		border-radius: 60upx 60upx 0 0;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120upx;
		padding: 0 20upx;
	}
	.icon {
		margin: 0 30upx 0 20upx;
		vertical-align: text-bottom;
		border-radius: 50%;
	}
	.playall span:first-of-type {
		font-size: 32upx;
	}
	.playall span:last-of-type {
		font-size: 30upx;
		color: #666;
	}
	.collect {
		background-color: red;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		padding: 20upx;
		border-radius: 60upx;
	}
	.songs li {
		display: flex;
		align-items: center;
		height: 120upx;
	}
	.index {
		text-align: center;
		width: 120upx;
		color: #666;
	}
	.song p{
		width: calc(100vw - 124upx);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.song .ar {
		font-size: 28upx;
		color: #666;
	}
</style>
