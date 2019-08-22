<template>
	<view class="progress">
		<view class="current">{{ currentTime }}</view>
		<slider 
			@change="drag" 
			@changing="dragging"
			backgroundColor="#999"
			block-size="12"
			activeColor="#eee"
			:value="value"
		/>
		<view class="total">{{ totalTime }}</view>
	</view>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		mounted() {
			this.audio.onTimeUpdate(()=>{
				this.progress();
			});
		},
		data() {
			return {
				value: 0,
				isDragged: false, // 进度条是否被拖动中
			}
		},
		methods: {
			...Vuex.mapMutations(['setCurrentTime', 'setTotalTime']),
			countTime() {
				// 播放到了多长时间
				let min = Math.floor(this.audio.currentTime / 60);
				min = min.toString().length === 1 ? ("0" + min): min;
				let sec = Math.round(this.audio.currentTime % 60);
				sec = sec.toString().length === 1 ? ("0" + sec): sec;
				// 总时间
				let zmin = Math.floor(this.audio.duration / 60);
				zmin = zmin.toString().length === 1 ? ("0" + zmin): zmin;
				let zsec = Math.round(this.audio.duration % 60);
				zsec = zsec.toString().length === 1 ? ("0" + zsec): zsec;
				
				return {
					currentTime: `${min}:${sec}`,
					totalTime: `${zmin}:${zsec}`
				}
			},
			progress() {
				let time = this.countTime();
				this.setCurrentTime(time.currentTime);
				//this.currentTime = time.currentTime;
				this.setTotalTime(time.totalTime);
				//this.totalTime = time.totalTime;
				if (!this.isDragged) {
					this.value = this.audio.currentTime / this.audio.duration * 100;
				}
			},
			dragging() {
				this.isDragged = true;
			},
			drag(e) {
				this.audio.seek(e.detail.value * this.audio.duration / 100);
				this.isDragged = false;
			}
		},
		computed: {
			...Vuex.mapState(['audio', 'currentTime', 'totalTime']),
		}
	}
</script>

<style>
	.progress {
		display: flex;
		justify-content: space-around;
		font-size: 28upx;
		padding: 30upx 10upx 0;
		line-height: 76upx;
	}
	slider {
		width: 70%;
		margin: 20upx 0;
	}
	.current {
		color: #eee;
	}
	.total {
		color: #999;
	}
</style>
