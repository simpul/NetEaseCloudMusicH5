import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		historyList: [], // 搜索页面中的历史列表
		searchKeyWord: '', // 搜索关键词
		audio: uni.createInnerAudioContext(), // 创建一个音频对象
		playState: false, // 表示当前音乐播放状态，true为播放，false为暂停
		songDetail: {}, // 歌曲的详情（歌手，歌名，专辑封面）
		songId: 0, // 歌曲的id值
		playMode: 0, // 0单曲循环,1列表循环,2随机播放
		currentTime: '00:00', // 当前播放的的时间
		totalTime: '00:00', // 音频整体时间
		listArr: [], // 播放列表，一首歌对应一个对象，包含歌曲id, 歌名name, 歌手artists
	},
	mutations: {
		addHistoryList(state, song) {
			state.historyList.push(song);
		},
		deleteHistoryList(state) {
			state.historyList = [];
		},
		setSearchKeyWord(state, keyword) {
			state.searchKeyWord = keyword;
		},
		
		setAudioSrc(state, src) {
			state.audio.src = src;
		},
		playMusic(state) {
			state.audio.play();
			state.playState = true;
		},
		pauseMusic(state) {
			state.audio.pause();
			state.playState = false;
		},
		setSongDetail(state, data) {
			state.songDetail = data;
		},
		setSongId(state, id) {
			state.songId = id;
		},
		setCurrentTime(state, time) {
			state.currentTime = time;
		},
		setTotalTime(state, time) {
			state.totalTime = time;
		},
		switchPlayMode(state) {
			if (state.playMode === 2) {
				state.playMode = 0;
			} else {
				state.playMode++;
			}
			switch(state.playMode) {
				case 0:
					uni.showToast({
						title: '单曲循环模式',
						position: "bottom",
						icon: 'none'
					})
					break
				case 1:
					uni.showToast({
						title: '列表循环模式',
						position: "bottom",
						icon: 'none'
					})
					break
				case 2:
					uni.showToast({
						title: '随机播放模式',
						position: "bottom",
						icon: 'none'
					})
			}
		},
		addSong(state, song) {
			console.log(state.songId, song);
		}
	},
	actions: {
		setSrc({commit, dispatch}, id) {
			Promise.all([
				new Promise((resolve, reject) => {
					// 设置歌曲src
					uni.request({
						url: `http://47.112.12.190/song/url?id=${id}`,
						success: (res) => {
							commit('setAudioSrc', res.data.data[0].url);
							commit('playMusic');
							commit('setSongId', id);
							resolve(res.data.data[0].url);
						}
					})
				}),
				new Promise((resolve, reject) => {
					// 顺便把歌曲的信息保存下来
					uni.request({
						url: `http://47.112.12.190/song/detail?ids=${id}`,
						success: (res) => {
							commit('setSongDetail', res.data.songs[0]);
							resolve(res.data.songs[0]);
						}
					})
				})
			]).then(arr => {
				let name = arr[1].name;
				let artists = arr[1].ar;
				commit('addSong', {name, artists , id});
			})
		}
	}
})