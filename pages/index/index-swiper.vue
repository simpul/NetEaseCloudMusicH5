<template>
	<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="rgba(256, 256, 256, .5)" indicator-active-color="red" circular="true">
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
	.swiper-item img {
		width: 100%;
	}
	.swiper >>> .uni-swiper-dots-horizontal {
		bottom: 40upx!important;
	}
</style>
