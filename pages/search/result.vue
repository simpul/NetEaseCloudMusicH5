<template>
	<view class="result">
		<h5>搜索结果</h5>			
		<view class="content">
			<ul>
				<li v-for="(item, index) in result" :key="index" @click="play(item.id)">
					<view class="name">{{item.name}}</view>
					<view class="artists">{{item.artists | artists}}</view>
				</li>
			</ul>
		</view>		
	</view>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		props: ['result'],
		updated() {
			document.documentElement.scrollTop = 0
		},
		computed: {
			...Vuex.mapState(['songId'])
		},
		methods: {
			...Vuex.mapActions(['setSrc']),
			play(id) {
				if (id !== this.songId) {
					this.setSrc(id);
					uni.navigateTo({
						url: '../player/player'
					})
				}
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
		}
	}
</script>

<style>
	.result {
		padding: 20upx;
	}
	.content li {
		padding: 10upx 8upx;
	}
	.name {
		font-size: 32upx;
		color: rgb(100, 80, 228);
	}
	.artists {
		font-size: 20upx;
		color: #999;
	}
</style>
