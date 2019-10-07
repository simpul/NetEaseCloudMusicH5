# NetEaseCloudMusicH5
基于uni-app框架搭建的移动端H5版本仿网易云音乐播放器（VUE项目）



前台的实现只用到了uni-app这个框架和它提供的一些（内置和第三方）前端模块，图标使用的是阿里图标，状态管理使用vuex

后台api的架设使用了-> [网易云音乐 Node.js API service](https://github.com/Binaryify/NeteaseCloudMusicApi)

编译完成的html文件在：NetEaseCloudMusicH5/unpackage/dist/build/h5目录下，在服务器环境下运行，请使用浏览器的移动端调试功能获得最佳体验。






## 界面展示&功能说明

由于时间和精力有限，本项目暂时实现了一个音乐播放器的基本功能，后续根据后台提供的api去完善更多功能。



### 首页界面

仅展示：列表图标，轮播图以及下面五个选项

可交互：搜索音乐图标，推荐歌单和新碟两个模块，迷你播放器

![127.0.0.1_5500_index.html(iPhone X) (1)](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(1).png)



### 搜索页面

进入后会显示热搜榜和搜索历史记录，历史记录可删除，搜索栏上会显示搜索热词

![1570419458375](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(2).png)

输入关键词搜索后的页面出现搜索结果，隐藏热搜榜模块

![1570419522850](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(3).png)



### 推荐歌单页面

显示该歌单的内容详情（简介，作者名字，播放数量，评论数量，分享次数，收藏次数等），显示所有的歌单歌曲内容，可点击将所有歌曲添加到播放列表中进行播放。

![1570419644272](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X).png)



### 新碟页面

显示该专辑的内容详情（简介，歌手名字，评论数量，分享次数等），显示所有的歌单歌曲内容，可点击将所有歌曲添加到播放列表中进行播放。

![1570419774305](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(7).png)



### 音乐播放界面

音乐专辑封面会根据播放状态进行旋转，进度条可拖放调节播放进度，支持（单曲循环-列表循环-随机播放）三个播放模式的切换，控制音乐暂停/播放，切换上/下一首，打开音乐列表。

![1570419870715](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(4).png)

点击播放器页面可以在音乐封面和歌词之间进行切换，歌词会根据播放进度进行滚动轮播（暂时未实现拖动歌词控制播放进度功能）。

![1570420095213](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(5).png)



### 播放列表页面

点击列表图标会向上弹框一个微型播放列表，里面是播放列表的歌曲内容，可进行单曲/全部删除，可进行播放模式的切换，正在播放的音乐会有红色字体高亮表示。

![1570420171210](https://raw.githubusercontent.com/simpul/articles/master/127.0.0.1_5500_index.html(iPhone%20X)%20(6).png)
