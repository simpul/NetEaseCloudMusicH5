<script>
	import Vuex from 'vuex'
	export default {
		computed: {
			...Vuex.mapState(['audio']),
		},
		methods: {
			...Vuex.mapActions(['nextSong']),
		},
		onLaunch: function() {
			this.audio.onEnded(() => {
				this.nextSong();
			});
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
</style>
