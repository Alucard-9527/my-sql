<template>
  <div class="MainContent clear">
    <div class="news">
      <div class="header-content">
        <i>&#xe634;</i>{{titles}}
        <div class="more"><a href="javascript:void(0)" title="点击获取更多"><i>&#xe626;</i>更多</a></div>
      </div>
      <ul class="content-list">
        <li class="header-list" v-for="(item,index) in content1" :key="index"><a href="javascript:void(0)">{{item.news}}</a><span>[10-24]</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    content1: {
      type: Array
    },
    titles:{
      type: String
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1467029 */
  src: url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.eot');
  src: url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.woff') format('woff'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1467029_n5pyoc6464j.svg#iconfont') format('svg');
}
a{
  text-decoration: none;
  color: #ffff;
}
.MainContent{
  width: 636px;
}
.news{
  width: 100%;
  margin: 10px;
  float: left;
}
.header-content{
  width: 616px;
  height: 30px;
  font-size: 22px;
  line-height: 22px;
  color: rgb(4, 42, 104);
  border-bottom: 5px solid;
  border-image: linear-gradient( to left, #00a2ff, #1131a9) 30 30;
}
.header-content i{
  font-size: 30px;
  font-family: 'iconfont';
  font-style: normal;
  color: rgb(4, 42, 104);
}
.header-content .more{
  float: right;
  font-size: 20px
}
.header-content .more a{
  color: rgb(4, 42, 104);
}
.header-content .more i{
  font-size: 20px
}
.content-list li{
  width: 570px;
  height: 36px;
  margin-left: 36px;
  line-height: 36px;
  list-style-type: circle;
  font-size: 15px;
}
.content-list li a{
  color: rgb(4, 42, 104);
  float: left;
  width: 460px;
  height: 36px;
  line-height: 36px;
  display: block;
}
.content-list li span{
  float: right;
}
.content-list li:hover{
  list-style-type: disc;
}
.content-list li:hover a{
  color: rgb(255, 173, 0);
}
</style>
