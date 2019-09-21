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
		lyric: '', // 获取歌曲的歌词
		haveLyric: false, // 歌曲是否有歌词
		songId: 0, // 歌曲的id值
		playMode: 0, // 0单曲循环,1列表循环,2随机播放
		currentTime: '00:00', // 当前播放的的时间
		totalTime: '00:00', // 音频整体时间
		listArr: [], // 播放列表，一首歌对应一个对象，包含歌曲id, 歌名name, 歌手artists
		angle: 0, // player中专辑封面的旋转角度
		rotateId: 0, // 旋转动画的id，用来停止动画的时候用
		playIndex: 0, // 记录正在播放的歌曲在列表中的位置
		randomPlayArr: [], // 随机播放执行的顺序
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
		setLyric(state, str) {
			state.lyric = str;
		},
		setHaveLyric(state, bool) {
			state.haveLyric = bool;
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
		setNextSongIndex(state) {
			if (state.playIndex >= state.listArr.length - 1) {
				state.playIndex = 0;
			} else {
				state.playIndex++;
			}
		},
		setPrevSongIndex(state) {
			if (state.playIndex <= 0) {
				state.playIndex = state.listArr.length - 1;
			} else {
				state.playIndex--;
			}
		},
		setPlayIndex(state, index) {
			state.playIndex = index;
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
					state.playIndex = 0;
					uni.showToast({
						title: '列表循环模式',
						position: "bottom",
						icon: 'none'
					})
					break
				case 2:
					state.playIndex = 0;
					uni.showToast({
						title: '随机播放模式',
						position: "bottom",
						icon: 'none'
					})
			}
		},
		addSong(state, song) {
			for (let v of state.listArr) {
				if (v.id === song.id) return true;
			}
			state.listArr.push(song);
			
			state.randomPlayArr = [];
			for (let i = 0; i < state.listArr.length; i++) {
				state.randomPlayArr.push(i);
			}
			state.randomPlayArr.sort((a, b) => {return Math.random() - 0.5});
		},
		removeSong(state, index) {
			state.listArr.splice(index, 1);
			
			state.randomPlayArr = [];
			for (let i = 0; i < state.listArr.length; i++) {
				state.randomPlayArr.push(i);
			}
			state.randomPlayArr.sort((a, b) => {return Math.random() - 0.5});
		},
		deleteAllSong(state) {
			state.listArr = [];
			state.randomPlayArr = [];
		},
		
		startRotate(state) {
			if (state.rotateId) {
				clearInterval(state.rotateId);
			}
			state.rotateId = setInterval(()=>{
				state.angle+= 0.5;
			}, 50);
		},
		stopRotate(state) {
			clearInterval(state.rotateId);
		},
		resetAngle(state) {
			state.angle = 0;
		}
	},
	actions: {
		setSrc({commit, dispatch, state}, id) {
			new Promise((resolve, reject) => {
				uni.request({
					url: `http://47.112.12.190/check/music?id=${id}`,
					success(result) {
						if (result.data.success) {
							resolve("");
						} else {
							reject(result.data.message);
						}
					}
				})
			}).then(
				() => {
					Promise.all([
						new Promise((resolve, reject) => {
							// 设置歌曲src
							uni.request({
								url: `http://47.112.12.190/song/url?id=${id}`,
								success: (res) => {
									commit('setAudioSrc', res.data.data[0].url);
									commit('playMusic');
									commit('startRotate');
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
						}),
						new Promise((resolve, reject) => {
							// 获取歌词信息
							uni.request({
								url: `http://47.112.12.190/lyric?id=${id}`,
								success: (res) => {
									commit('setHaveLyric', !res.data.nolyric);
									if (!res.data.nolyric) {
										commit('setLyric', res.data.lrc.lyric);
									}
									resolve("");
								}
							})
						})
					]).then(arr => {
						let name = arr[1].name;
						let artists = arr[1].ar;
						commit('addSong', {name, artists , id});
					})
				}
			).catch(
				(err) => {
					uni.showToast({
						icon: 'none',
						duration: 1000,
						title: err
					})
				}
			)
		},
		nextSong({dispatch, commit, state}) {
			if (!state.listArr.length) {
				uni.showToast({
					title: '列表中没歌曲了，还不快去添加',
					icon: 'none',
					duration: 2000
				})
				return true;
			}
			switch(state.playMode) {
				case 0:
					dispatch('setSrc', state.songId);
				break
				case 1:
					commit('setNextSongIndex');
					dispatch('setSrc', state.listArr[state.playIndex].id);
				break
				case 2:
					commit('setNextSongIndex');
					dispatch('setSrc', state.listArr[state.randomPlayArr[state.playIndex]].id);
			}
			commit('resetAngle');
		},
		prevSong({dispatch, commit, state}) {
			if (!state.listArr.length) {
				uni.showToast({
					title: '列表中没歌曲了，还不快去添加',
					icon: 'none',
					duration: 1000
				})
				return true;
			}
			switch(state.playMode) {
				case 0:
					dispatch('setSrc', state.songId);
				break
				case 1:
					commit('setPrevSongIndex');
					dispatch('setSrc', state.listArr[state.playIndex].id);
				break
				case 2:
					commit('setPrevSongIndex');
					dispatch('setSrc', state.listArr[state.randomPlayArr[state.playIndex]].id);
			}
			commit('resetAngle');
		}
	}
})