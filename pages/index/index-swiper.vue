<template>
	<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500" indicator-color="rgba(256, 256, 256, .5)" indicator-active-color="red" circular="true">
			<swiper-item v-for="(item, index) in banners" :key="index">
				<view class="swiper-item">
					<img :src="item.imageUrl" :alt="index" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: ['banners'],
	}
</script>

<style>
	.swiper-item {
		width: 95%;
		margin: 10upx auto;
	}
	.swiper-item img {
		width: 100%;
		border-radius: 20upx;
	}
	.swiper swiper {
		min-height: 300upx!important;
	}
	.swiper >>> .uni-swiper-dots-horizontal {
		bottom: 40upx!important;
	}
</style>
